"""Regenerate the English pages after editing French pages or translations-en.json.
Run: python3 build-english.py. No network or external dependencies required.
"""
from pathlib import Path
from html.parser import HTMLParser
import html,json,re,hashlib
ROOT=Path(__file__).resolve().parent
D=json.loads((ROOT/'translations-en.json').read_text())
# Match complete prose fragments; never translate IDs, option values or numeric data.
keys=sorted((k for k in D if D[k]!=k and len(k)>2 and not any(c in k for c in '<>{}')),key=len,reverse=True)
pat=re.compile(r'(?<![^\W\d_])(?:'+'|'.join(re.escape(k) for k in keys)+r')(?![^\W\d_])')
def tr(s):
 t=s.strip()
 if t in D:return s.replace(t,D[t],1)
 return pat.sub(lambda m:D[m[0]],s)
class Translate(HTMLParser):
 def __init__(self):
  super().__init__(convert_charrefs=False);self.out=[];self.skip=0
 def handle_starttag(self,tag,attrs):
  raw=self.get_starttag_text()
  if tag in ['script','style']:self.skip+=1
  def attr(m):
   key,quote,v=m.groups()
   decoded=html.unescape(v)
   if key in ['title','alt','aria-label','placeholder','data-hint','data-explanation']:
    v=html.escape(tr(decoded),quote=True)
   elif key in ['src','href'] and v.startswith('assets/'):v='../'+v
   elif tag=='html' and key=='lang':v='en'
   elif key=='data-language':return m[0]
   return key+'='+quote+v+quote
  raw=re.sub(r'([\w-]+)=(["\'])(.*?)\2',attr,raw)
  self.out.append(raw)
 def handle_startendtag(self,t,a):
  self.handle_starttag(t,a)
 def handle_endtag(self,t):
  if t in ['script','style']:self.skip=max(0,self.skip-1)
  self.out.append('</'+t+'>')
 def handle_data(self,s):self.out.append(s if self.skip else html.escape(re.sub(r'(?<=\d),(?=\d)', '.', tr(s)),quote=False))
 def handle_entityref(self,n):self.out.append('&'+n+';')
 def handle_charref(self,n):self.out.append('&#'+n+';')
 def handle_comment(self,s):self.out.append('<!--'+s+'-->')
 def handle_decl(self,s):self.out.append('<!'+s+'>')
en=ROOT/'en';en.mkdir(exist_ok=True)
(ROOT/'english-dictionary.js').write_text('window.THERMO_EN='+json.dumps(D,ensure_ascii=False,separators=(',',':'))+';\n')
for p in ROOT.glob('*.html'):
 s=p.read_text()
 if 'class="language-switch"' not in s:
  nav='<nav class="language-switch" aria-label="Langue / Language"><a href="'+p.name+'" data-language="fr" lang="fr" aria-current="true">Français</a><a href="en/'+p.name+'" data-language="en" lang="en">English</a></nav>'
  if '</header>' in s:s=s.replace('</header>',nav+'</header>',1)
  elif '<body>' in s:s=s.replace('<body>','<body>'+nav,1)
  s=s.replace('</head>','<link rel="stylesheet" href="language.css?v=1"><script src="language.js?v=1" defer></script>\n</head>')
  p.write_text(s)
 parser=Translate();parser.feed(s);out=''.join(parser.out)
 # The switch always points to counterpart pages and survives without JavaScript.
 out=re.sub(r'href="[^"]*" data-language="fr"',f'href="../{p.name}" data-language="fr"',out)
 out=re.sub(r'href="[^"]*" data-language="en"',f'href="{p.name}" data-language="en"',out)
 out=out.replace('lang="fr" aria-current="true"','lang="fr" aria-current="false"').replace('data-language="en" lang="en"','data-language="en" lang="en" aria-current="true"')
 out=out.replace('</head>','<script src="../english-dictionary.js?v=1"></script><script src="../english.js?v=1" defer></script>\n</head>')
 for diagram in ['systeme-univers','transformations','cycle-hess']:
  out=out.replace('../assets/images/'+diagram+'.png','../assets/en/'+diagram+'.svg')
 (en/p.name).write_text(out)
for p in ROOT.glob('*.css'):(en/p.name).write_bytes(p.read_bytes())
for p in ROOT.glob('*.js'):
 if p.name in ['english.js','english-dictionary.js']:continue
 s=p.read_text().replace("'fr-FR'","'en-GB'")
 if p.name=='app.js':
  s=s.replace("'data-lang':'fr'","'data-lang':'en'")
  s=s.replace("'data-mapping':c.mapping||'pathname'","'data-mapping':'specific','data-term':location.pathname.replace('/en/','/')")
  for expr in ["document.querySelector('.module-heading').textContent","el.querySelector('legend').textContent","options[choices[j]].textContent","options[Number(el.dataset.correct)].textContent","el.dataset.explanation"]:
   # Canonical French text in stored attempts, keeping scores/IDs unchanged.
   if expr=="el.dataset.explanation":
    s=s.replace('explanation:'+expr,'explanation:window.ThermoEnglish.canonical('+expr+')')
   else:s=s.replace(':'+expr,':window.ThermoEnglish.canonical('+expr+')')
 if p.name=='exercices.js':
  s=s.replace("title:card.querySelector('h3').textContent","title:window.ThermoEnglish.canonical(card.querySelector('h3').textContent)")
 if p.name=='print-course.js':
  s=s.replace("page.document.close();","page.document.close();page.document.documentElement.lang='en';window.ThermoEnglish.translate(page.document);")
  s=s.replace("alert('Autorisez l’ouverture de la version imprimable dans un nouvel onglet, puis réessayez.')","alert('Allow the printable version to open in a new tab, then try again.')")
 (en/p.name).write_text(s)
print('English generated:',len(list(en.glob('*.html'))),'pages; shared progress keys preserved.')
