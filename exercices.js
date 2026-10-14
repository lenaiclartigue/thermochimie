'use strict';
(() => {
  const key='thermo-exercises-guided-v1';
  const version='2026-10-14-guided-v1';
  const pages=['systeme.html','premier-principe.html','enthalpie.html','enthalpie-reaction.html','hess.html','calorimetrie.html'];
  function read(){try{const x=JSON.parse(localStorage.getItem(key)||'{}');return x&&typeof x==='object'&&!Array.isArray(x)?x:{}}catch{return {}}}
  function write(all){try{localStorage.setItem(key,JSON.stringify(all))}catch{if(typeof toast==='function')toast('Les réponses ne peuvent pas être conservées dans ce navigateur.')}}
  function numeric(raw){const x=raw.trim().replace(/[\s\u00a0\u202f]/g,'').replace(/−/g,'-').replace(',','.');return /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(x)?Number(x):NaN}
  function fields(form){return [...form.querySelectorAll('[data-expected]')]}
  function show(form,checks){let filled=0,correct=0;for(const input of fields(form)){const state=checks[input.name];const target=document.getElementById(input.id+'-feedback');input.removeAttribute('aria-invalid');target.className='field-feedback';target.textContent='';if(state===true){correct++;filled++;target.textContent='Correct.';target.classList.add('good')}else if(state===false){filled++;target.textContent='À reprendre. '+input.dataset.hint;target.classList.add('bad');input.setAttribute('aria-invalid','true')}}const total=fields(form).length;form.querySelector('.exercise-feedback').textContent=filled?correct+' / '+total+' réponses correctes.'+(correct===total?' Exercice réussi. Vérifiez votre raisonnement avec la correction.':' Vous pouvez reprendre une étape ou ouvrir un indice.') : '';}
  const controllers=[];
  document.querySelectorAll('.exercise-form').forEach(form=>{
    const card=form.closest('.exercise-card'),id=form.dataset.exercise;
    let previous=read()[id];let checks=previous?.version===version&&previous.checks&&typeof previous.checks==='object'?{...previous.checks}:{};
    if(previous?.version===version){for(const input of fields(form)){if(typeof previous.responses?.[input.name]==='string')input.value=previous.responses[input.name]}}
    show(form,checks);
    function persist(){const all=read();const inputs=fields(form);all[id]={version,module:Number(document.querySelector('main').dataset.currentModule),title:card.querySelector('h3').textContent,updated_at:new Date().toISOString(),responses:Object.fromEntries(inputs.map(x=>[x.name,x.value])),checks:{...checks},correct:inputs.filter(x=>checks[x.name]===true).length,total:inputs.length,correction_viewed:previous?.correction_viewed||false};previous=all[id];write(all)}
    form.addEventListener('input',event=>{if(!event.target.matches('[data-expected]'))return;delete checks[event.target.name];show(form,checks);persist()});
    form.addEventListener('submit',event=>{event.preventDefault();let answered=0;for(const input of fields(form)){if(!input.value.trim()){delete checks[input.name];continue}answered++;checks[input.name]=input.tagName==='SELECT'?input.value===input.dataset.expected:(Number.isFinite(numeric(input.value))&&Math.abs(numeric(input.value)-Number(input.dataset.expected))<=Number(input.dataset.tolerance));}show(form,checks);if(!answered){form.querySelector('.exercise-feedback').textContent='Saisissez au moins une réponse avant de vérifier.';return}persist()});
    function reset(){checks={};previous=null;for(const input of fields(form))input.value='';show(form,checks);card.querySelectorAll('details').forEach(x=>x.open=false)}
    form.addEventListener('reset',()=>{reset();const all=read();delete all[id];write(all)});
    const solution=card.querySelector('.exercise-solution');solution.addEventListener('toggle',()=>{if(solution.open){previous={...previous,correction_viewed:true};persist()}});
    controllers.push(reset);
  });
  function renderSummary(){const host=document.getElementById('exercise-results');if(!host)return;const entries=Object.entries(read()).filter(([id,r])=>r?.version===version&&Number.isInteger(r.module)&&r.module>=1&&r.module<=6&&typeof r.title==='string');host.replaceChildren();const title=document.createElement('h2');title.textContent='Exercices travaillés';host.append(title);if(!entries.length){const p=document.createElement('p');p.textContent='Aucun exercice enregistré dans ce navigateur.';host.append(p);return}for(const [id,r] of entries){const p=document.createElement('p'),a=document.createElement('a');a.href=pages[r.module-1]+'#exercice-'+encodeURIComponent(id);a.textContent=r.title;p.append(a,document.createTextNode(' : '+Number(r.correct)+' / '+Number(r.total)+' réponses vérifiées correctes'+(r.correction_viewed?' · correction consultée.':'.')));host.append(p)}}
  window.thermoExercises={snapshot:read,clear(){try{localStorage.removeItem(key)}catch{}controllers.forEach(reset=>reset());renderSummary()}};
  if(document.getElementById('exercise-results')){if(typeof renderResults==='function')renderResults();renderSummary()}
  document.getElementById('print-practical')?.addEventListener('click',()=>window.print());
})();
