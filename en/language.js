/* Language preference is independent of quiz/exercise storage. */
(()=>{
 const isEnglish=document.documentElement.lang==='en';
 const key='thermo-language-v1';
 let preferred='fr';try{preferred=localStorage.getItem(key)||'fr'}catch{}
 const file=location.pathname.split('/').pop()||'index.html';
 if(!isEnglish&&preferred==='en'){
  location.replace('en/'+file+location.search+location.hash);return;
 }
 document.querySelectorAll('[data-language-select]').forEach(select=>{
  select.value=isEnglish?'en':'fr';
  select.addEventListener('change',()=>{
   const lang=select.value;
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
add(en?'Design: Lénaïc Lartigue':'Conception : Lénaïc Lartigue','h3');
add(en?'The layout is designed to help readers locate concepts, understand explanations and revise.':'La présentation vise à faciliter le repérage des notions, la compréhension des explications et les révisions.');
add(en?'Visual choices':'Choix de présentation','h3');
add(en?'Clear heading levels, consistent colours, distinct styles for definitions, thermodynamic laws and resources, and diagrams placed alongside the explanations. Numbered revision sheets group equations with their conditions of use.':'Hiérarchie des titres, couleurs cohérentes, distinction entre définitions, principes thermodynamiques et ressources, et schémas associés aux explications. Les fiches numérotées regroupent les formules et leurs conditions d’utilisation.');
add(en?'References':'Références','h3');
add(en?'These references guided the design of the site.':'Ces références ont guidé la conception du site.');
const list=document.createElement('ul');
for(const [label,url] of [['Nielsen Norman Group — 5 Principles of Visual Design','https://www.nngroup.com/articles/principles-visual-design/'],['The Learning Scientists — Dual Coding','https://www.learningscientists.org/blog/2016/9/1-1']]){const li=document.createElement('li'),a=document.createElement('a');a.textContent=label;a.href=url;a.target='_blank';a.rel='noopener noreferrer';li.append(a);list.append(li);}dialog.append(list);
add(en?'AI assistance':'Assistance de l’IA','h3');
add(en?'AI assisted with technical implementation, formatting and translation.':'Une assistance par IA a été utilisée pour la réalisation technique, la mise en forme et la traduction.');
document.body.append(dialog);trigger.setAttribute('aria-haspopup','dialog');trigger.onclick=()=>dialog.showModal();close.onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
})();
