'use strict';
(() => {
 const key='thermo-guides-v3';
 const read=()=>{try{return JSON.parse(localStorage.getItem(key)||'{}')||{}}catch{return {}}};
 const persist=(id,state)=>{try{const all=read();all[id]=state;localStorage.setItem(key,JSON.stringify(all));}catch{}};
 const esc=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const fmt=(x,d=2)=>Number(x).toLocaleString('fr-FR',{maximumFractionDigits:d});
 const controls=[];
 const field=(id,label,options,value='')=>`<label class="guide-field" for="${id}">${label}<select id="${id}"><option value="">Choisir…</option>${options.map(([v,t])=>`<option value="${esc(v)}" ${String(value)===String(v)?'selected':''}>${t}</option>`).join('')}</select></label>`;
 const caloConfig={
  etalonnage:{title:'Étalonnage par mélange d’eaux',tf:'28,22',rows:[['cal','Calorimètre','18','chauffe','Ccal','Ccal (28,22 − 18)'],['cold','Eau initialement froide','18','chauffe','mc','250 × 4,18 × (28,22 − 18)'],['hot','Eau initialement chaude','40','refroidit','mc','250 × 4,18 × (28,22 − 40)']],equation:'Ccal (28,22 − 18) + 250 × 4,18 × (28,22 − 18) + 250 × 4,18 × (28,22 − 40) = 0',isolate:'Ccal = −[Qeau froide + Qeau chaude] / (Tf − 18)',target:'etalonnage-reponse-1'},
  'zinc-cuivre':{title:'Réaction entre Zn et Cu²⁺',tf:'28',rows:[['cal','Calorimètre','18','chauffe','Ccal','160 × (28 − 18)'],['solution','Solution','18','chauffe','mc','150 × 4,18 × (28 − 18)'],['zinc','Zinc initial','20','chauffe','mc','3 × 0,380 × (28 − 20)']],equation:'Qréaction + 160 × (28 − 18) + 150 × 4,18 × (28 − 18) + 3 × 0,380 × (28 − 20) = 0',isolate:'Qréaction = −(Qcal + Qsolution + QZn)',target:'zinc-cuivre-reponse-4'}
 };

 function svgFrame(id,title,body,height=490){return `<div class="progressive-diagram" tabindex="0" role="region" aria-label="${title} — défilement horizontal si nécessaire"><svg viewBox="0 0 1080 ${height}" role="img" aria-label="${title}" xmlns="http://www.w3.org/2000/svg"><defs><marker id="${id}-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#19756d"/></marker><marker id="${id}-direct" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#ab4f55"/></marker></defs>${body}</svg></div><p class="diagram-mobile-hint">Sur petit écran, faites défiler le schéma horizontalement pour lire les deux chemins.</p>`;}
 function svgText(x,y,lines,cls=''){return `<text x="${x}" y="${y}" text-anchor="middle" class="${cls}">${lines.map((t,i)=>`<tspan x="${x}" dy="${i?25:0}">${esc(t)}</tspan>`).join('')}</text>`;}
 function svgNode(x,y,w,lines,caption){return `<rect x="${x}" y="${y}" width="${w}" height="115" rx="13" class="diagram-node"/>${svgText(x+w/2,y+25,[caption],'diagram-caption')}${svgText(x+w/2,y+56,lines)}`;}
 function svgEdge(id,x1,y1,x2,y2,label,lx,ly,direct=false){return `<path d="M${x1},${y1} L${x2},${y2}" class="diagram-arrow ${direct?'direct':''}" marker-end="url(#${id}-${direct?'direct':'arrow'})"/>${svgText(lx,ly,label,'diagram-edge-label')}`;}
 function thermalGraph(id,c,step){
  const reaction=id==='zinc-cuivre',tag='thermal-'+id;
  let b=svgText(540,28,['Construction graphique du bilan thermique'],'diagram-title');
  if(step===0){b+=`<rect x="155" y="65" width="770" height="290" rx="30" class="diagram-boundary"/>`+svgText(540,102,['Système : calorimètre + contenu'],'diagram-title')+svgText(540,160,reaction?['Calorimètre + solution contenant Cu²⁺ + zinc ajouté']:['Calorimètre + eau froide + eau chaude ajoutée'])+svgText(540,245,['Milieu extérieur au-delà de la frontière','Modèle : pas de chaleur échangée avec l’extérieur']);return svgFrame(tag,'Frontière du système thermique',b,390);}
  if(!reaction){
   b+=svgText(250,65,['État initial'],'diagram-title')+svgText(820,65,['Équilibre final'],'diagram-title');
   c.rows.forEach((r,i)=>{const y=95+i*100;b+=`<rect x="60" y="${y}" width="330" height="75" rx="12" class="diagram-node"/><rect x="690" y="${y}" width="330" height="75" rx="12" class="diagram-node"/>`+svgText(225,y+30,[r[1],r[2]+' °C'])+svgText(855,y+30,[r[1],c.tf+' °C']);
    if(step>=2)b+=svgEdge(tag,400,y+38,680,y+38,step>=3?[r[0]==='cal'?'Qcal = Ccal (Tf − 18)':r[0]==='cold'?'Qfroide = m₁c (Tf − 18)':'Qchaude = m₂c (Tf − 40)']: [r[3]==='chauffe'?'Réchauffement : Q > 0':'Refroidissement : Q < 0'],540,y+20);
   });
   if(step>=4)b+=svgText(540,432,['Ensemble adiabatique : Qcal + Qfroide + Qchaude = 0'],'diagram-title');
  }else{
   b+=svgNode(35,70,365,['Cal : 18 °C ; solution : 18 °C','Zinc : 20 °C'],'État initial : réactifs');
   b+=svgNode(690,70,355,['Produits de réaction à 28 °C','Calorimètre et solution à 28 °C'],'État final');
   b+=svgEdge(tag,410,110,680,110,[step>=4?'ΔHensemble = 0':'Transformation réelle'],545,85,true);
   if(step>=2){b+=svgNode(35,325,365,['Calorimètre, solution et zinc','tous à 28 °C'],'État intermédiaire fictif');
    b+=svgEdge(tag,215,195,215,315,step>=3?['Qcal + Qsolution + QZn']:['Chauffage des réactifs'],440,250);
    b+=svgEdge(tag,410,380,865,195,step>=3?['Qréaction = ξ ΔrH']:['Réaction à 28 °C'],780,322);
   }
   if(step>=4)b+=svgText(540,480,['Qcal + Qsolution + QZn + Qréaction = 0'],'diagram-title');
  }
  return svgFrame(tag,'Bilan thermique : états, transformations et contributions',b,reaction?510:465);
 }
 function calorimetry(host){
  const id=host.dataset.guidedBalance,c=caloConfig[id],reaction=id==='zinc-cuivre',stored=read()[id];
  let state=stored?.kind==='balance'?stored:{kind:'balance',step:0,answers:{},complete:false};
  const titles=['Délimiter le système','Décrire les états','Identifier les transformations','Écrire les contributions','Assembler le bilan','Isoler puis calculer'];
  const answer=(name,label,options)=>field(id+'-guide-'+name,label,options,state.answers[name]);
  function save(){persist(id,state)}
  function draw(){
   state.step=Math.max(0,Math.min(5,Number(state.step)||0));const step=state.step;
   let content='';
   if(step===0)content=`<p>Le système étudié comprend le récipient et son contenu. Le milieu extérieur se trouve au-delà de cette frontière.</p><div class="guide-system"><span class="guide-outside">Milieu extérieur</span><div class="guide-boundary"><strong>Frontière du système</strong><div class="guide-pieces"><span>Calorimètre</span>${reaction?'<span>Solution de Cu²⁺</span><span>Zinc ajouté</span>':'<span>Eau froide</span><span>Eau chaude ajoutée</span>'}</div></div></div>`+answer('system','Quel ensemble faut-il inclure dans le bilan ?',[['whole','Calorimètre + tous les constituants'],['water','Seulement le liquide'],['outside','Seulement le milieu extérieur']])+answer('heat','Dans le modèle du cours, la chaleur échangée avec l’extérieur est…',[['zero','Nulle : ensemble adiabatique'],['allzero','Nulle pour chaque constituant séparément'],['positive','Nécessairement positive']])+answer('pressure','La transformation est étudiée…',[['p','À pression constante'],['v','À volume constant imposé par une bombe']]);
   if(step===1)content=`<p>Identifiez la température initiale propre à chaque constituant. À l’équilibre thermique final, la température est commune : <strong>${c.tf} °C</strong>.</p>`+c.rows.map(r=>answer(r[0]+'-ti',r[1]+' : température initiale',[['18','18 °C'],['20','20 °C'],['40','40 °C'],[c.tf,c.tf+' °C']])).join('')+answer('final','À l’état final, la température est…',[['common',c.tf+' °C pour tous les constituants'],['initial','La température initiale de chacun']]);
   if(step===2)content='<p>Comparez chaque température initiale à la température finale, puis distinguez chauffage et réaction.</p>'+c.rows.map(r=>answer(r[0]+'-change',r[1]+` : ${r[2]} → ${c.tf} °C`,[['chauffe','Se réchauffe : contribution positive'],['refroidit','Se refroidit : contribution négative'],['phase','Change d’état : palier']])).join('')+(reaction?answer('reaction','Quelle transformation doit-on ajouter ?',[['chemical','Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)'],['fusion','La fusion du zinc'],['none','Aucune autre transformation']]):answer('reaction','Y a-t-il ici une réaction chimique ou un changement d’état ?',[['none','Non, seulement des variations de température'],['chemical','Oui, une réaction entre les deux eaux'],['fusion','Oui, une fusion']]))+ (reaction?'<p class="muted">On suit le chemin de calcul du diaporama : chauffage des réactifs jusqu’à Tf, puis réaction à Tf. Cela ne signifie pas que le zinc reste inchangé après la réaction réelle.</p>':'');
   if(step===3)content='<p>Choisissez la bonne expression. Dans chaque terme de chauffage, ΔT = Tf − Ti ; ce facteur porte déjà le signe.</p>'+c.rows.map(r=>answer(r[0]+'-term',r[1],[['Ccal','Ccal × (Tf − Ti)'],['mc','m × c × (Tf − Ti)'],['latent','n × ΔfusH'],['reaction','ξ × ΔrH']])).join('')+(reaction?answer('reaction-term','Contribution de la réaction',[['reaction','Qréaction ≈ ξ × ΔrH'],['mc','mZn × cZn × (Tf − Ti)'],['zero','Toujours nulle dans un calorimètre adiabatique']]):'');
   if(step===4)content='<p>Les contributions identifiées sont :</p><ul>'+c.rows.map(r=>'<li>'+r[1]+' : '+r[5]+'</li>').join('')+(reaction?'<li>Réaction : Qréaction</li>':'')+'</ul>'+answer('sum','Quel bilan traduit le caractère adiabatique de l’ensemble ?',[['all',(reaction?'Qréaction + Qcal + Qsolution + QZn':'Qcal + Qeau froide + Qeau chaude')+' = 0'],['each','Chaque contribution est nulle séparément'],['omit',reaction?'Qréaction + Qsolution = 0':'Qeau froide + Qeau chaude = 0']]);
   if(step===5)content='<p>Le bilan construit est :</p><div class="formula">'+c.equation+'</div>'+answer('isolate','Choisissez l’expression de l’inconnue',[['correct',c.isolate],['sign',reaction?'Qréaction = Qcal + Qsolution + QZn':'Ccal = [Qeau froide + Qeau chaude] / (Tf − 18)'],['omit',reaction?'Qréaction = −Qsolution':'Ccal = −[Qeau froide + Qeau chaude]']])+`<p>Après vérification, observez comment le bilan conduit au résultat. Les unités à utiliser sont ${reaction?'J pour les contributions, puis kJ pour la chaleur de réaction':'J·K⁻¹ pour la capacité du calorimètre'}.</p>`;
   host.innerHTML=`<p class="eyebrow">PARCOURS GUIDÉ · ${step+1} / 6</p><h4>${titles[step]}</h4><progress max="6" value="${state.complete?6:step}" aria-label="Étapes validées"></progress>${thermalGraph(id,c,step)}${content}<div class="thermal-controls">${step?'<button type="button" class="button secondary" data-guide-back>Précédent</button>':''}<button type="button" class="button" data-guide-check>Vérifier cette étape</button><button type="button" class="button secondary" data-guide-next hidden>${step===5?'Afficher le calcul expliqué':'Étape suivante'}</button><button type="button" class="text-link" data-guide-reset>Recommencer le parcours</button></div><p class="guide-feedback" role="status"></p><p class="muted">Exemple interactif du cours, non noté. Vos choix et l’étape atteinte sont conservés dans ce navigateur.</p>`;
   const expected=step===0?{system:'whole',heat:'zero',pressure:'p'}:step===1?Object.fromEntries([...c.rows.map(r=>[r[0]+'-ti',r[2]]),['final','common']]):step===2?Object.fromEntries([...c.rows.map(r=>[r[0]+'-change',r[3]]),['reaction',reaction?'chemical':'none']]):step===3?Object.fromEntries([...c.rows.map(r=>[r[0]+'-term',r[4]]),...(reaction?[['reaction-term','reaction']]:[])]):step===4?{sum:'all'}:{isolate:'correct'};
   const hints={system:'Incluez le récipient et tous les constituants, pas seulement le liquide.',heat:'Adiabatique concerne les échanges avec l’extérieur ; les constituants peuvent échanger de la chaleur entre eux.',pressure:'Il s’agit du calorimètre à pression constante du cours.',final:'L’équilibre thermique final implique une température commune.',reaction:reaction?'Il faut ajouter la réaction Zn/Cu²⁺ aux chauffages.':'Le mélange des deux eaux ne comporte ici que des variations de température.','reaction-term':'La réaction a sa propre contribution, distincte du chauffage du zinc.',sum:'Additionnez toutes les contributions ; leur somme est nulle, pas chacune séparément.',isolate:'Passez les autres termes de l’autre côté avec un signe moins ; pour Ccal, divisez aussi par ΔT.'};
   host.querySelectorAll('select').forEach(el=>el.addEventListener('change',()=>{state.answers[el.id.replace(id+'-guide-','')]=el.value;state.complete=false;host.querySelector('[data-guide-next]').hidden=true;host.querySelector('.guide-feedback').textContent='';save();}));
   host.querySelector('[data-guide-check]').onclick=()=>{let errors=[];for(const [name,value] of Object.entries(expected)){const el=document.getElementById(id+'-guide-'+name);const ok=el.value===value;el.setAttribute('aria-invalid',String(!ok));if(!ok)errors.push(!el.value?'Complétez tous les choix.':hints[name]||(name.endsWith('-ti')?'Reprenez la température initiale dans l’énoncé.':name.endsWith('-change')?'Comparez Tf à Ti : un réchauffement donne une contribution positive.':'Le récipient utilise Ccal ; un constituant utilise sa masse et sa capacité massique.'));}const ok=!errors.length;host.querySelector('.guide-feedback').textContent=ok?(step===5?'Le bilan et l’expression sont corrects. Affichez maintenant le calcul expliqué.':'Étape correcte. Vous pouvez poursuivre.'):Array.from(new Set(errors)).join(' ');host.querySelector('[data-guide-next]').hidden=!ok;if(ok&&step===5){state.complete=true;host.querySelector('progress').value=6;}save();};
   host.querySelector('[data-guide-next]').onclick=()=>{if(step<5){state.step++;save();draw();host.scrollIntoView({block:'start'});}else{host.querySelector('.guide-feedback').innerHTML=reaction?'<p>Qcal = 160 × 10 = 1 600 J ; Qsolution = 150 × 4,18 × 10 = 6 270 J ; QZn = 3 × 0,380 × 8 = 9,12 J.</p><p>Qréaction = −(1 600 + 6 270 + 9,12) = −7 879,12 J = <b>−7,87912 kJ</b>. La réaction fournit l’énergie reçue lors des chauffages ; la somme pour l’ensemble adiabatique est nulle.</p>':'<p>Qeau froide = 250 × 4,18 × 10,22 = 10 679,9 J ; Qeau chaude = 250 × 4,18 × (−11,78) = −12 310,1 J.</p><p>Qcal = −(10 679,9 − 12 310,1) = 1 630,2 J. Donc Ccal = 1 630,2/10,22 = <b>159,51 J·K⁻¹</b>. Le calorimètre absorbe une partie de la chaleur cédée par l’eau chaude.</p>';}};
   host.querySelector('[data-guide-back]')?.addEventListener('click',()=>{state.step--;save();draw();});
   host.querySelector('[data-guide-reset]').onclick=reset;
  }
  function reset(){state={kind:'balance',step:0,answers:{},complete:false};persist(id,state);draw();}
  controls.push(reset);draw();
 }

 function hydrazine(host){
  const id='hess-hydrazine';
  const equations=[
   ['2','NH₃(g) → ½ N₂(g) + 3/2 H₂(g)',46.19],
   ['3','N₂O₄(g) → 2 NO₂(g)',58.04],
   ['4','2 NH₃(g) → N₂H₄(l) + H₂(g)',142.8],
   ['5','2 NO₂(g) + 2 H₂(g) → N₂(g) + 2 H₂O(g) + O₂(g)',-551.36]
  ];
  const steps=[['3',1,58.04,'Dissocier N₂O₄ en NO₂ : construire le côté gauche du cycle.'],['4',-1,-142.8,'Inverser l’équation (4) : N₂H₄ et une mole de H₂ donnent deux NH₃.'],['5',1,-551.36,'Consommer les deux NO₂ et les deux H₂ restants : compléter le chemin inférieur.'],['2',2,92.38,'Transformer les deux NH₃ en N₂ et trois H₂ : remonter vers l’état final.']];
  const old=read()[id];let state=old?.kind==='hess'?old:{kind:'hess',step:0,choices:[],result:'',complete:false};state.step=Math.max(0,Math.min(4,Number(state.step)||0));
  function save(){persist(id,state)}
  function graph(){
   const tag='hydrazine-cycle',n=state.step;
   let b=svgText(540,30,['Même état initial, même état final : deux chemins'],'diagram-title');
   b+=svgNode(25,72,385,['N₂O₄(g) + N₂H₄(l)','+ 3 H₂(g) auxiliaires'],'État initial');
   b+=svgNode(670,72,385,['2 N₂(g) + 2 H₂O(g) + O₂(g)','+ 3 H₂(g) auxiliaires'],'État final');
   b+=svgEdge(tag,420,118,660,118,['ΔrH°₁ recherchée'],540,90,true);
   if(n>=1){b+=svgNode(25,350,300,['2 NO₂(g) + N₂H₄(l)','+ 3 H₂(g)'],'Après l’équation (3)');b+=svgEdge(tag,175,200,175,340,['ΔrH°₃'],255,270);}
   if(n>=2){b+=svgNode(390,350,300,['2 NO₂(g) + 2 NH₃(g)','+ 2 H₂(g)'],'Après l’inverse de (4)');b+=svgEdge(tag,330,405,380,405,['−ΔrH°₄'],355,330);}
   if(n>=3){b+=svgNode(755,350,300,['N₂(g) + 2 H₂O(g) + O₂(g)','+ 2 NH₃(g)'],'Après l’équation (5)');b+=svgEdge(tag,695,405,745,405,['ΔrH°₅'],720,330);}
   if(n>=4){b+=svgEdge(tag,905,340,905,200,['2 ΔrH°₂'],990,270);b+=svgText(540,510,['ΔrH°₁ = ΔrH°₃ − ΔrH°₄ + ΔrH°₅ + 2 ΔrH°₂'],'diagram-title');}
   return svgFrame(tag,'Cycle de Hess de l’hydrazine construit comme dans le corrigé du TD',b,545)+`<p class="diagram-reading">${n===4?'Le chemin indirect descend à gauche, passe par les états du bas puis remonte à droite. Pour fermer le cycle, on revient à l’état initial par la flèche supérieure prise en sens inverse : sa contribution est −ΔrH°₁. La somme sur cette boucle est nulle.':'La flèche supérieure représente la réaction recherchée. Chaque étape validée ajoute un état et une flèche au chemin indirect.'}</p>`;
  }
  function draw(){const step=state.step,choice=state.choices[step]||{};
   const target='N₂O₄(g) + N₂H₄(l) → 2 N₂(g) + 2 H₂O(g) + O₂(g)';
   host.innerHTML=`<p class="eyebrow">CONSTRUCTION GUIDÉE · TD 2.3, EXERCICE 6</p><h3>Construire le cycle de l’hydrazine</h3><p>Réaction cible à 298 K :</p><div class="formula">${target}</div><p>Les quatre équations et leurs données sont celles du fascicule. On choisit ici un ordre de construction ; d’autres combinaisons équivalentes sont possibles.</p><div class="table-wrap"><table><thead><tr><th>Équation</th><th>ΔrH° (kJ·mol⁻¹)</th></tr></thead><tbody>${equations.map(r=>`<tr><td>(${r[0]}) ${r[1]}</td><td>${fmt(r[2])}</td></tr>`).join('')}</tbody></table></div><p><strong>Pourquoi ajouter 3 H₂ ?</strong> Pour écrire ce chemin intermédiaire, on ajoute fictivement trois moles de H₂ des deux côtés, comme dans le corrigé du TD. Une est consommée lors de l’inversion de (4), deux lors de (5), puis les trois sont reformées avec 2 × (2). Elles s’annulent dans le bilan global. Ces étapes ne décrivent pas le mécanisme réel de la réaction.</p>${graph()}<progress max="5" value="${state.complete?5:step}" aria-label="Étapes validées"></progress>`+(step<4?`<h4>Étape ${step+1} : choisir et orienter une équation</h4><p>${steps[step][3]}</p>`+field('hydrazine-equation','Équation à utiliser',equations.map(r=>[r[0],'Équation ('+r[0]+')']),choice.equation)+field('hydrazine-sign','Sens',[['1','Sens direct'],['-1','Sens inverse']],choice.sign)+field('hydrazine-factor','Facteur multiplicatif',[['0.5','½'],['1','1'],['2','2'],['3','3']],choice.factor):`<h4>Dernière étape : simplifier et calculer</h4><p>Les 3 H₂ ajoutés figurent dans les deux états extrêmes : ils s’annulent. Le chemin donne bien la réaction cible.</p><div class="formula">ΔrH° = ΔrH°₃ − ΔrH°₄ + 2 ΔrH°₂ + ΔrH°₅<br>= 58,04 − 142,80 + 2 × 46,19 − 551,36</div><label class="guide-field" for="hydrazine-result">Votre résultat (kJ·mol⁻¹)<input id="hydrazine-result" type="text" inputmode="decimal" value="${esc(state.result)}"></label>`)+`<div class="thermal-controls"><button type="button" class="button" data-hydrazine-check>${step<4?'Vérifier et ajouter au cycle':'Vérifier mon calcul'}</button>${step?'<button type="button" class="button secondary" data-hydrazine-back>Revenir à l’étape précédente</button>':''}<button type="button" class="text-link" data-hydrazine-reset>Recommencer le cycle</button></div><p class="guide-feedback" role="status"></p><p class="muted">Exemple interactif du cours, non noté ; vos choix et le calcul sont conservés et exportables avec les résultats. Les quatre ΔrH° concernent la même température ; les phases doivent être conservées.</p>`;
   if(step<4){host.querySelectorAll('select').forEach(el=>el.onchange=()=>{state.choices[step]={equation:document.getElementById('hydrazine-equation').value,sign:document.getElementById('hydrazine-sign').value,factor:document.getElementById('hydrazine-factor').value};state.complete=false;save();});}
   else document.getElementById('hydrazine-result').oninput=e=>{state.result=e.target.value;state.complete=false;save();host.querySelector('.guide-feedback').textContent='';};
   host.querySelector('[data-hydrazine-check]').onclick=()=>{
    const feedback=host.querySelector('.guide-feedback');
    if(step<4){const q=state.choices[step]||{},expected=steps[step];if(!q.equation||!q.sign||!q.factor){feedback.textContent='Choisissez l’équation, son sens et le facteur.';return;}
     if(q.equation!==expected[0]||Number(q.sign)*Number(q.factor)!==expected[1]){feedback.textContent='Pour cette étape du chemin, vérifiez les espèces à consommer et à former. Inverser change le signe ; multiplier change tous les coefficients et l’enthalpie.';return;}
     state.step++;save();draw();host.querySelector('.progressive-diagram').scrollIntoView({block:'start'});
    }else{const raw=String(state.result).trim().replace(/−/g,'-').replace(',','.');const value=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(raw)?Number(raw):NaN;const ok=Number.isFinite(value)&&Math.abs(value+543.74)<=.02;state.complete=ok;feedback.textContent=ok?'Correct : ΔrH° = −543,74 kJ·mol⁻¹. La réaction cible est exothermique. Le chemin inverse contribue +543,74 kJ pour ξ = 1 mol : la somme sur le cycle est nulle.':'Reprenez les quatre contributions avec leurs signes. Le facteur 2 concerne l’équation (2), et l’équation (4) est inversée.';host.querySelector('progress').value=ok?5:4;save();}
   };
   host.querySelector('[data-hydrazine-back]')?.addEventListener('click',()=>{state.step--;state.complete=false;state.choices=state.choices.slice(0,state.step+1);save();draw();});
   host.querySelector('[data-hydrazine-reset]').onclick=reset;
  }
  function reset(){state={kind:'hess',step:0,choices:[],result:'',complete:false};persist(id,state);draw();}
  controls.push(reset);draw();
 }

 function propaneGraph(){
  const host=document.getElementById('hess-builder');if(!host)return;
  const box=document.createElement('div');box.id='propane-graph';host.prepend(box);
  const inputs=[1,2,3].map(i=>document.getElementById('propane-reponse-'+i));
  function draw(){const k=inputs.map(x=>Number(x.value.trim().replace(',','.'))),tag='propane-cycle';
   let b=svgText(540,30,['Construire le cycle de formation du propane'],'diagram-title');
   b+=svgNode(25,70,385,['3 C(graphite) + 4 H₂(g)','+ 5 O₂(g) auxiliaires'],'État initial');
   b+=svgNode(670,70,385,['C₃H₈(g)','+ 5 O₂(g) auxiliaires'],'État final');
   b+=svgEdge(tag,420,120,660,120,['ΔfH° recherchée'],540,90,true);
   if(k.some(v=>v!==0))b+=svgNode(345,335,390,['3 CO₂(g) + 4 H₂O(l)'],'État intermédiaire commun');
   if(k[1]===3&&k[2]===4)b+=svgEdge(tag,220,200,420,325,['3 ΔrH°₂ + 4 ΔrH°₃'],225,275);
   if(k[0]===-1)b+=svgEdge(tag,660,325,860,200,['−ΔrH°₁'],855,275);
   if(k[0]===-1&&k[1]===3&&k[2]===4)b+=svgText(540,490,['ΔfH° = 3 ΔrH°₂ + 4 ΔrH°₃ − ΔrH°₁'],'diagram-title');
   box.innerHTML=svgFrame(tag,'Cycle du propane : réaction directe et chemin par CO₂ et H₂O',b,520)+'<p>Les flèches du chemin indirect apparaissent quand les multiplicateurs relient les états indiqués. Les 5 O₂ auxiliaires sont présents aux deux extrémités et s’annulent dans la réaction globale.</p>';
  }
  inputs.forEach(i=>i.addEventListener('input',draw));draw();
 }
 propaneGraph();
 document.querySelectorAll('[data-guided-balance]').forEach(calorimetry);
 document.querySelectorAll('[data-guided-hydrazine]').forEach(hydrazine);
 window.thermoGuides={snapshot:read,clear(){controls.forEach(f=>f());try{localStorage.removeItem(key)}catch{}renderSummary();}};
 function renderSummary(){const host=document.getElementById('guide-results');if(!host)return;const all=read();host.innerHTML='<h2>Parcours de construction</h2>'+Object.entries(all).filter(([id])=>['etalonnage','zinc-cuivre','hess-hydrazine'].includes(id)).map(([id,s])=>`<p>${id==='hess-hydrazine'?'Cycle de l’hydrazine':caloConfig[id].title} : ${s.complete?'parcours validé': 'étape '+(Number(s.step)+1)+' en cours'}.</p>`).join('');if(!Object.keys(all).length)host.innerHTML+='<p>Aucun parcours guidé enregistré.</p>';}
 renderSummary();if(document.getElementById('results-content')&&typeof renderResults==='function')renderResults();
})();
