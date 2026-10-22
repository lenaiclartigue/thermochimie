/* Language preference is independent of quiz/exercise storage. */
(()=>{
 const isEnglish=document.documentElement.lang==='en';
 const key='thermo-language-v1';
 let preferred='fr';try{preferred=localStorage.getItem(key)||'fr'}catch{}
 const file=location.pathname.split('/').pop()||'index.html';
 if(!isEnglish&&preferred==='en'){
  location.replace('en/'+file+location.search+location.hash);return;
 }
 document.querySelectorAll('[data-language-link]').forEach(link=>{
  link.addEventListener('click',event=>{
   if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
   event.preventDefault();
   const lang=link.dataset.languageLink;
   if(!['fr','en'].includes(lang))return;
   const target=lang==='en'?(isEnglish?'':'en/'):(isEnglish?'../':'');
   // Retain an unfinished quiz when switching language, without awarding a score.
   const module=document.querySelector('main')?.dataset.currentModule;
   const items=[...document.querySelectorAll('#quiz-form .quiz-item')];
   if(module&&items.length)try{
    const storageKey='thermo-answers-six-slides-v3';
    const all=JSON.parse(localStorage.getItem(storageKey)||'{}');
    all[module]=items.map(item=>{const inputs=[...item.querySelectorAll('input')];const index=inputs.findIndex(input=>input.checked);return index<0?null:index;});
    localStorage.setItem(storageKey,JSON.stringify(all));
   }catch{}
   try{localStorage.setItem(key,lang)}catch{}location.assign(target+file+location.search+location.hash);});
 });
})();

/* Design references: local dialog, no navigation away from the lesson. */
(()=>{
const trigger=document.querySelector('.design-credit');if(!trigger)return;
const en=document.documentElement.lang==='en';
const dialog=document.createElement('dialog');dialog.className='license-dialog design-dialog';dialog.setAttribute('aria-labelledby','design-title');
const close=document.createElement('button');close.type='button';close.className='close';close.textContent='×';close.setAttribute('aria-label',en?'Close':'Fermer');dialog.append(close);
const heading=document.createElement('h2');heading.id='design-title';heading.textContent=en?'Design and teaching choices':'Conception et choix pédagogiques';dialog.append(heading);
const add=(text,tag='p')=>{const el=document.createElement(tag);el.textContent=text;dialog.append(el);return el;};
add(en?'References':'Références','h3');
add(en?'These references guided the design of the site.':'Ces références ont guidé la conception du site.');
const list=document.createElement('ul');
for(const [label,url] of [['Nielsen Norman Group — 5 Principles of Visual Design','https://www.nngroup.com/articles/principles-visual-design/'],['The Learning Scientists — Dual Coding','https://www.learningscientists.org/blog/2016/9/1-1'],['CESE — Managing cognitive load through effective presentations','https://education.nsw.gov.au/about-us/education-data-and-research/cese/publications/practical-guides-for-educators/managing-cognitive-load-through-effective-presentations'],['IBM Carbon — Progress indicator','https://www.carbondesignsystem.com/building-blocks/core/components/progress-indicator/specifications'],['W3C WAI — Accessibility principles','https://www.w3.org/WAI/fundamentals/accessibility-principles/']]){const li=document.createElement('li'),a=document.createElement('a');a.textContent=label;a.href=url;a.target='_blank';a.rel='noopener noreferrer';li.append(a);list.append(li);}dialog.append(list);
document.body.append(dialog);trigger.setAttribute('aria-haspopup','dialog');trigger.onclick=()=>dialog.showModal();close.onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
})();

(()=>{const id=Number(document.querySelector('main')?.dataset.currentModule);if(id>=1&&id<=6)try{const key='thermo-visits-v1';const visits=JSON.parse(localStorage.getItem(key)||'{}');visits[id]=Date.now();localStorage.setItem(key,JSON.stringify(visits))}catch{}})();

/* Audience notice uses the same modal presentation as sharing terms. */
(()=>{
 const trigger=document.querySelector('.audience-trigger');
 const dialog=document.getElementById('audience-dialog');
 if(!trigger||!dialog)return;
 trigger.addEventListener('click',()=>dialog.showModal());
 dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{
  if(event.target!==dialog)return;
  const box=dialog.getBoundingClientRect();
  if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close();
 });
 dialog.addEventListener('close',()=>trigger.focus());
})();

/* Reserve the actual bar heights, including wrapped navigation and zoom. */
(()=>{
 const header=document.querySelector('.topbar'),footer=document.querySelector('.site-footer');
 if(!header||!footer)return;
 const update=()=>{
  document.documentElement.style.setProperty('--site-header-height',header.getBoundingClientRect().height+'px');
  document.documentElement.style.setProperty('--site-footer-height',footer.getBoundingClientRect().height+'px');
 };
 update();new ResizeObserver(update).observe(header);new ResizeObserver(update).observe(footer);
 window.addEventListener('resize',update);
})();
