"""Generate matching French/English SVG diagrams from shared geometry."""
from pathlib import Path
from html import escape
R=Path(__file__).resolve().parent/'assets'
def text(x,y,s,size=24,cls='',anchor='middle'):
 return f'<text x="{x}" y="{y}" font-size="{size}" class="{cls}" text-anchor="{anchor}">{escape(s)}</text>'
def arrow(d,color='#2563eb'):
 return f'<path d="{d}" fill="none" stroke="{color}" stroke-width="3" marker-end="url(#arrow)"/>'
def wrap(w,h,body,title):
 return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" role="img" aria-labelledby="title"><title id="title">{title}</title><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#2563eb"/></marker></defs><style>text{{font-family:Arial,sans-serif;fill:#172e42}}.strong{{font-weight:700}}.white{{fill:white}}.blue{{fill:#2563eb}}</style><rect width="{w}" height="{h}" fill="white"/>{body}</svg>'''
def dh(x,y,n=''):
 return f'<text x="{x}" y="{y}" text-anchor="middle" font-size="28" class="blue">Δ<tspan baseline-shift="sub" font-size="18">r</tspan>H<tspan baseline-shift="sub" font-size="18">{n}</tspan><tspan baseline-shift="super" font-size="18">°</tspan></text>'
for lang in ['fr','en']:
 def L(fr,en):return fr if lang=='fr' else en
 out=R/lang;out.mkdir(exist_ok=True)
 b='<rect x="180" y="14" width="805" height="290" rx="35" fill="#f8fafc" stroke="#172e42" stroke-width="3"/><ellipse cx="620" cy="165" rx="210" ry="125" fill="white" stroke="#172e42" stroke-width="3" stroke-dasharray="10 7"/>'
 b+=text(85,170,L('UNIVERS','UNIVERSE'),25,'strong')+text(205,48,L('ENVIRONNEMENT','SURROUNDINGS'),24,'strong','start')+text(620,175,L('SYSTÈME','SYSTEM'),26,'strong')
 for x,label,c in [(280,L('Matière','Matter'),'#2563eb'),(710,L('Énergie','Energy'),'#0f766e')]:
  b+=f'<path d="M{x} 165l65 -60v30h100v-30l65 60 -65 60v-30h-100v30Z" fill="{c}"/>'+text(x+115,174,label,24,'white')
 b+=text(385,290,L('Paroi','Boundary'),22)+arrow('M435 280L477 251')
 (out/'systeme-univers.svg').write_text(wrap(1000,320,b,L('Système, environnement et univers','System, surroundings and universe')))
 b=''
 for x,chem,state in [(20,'A + B',L('E.I.','I.S.')),(800,'C',L('E.F.','F.S.'))]:
  b+=f'<rect x="{x}" y="20" width="180" height="225" rx="25" fill="#0f766e"/>'+text(x+90,78,chem,32,'white')+text(x+90,142,state,28,'white strong')+text(x+90,211,'D(g)' if x==20 else 'D(l)',32,'white')
 b+=text(500,53,L('Transformation chimique','Chemical process'),28)+arrow('M245 78H755')+arrow('M245 210H755')+text(500,253,L('Transformation physique','Physical process'),28)
 (out/'transformations.svg').write_text(wrap(1000,280,b,L('Transformations chimique et physique','Chemical and physical processes')))
 b=''
 for x,lab,sub in [(250,L('État initial','Initial state'),L('(réactifs)','(reactants)')),(750,L('État final','Final state'),L('(produits)','(products)'))]:
  b+=f'<ellipse cx="{x}" cy="215" rx="205" ry="85" fill="#f8fafc" stroke="#172e42" stroke-width="3"/>'+text(x,205,lab,30,'strong')+text(x,246,sub,28)
 b+=arrow('M385 115Q500 18 615 115')+dh(500,45)
 for x,y,n in [(320,410,1),(510,455,2),(700,410,3)]:
  b+=f'<circle cx="{x}" cy="{y}" r="43" fill="#0f766e"/>'+text(x,y+11,str(n),34,'white strong')
 b+=arrow('M110 317Q150 395 253 410')+arrow('M315 472Q395 533 462 505')+arrow('M555 525Q650 535 701 470')+arrow('M791 429Q868 390 886 315')
 b+=dh(100,460,'1')+dh(320,565,'2')+dh(670,585,'3')+dh(900,470,'4')
 (out/'cycle-hess.svg').write_text(wrap(1000,620,b,L('Cycle de Hess','Hess cycle')))
 b='<path d="M330 140H570Q630 140 630 200V570Q630 630 570 630H330Q270 630 270 570V200Q270 140 330 140Z" fill="#64748b" stroke="#172e42" stroke-width="3"/><rect x="302" y="175" width="296" height="422" rx="44" fill="white" stroke="#172e42" stroke-width="3"/><path d="M304 315Q310 530 450 540Q590 530 596 315L570 385H330Z" fill="#f1f5f9" stroke="#172e42" stroke-width="2"/><path d="M330 385H570Q555 510 450 515Q345 510 330 385Z" fill="#a5d9e7" stroke="#172e42" stroke-width="2"/><rect x="235" y="630" width="430" height="28" fill="#e2e8f0" stroke="#172e42" stroke-width="3"/><rect x="354" y="75" width="14" height="390" rx="4" fill="white" stroke="#172e42"/><rect x="484" y="70" width="14" height="385" rx="4" fill="white" stroke="#172e42"/><ellipse cx="474" cy="459" rx="24" ry="13" fill="white" stroke="#172e42"/><ellipse cx="510" cy="459" rx="24" ry="13" fill="white" stroke="#172e42"/><path d="M423 131V185H437V140H451V185H465V131" fill="white" stroke="#172e42"/>'
 for x,y in [(435,96),(450,95),(435,110),(449,110),(460,117),(435,124),(450,127)]:b+=f'<circle cx="{x}" cy="{y}" r="5" fill="#64748b"/>'
 b+=text(445,47,'Zn(s)',30)+text(580,92,L('Agitateur','Stirrer'),25)+text(140,435,L('Thermomètre','Thermometer'),25)+text(450,499,'Cu²⁺(aq)',27)
 (out/'calorimetre-zinc-cuivre.svg').write_text(wrap(760,680,b,L('Calorimètre : zinc et ions cuivre','Calorimeter: zinc and copper ions')))
print('4 matching diagram pairs generated')
