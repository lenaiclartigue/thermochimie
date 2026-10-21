/* Language preference is independent of quiz/exercise storage. */
(()=>{
 const isEnglish=document.documentElement.lang==='en';
 const key='thermo-language-v1';
 let preferred='fr';try{preferred=localStorage.getItem(key)||'fr'}catch{}
 const file=location.pathname.split('/').pop()||'index.html';
 if(!isEnglish&&preferred==='en'){
  location.replace('en/'+file+location.search+location.hash);return;
 }
 document.querySelectorAll('[data-language]').forEach(a=>{
  const lang=a.dataset.language;
  a.setAttribute('aria-current',lang===(isEnglish?'en':'fr')?'true':'false');
  const target=lang==='en'?(isEnglish?'':'en/'):(isEnglish?'../':'');
  a.href=target+file+location.search+location.hash;
  a.addEventListener('click',()=>{
   // Retain an unfinished quiz when switching language, without awarding a score.
   const module=document.querySelector('main')?.dataset.currentModule;
   const items=[...document.querySelectorAll('#quiz-form .quiz-item')];
   if(module&&items.length)try{
    const storageKey='thermo-answers-six-slides-v3';
    const all=JSON.parse(localStorage.getItem(storageKey)||'{}');
    all[module]=items.map(item=>{const inputs=[...item.querySelectorAll('input')];const index=inputs.findIndex(input=>input.checked);return index<0?null:index;});
    localStorage.setItem(storageKey,JSON.stringify(all));
   }catch{}
   try{localStorage.setItem(key,lang)}catch{}a.href=target+file+location.search+location.hash;});
 });
})();
