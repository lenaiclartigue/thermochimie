'use strict';
(() => {
function initExisting(){
  const byId = id => document.getElementById(id);
  const number = (x, digits = 3) => x.toLocaleString('fr-FR', {maximumFractionDigits: digits});
  const exchanges = {
    ouvert: ['Ouvert : échanges possibles de matière et d’énergie.', true, true],
    ferme: ['Fermé : aucun échange de matière ; transfert d’énergie possible.', false, true],
    isole: ['Isolé : aucun échange de matière ni transfert d’énergie.', false, false]
  };
  document.querySelectorAll('[data-system-kind]').forEach(button => button.addEventListener('click', () => {
    const [description, matter, energy] = exchanges[button.dataset.systemKind];
    document.querySelectorAll('[data-system-kind]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    byId('matter-arrow').style.display = matter ? '' : 'none';
    byId('energy-arrow').style.display = energy ? '' : 'none';
    byId('system-exchanges-result').textContent = description;
    byId('system-diagram-desc').textContent = description;
  }));
  if (byId('energy-exchanges')) {
    let kind = 'Q', direction = 'recu';
    function drawEnergy() {
      const received = direction === 'recu';
      const label = kind === 'Q' ? 'Chaleur' : 'Travail';
      const sign = received ? '> 0' : '< 0';
      const explanation = kind === 'Q'
        ? (received ? 'Le transfert entre dans le système (endothermique).' : 'Le transfert sort du système (exothermique).')
        : (received ? 'Le transfert entre dans le système, par exemple lors d’une compression contre une pression positive.' : 'Le transfert sort du système, par exemple lors d’une détente contre une pression positive.');
      const description = `${label} ${received ? (kind === 'Q' ? 'reçue' : 'reçu') : (kind === 'Q' ? 'cédée' : 'cédé')} : ${kind} ${sign}. ${explanation}`;
      document.querySelectorAll('[data-energy-kind]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.energyKind === kind)));
      document.querySelectorAll('[data-energy-direction]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.energyDirection === direction)));
      byId('transfer-arrow').setAttribute('d', received ? 'M90 145H410m-14-9 14 9-14 9' : 'M410 145H90m14-9-14 9 14 9');
      byId('transfer-arrow').setAttribute('stroke', received ? '#226956' : '#a64e28');
      byId('transfer-symbol').setAttribute('fill', received ? '#226956' : '#a64e28');
      byId('transfer-symbol').textContent = `${kind} ${sign}`;
      byId('energy-result').textContent = description;
      byId('energy-description').textContent = description;
    }
    document.querySelectorAll('[data-energy-kind]').forEach(b => b.addEventListener('click', () => {kind = b.dataset.energyKind; drawEnergy();}));
    document.querySelectorAll('[data-energy-direction]').forEach(b => b.addEventListener('click', () => {direction = b.dataset.energyDirection; drawEnergy();}));
    drawEnergy();
  }
  const slider = byId('rectangle-count');
  if (!slider) return;
  let mode = 'variable';
  function chart(n, id) {
    const variable = mode === 'variable';
    const pressure = v => variable ? 2 / v : 1;
    const x = v => 50 + (v - 1) * 150;
    const y = p => 205 - p * 80;
    const width = 2 / n;
    let area = 0, rectangles = '';
    for (let i = 0; i < n; i++) {
      const v = 1 + i * width, p = pressure(v + width / 2);
      area += p * width;
      rectangles += `<rect x="${x(v)}" y="${y(p)}" width="${width * 150}" height="${p * 80}" fill="#e9b99d" fill-opacity=".65" stroke="#ad562d" stroke-width=".6"/>`;
    }
    const path = Array.from({length: 101}, (_, i) => `${i ? 'L' : 'M'}${x(1 + i / 50)},${y(pressure(1 + i / 50))}`).join(' ');
    const exact = variable ? 2 * Math.log(3) : 2;
    let ticks = '';
    for (const v of [1, 2, 3]) ticks += `<text x="${x(v)}" y="225" text-anchor="middle">${v}</text>`;
    for (const p of [0, 1, 2]) ticks += `<text x="40" y="${y(p) + 5}" text-anchor="end">${p}</text>`;
    byId('integral-' + id).innerHTML = `<svg viewBox="0 0 400 255" role="img" aria-labelledby="${id}-title ${id}-desc"><title id="${id}-title">${n} rectangles sous la courbe de pression</title><desc id="${id}-desc">De 1 à 3 litres. Pression ${variable ? 'variable, 2/V' : 'constante, 1 bar'}. Somme des aires : ${number(area)} bar litre ; aire exacte : ${number(exact)} bar litre.</desc><text x="50" y="20" font-size="14">p ext (bar)</text>${rectangles}<path class="pressure-curve" d="${path}" fill="none" stroke="#172e42" stroke-width="3"/><path d="M50 30V205H360" fill="none" stroke="#172e42" stroke-width="1.5"/>${ticks}<text x="360" y="248" text-anchor="end" font-size="14">V (L)</text></svg><p class="area-value">Somme des aires : <strong>${number(area)} bar·L</strong></p>`;
    return {area, exact, width};
  }
  function draw() {
    const n = Number(slider.value);
    byId('rectangle-number').value = String(n);
    byId('rectangle-caption').textContent = String(n);
    const coarse = chart(4, 'coarse'), fine = chart(n, 'fine');
    const variable = mode === 'variable';
    byId('integral-law').textContent = variable
      ? 'Courbe illustrative : pext(V) = 2/V, avec pext en bar et V en L.'
      : 'Courbe illustrative : pext = 1 bar, constante entre 1 et 3 L.';
    byId('integral-observation').textContent = variable
      ? `Chaque rectangle prend la pression au milieu de sa base. Avec ${n} rectangles, la largeur d’un rectangle est ${number(fine.width, 4)} L. ${n === 4 ? 'Les deux graphiques sont identiques : augmentez le nombre sur le second graphique pour comparer.' : 'La courbe ne change pas. Sur le second graphique, les rectangles plus étroits épousent mieux sa forme.'} L’écart entre la somme et l’aire exacte passe de ${number(Math.abs(coarse.area - coarse.exact), 5)} à ${number(Math.abs(fine.area - fine.exact), 5)} bar·L.`
      : 'Tous les rectangles ont une hauteur de 1 bar. Leur somme vaut exactement 1 × (3 − 1) = 2 bar·L, quel que soit leur nombre. À pression constante, un seul rectangle couvrant tout l’intervalle suffirait : aucun découpage plus fin n’est nécessaire.';
    byId('integral-calculation').innerHTML = variable
      ? `<p>Pour intégrer 2/V, on utilise la primitive du type 2 ln(V). Entre les bornes, la différence des logarithmes donne le logarithme du rapport des volumes :</p><div class="formula">∫₁³ (2/V) dV = 2 ln(3/1)<br>≈ ${number(fine.exact, 5)} bar·L</div><p>Cette valeur est calculée par une primitive, indépendamment du nombre de rectangles. Ici, l’intégrale est positive ; le travail reçu est son opposé. Comme 1 bar·L = 100 J :</p><div class="formula">W = −100 × 2 ln(3/1)<br>≈ −219,72 J</div>`
      : '<p>Une primitive de la constante 1 est V. La différence entre les bornes donne :</p><div class="formula">∫₁³ 1 dV = 3 − 1 = 2 bar·L<br>W = −100 × 2 = −200 J</div><p>On retrouve W = −pext(Vf − Vi) : l’aire d’un seul rectangle suffit.</p>';
  }
  document.querySelectorAll('[data-integral-mode]').forEach(button => button.addEventListener('click', () => {
    mode = button.dataset.integralMode;
    document.querySelectorAll('[data-integral-mode]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    draw();
  }));
  slider.addEventListener('input', draw);
  draw();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initExisting,{once:true});else initExisting();
})();

'use strict';
(() => {
  const $ = id => document.getElementById(id);
  const num = (n, d = 2) => n.toLocaleString('fr-FR', {maximumFractionDigits:d});
  const select = (selector, value, key) => document.querySelectorAll(selector).forEach(b => b.setAttribute('aria-pressed',String(b.dataset[key]===value)));
  const markReady = id => {if($(id)) $(id).dataset.interactiveReady='true';};
  function piston() {
    if (!$('piston-interactif')) return;
    const slider=$('piston-volume'), moving=$('piston-moving');let frame=0;
    function draw(value) {
      const v=Number(value),dv=v-2,w=-100*dv,y=290-v*60;
      slider.value=String(v);$('piston-volume-value').textContent=num(v)+' L';
      moving.setAttribute('transform',`translate(0 ${y-170})`);
      $('piston-gas').setAttribute('y',String(y+7));$('piston-gas').setAttribute('height',String(280-y));
      $('piston-motion').setAttribute('d',dv>0?'M105 160V95m-9 14 9-14 9 14':dv<0?'M105 95V160m-9-14 9 14 9-14':'');
      $('piston-motion').setAttribute('stroke',dv>0?'#a64e28':'#226956');
      $('piston-sign').textContent=dv>0?'W < 0':dv<0?'W > 0':'W = 0';
      $('piston-sign').setAttribute('fill',dv>0?'#a64e28':'#226956');
      $('piston-balance').textContent=`ΔV = ${dv>0?'+':''}${num(dv)} L ; W = ${w>0?'+':''}${num(w)} J`;
      const text=dv>0?'Détente : le piston monte, le gaz se dilate. ΔV > 0 et W < 0 : le gaz cède du travail au milieu extérieur.':dv<0?'Compression : le piston descend. ΔV < 0 et W > 0 : le gaz reçoit du travail du milieu extérieur.':'État de départ : aucun changement de volume, donc W = 0.';
      $('piston-result').textContent=text;$('piston-desc').textContent=text+` Volume final ${num(v)} litres, pour un départ à deux litres.`;
    }
    function go(target) {
      cancelAnimationFrame(frame);draw(2);$('piston-interactif').dataset.animating='true';
      if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){draw(target);$('piston-interactif').dataset.animating='false';return;}
      const start=performance.now();function tick(now){const t=Math.min(1,(now-start)/850);draw(2+(target-2)*(t*t*(3-2*t)));if(t<1)frame=requestAnimationFrame(tick);else{draw(target);$('piston-interactif').dataset.animating='false';}}frame=requestAnimationFrame(tick);
    }
    document.querySelectorAll('[data-piston]').forEach(b=>b.addEventListener('click',()=>go({compression:1,detente:3,reset:2}[b.dataset.piston])));
    slider.addEventListener('input',()=>{cancelAnimationFrame(frame);$('piston-interactif').dataset.animating='false';draw(slider.value);});draw(2);markReady('piston-interactif');
  }
  function notation() {
    if(!$('notation-enthalpie'))return;
    const labels={delta:'<strong>Δ : variation.</strong> ΔH = H<sub>final</sub> − H<sub>initial</sub>.',type:'<strong>Indice : type de transformation.</strong> r = réaction ; f = formation ; comb = combustion ; fus = fusion ; vap = vaporisation.',h:'<strong>H : enthalpie.</strong> C’est la fonction d’état considérée ; elle est définie par H = U + pV.',standard:'<strong>° : états standard.</strong> Les constituants sont dans leurs états standard. Ce symbole, parfois écrit 0, ne signifie ni « zéro énergie » ni « 25 °C ».',temperature:'<strong>T : température.</strong> Elle est exprimée en kelvins. Par exemple, 298 K est proche de 25 °C.'};
    document.querySelectorAll('[data-notation]').forEach(b=>b.addEventListener('click',()=>{select('[data-notation]',b.dataset.notation,'notation');$('notation-result').innerHTML=labels[b.dataset.notation];}));markReady('notation-enthalpie');
  }
  function standard() {
    if(!$('standard-temperature'))return;
    const elements={Cu:{name:'cuivre',fusion:1084.62,boil:2562},Pb:{name:'plomb',fusion:327.46,boil:1748},Hg:{name:'mercure',fusion:-38.83,boil:356.73}};
    const range=$('standard-temperature-range'),input=$('standard-temperature-number');
    function draw(raw) {
      if(raw===''||!Number.isFinite(Number(raw)))return;
      const t=Math.max(-100,Math.min(2800,Number(raw))),symbol=$('standard-element').value,e=elements[symbol];range.value=String(t);input.value=String(t);
      const fusion=Math.abs(t-e.fusion)<0.005,boil=Math.abs(t-e.boil)<0.005;
      const state=fusion?'sl':boil?'lg':t<e.fusion?'s':t<e.boil?'l':'g';
      const names={s:'solide',l:'liquide',g:'gazeux',sl:'solide et liquide',lg:'liquide et gaz'};
      const label=state==='sl'?`${symbol}(s) + ${symbol}(l)`:state==='lg'?`${symbol}(l) + ${symbol}(g)`:`${symbol}(${state})`;
      $('standard-species').textContent=label;$('standard-species').setAttribute('font-size',state.length>1?'24':'30');$('standard-kelvin').textContent=`${num(t+273.15)} K · p° = 1 bar`;
      $('standard-thresholds').textContent=`Repères du cours : fusion ${num(e.fusion)} °C ; ébullition ${num(e.boil)} °C.`;
      const text=(state.length>1?`À ${num(t)} °C, coexistence des phases ${names[state]}. `:`À ${num(t)} °C, l’état de référence du ${e.name} est ${names[state]} : ${label}. `)+'La température change ; la pression standard reste 1 bar.';
      $('standard-result').textContent=text;$('standard-desc').textContent=text;
      const solid=[[55,60],[95,60],[135,60],[55,100],[95,100],[135,100],[55,140],[95,140],[135,140]],liquid=[[51,111],[84,130],[116,112],[152,133],[51,145],[150,98],[85,98],[119,147],[118,80]],gas=[[45,43],[160,47],[99,83],[49,145],[154,142],[55,91],[135,102],[112,30],[90,151]];
      const pts=state==='s'?solid:state==='l'?liquid:state==='g'?gas:solid.map((a,i)=>i<4?a:(state==='sl'?liquid:gas)[i]);
      $('standard-particles').innerHTML=pts.map(([x,y])=>`<circle cx="${x}" cy="${y}" r="9" fill="#bd7650" stroke="#172e42"/>`).join('');
    }
    range.addEventListener('input',()=>draw(range.value));input.addEventListener('input',()=>draw(input.value));input.addEventListener('change',()=>{if(input.value==='')draw(range.value);});
    $('standard-element').addEventListener('change',()=>draw(input.value));document.querySelectorAll('[data-standard-point]').forEach(b=>b.addEventListener('click',()=>{const e=elements[$('standard-element').value];draw({ambient:25,fusion:e.fusion,ebullition:e.boil}[b.dataset.standardPoint]);}));draw(25);markReady('standard-temperature');
  }
  function formation() {
    if(!$('formation-interactive'))return;
    const data={CH4:{reactants:['C(graphite)','2 H₂(g)'],product:'CH₄(g)',note:'Un carbone et quatre hydrogènes de chaque côté. Le carbone est pris sous forme graphite, pas sous forme d’atome gazeux.'},H2O:{reactants:['H₂(g)','½ O₂(g)'],product:'H₂O(l)',note:'Deux hydrogènes et un oxygène de chaque côté. Le coefficient ½ devant O₂ permet de former exactement une mole d’eau.'},CO2:{reactants:['C(graphite)','O₂(g)'],product:'CO₂(g)',note:'Un carbone et deux oxygènes de chaque côté. Les corps simples de référence sont le graphite et le dioxygène.'},NH3:{reactants:['½ N₂(g)','3/2 H₂(g)'],product:'NH₃(g)',note:'Un azote et trois hydrogènes de chaque côté. N₂ et H₂ sont des corps simples ; NH₃ est un corps composé.'}};
    function draw(){const d=data[$('formation-choice').value];$('formation-reactants').innerHTML=d.reactants.map(x=>`<span class="species-card">${x}</span>`).join('<span>+</span>');$('formation-product').innerHTML=`<span class="species-card">1 ${d.product}</span>`;$('formation-equation').textContent=d.reactants.join(' + ')+' → '+d.product;$('formation-note').textContent=d.note;}
    $('formation-choice').addEventListener('change',draw);draw();markReady('formation-interactive');
  }
  function combustion() {
    if(!$('combustion-interactive'))return;let water='g';
    function draw(){const propane=$('combustion-choice').value==='C3H8';$('combustion-equation').textContent=propane?`C₃H₈(g) + 5 O₂(g) → 3 CO₂(g) + 4 H₂O(${water})`:`CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(${water})`;$('combustion-note').textContent=water==='g'?'L’eau est gazeuse : convention retenue ici quand l’énoncé ne précise pas sa phase.':'L’eau est liquide : ce choix doit être précisé. C’est le cas de l’exercice du méthane et du cycle du propane du diaporama.';select('[data-combustion-water]',water,'combustionWater');}
    $('combustion-choice').addEventListener('change',draw);document.querySelectorAll('[data-combustion-water]').forEach(b=>b.addEventListener('click',()=>{water=b.dataset.combustionWater;draw();}));draw();markReady('combustion-interactive');
  }
  function bond() {
    if(!$('liaison-interactive'))return;let state='formed';const data={HCl:{left:'H',right:'Cl',mol:'HCl',energy:432},H2:{left:'H',right:'H',mol:'H₂',energy:436},Cl2:{left:'Cl',right:'Cl',mol:'Cl₂',energy:243}};
    function draw(){const d=data[$('liaison-choice').value],broken=state==='broken';$('bond-left-label').textContent=d.left;$('bond-right-label').textContent=d.right;$('bond-left').setAttribute('transform',broken?'translate(-85 0)':'translate(0 0)');$('bond-right').setAttribute('transform',broken?'translate(85 0)':'translate(0 0)');$('bond-line').style.opacity=broken?'0':'1';const atoms=d.left===d.right?`2 ${d.left}(g)`:`${d.left}(g) + ${d.right}(g)`;$('bond-equation').textContent=broken?`${d.mol}(g) → ${atoms}`:`${atoms} → ${d.mol}(g)`;$('bond-result').textContent=broken?`Dissociation : il faut fournir ${d.energy} kJ pour rompre une mole de ces liaisons. ΔdissH° = +${d.energy} kJ·mol⁻¹.`:`Formation de la liaison : l’opération inverse libère ${d.energy} kJ par mole de liaisons. Son enthalpie vaut −${d.energy} kJ·mol⁻¹. Ce n’est pas nécessairement une réaction de formation à partir des corps simples de référence.`;$('bond-desc').textContent=broken?'Deux atomes séparés, en phase gazeuse.':'Deux atomes reliés par une liaison, en phase gazeuse.';select('[data-bond-state]',state,'bondState');}
    $('liaison-choice').addEventListener('change',draw);document.querySelectorAll('[data-bond-state]').forEach(b=>b.addEventListener('click',()=>{state=b.dataset.bondState;draw();}));draw();markReady('liaison-interactive');
  }
  function phases() {
    if(!$('phase-interactive'))return;
    const data={fusion:['Solide','Liquide','H₂O(s) → H₂O(l)','ΔfusH > 0 : le système reçoit de la chaleur.'],solidification:['Liquide','Solide','H₂O(l) → H₂O(s)','ΔsolidH = −ΔfusH < 0 : le système cède de la chaleur.'],vaporisation:['Liquide','Gaz','H₂O(l) → H₂O(g)','ΔvapH > 0 : le système reçoit de la chaleur.'],condensation:['Gaz','Liquide','H₂O(g) → H₂O(l)','ΔcondH = −ΔvapH < 0 : le système cède de la chaleur.'],sublimation:['Solide','Gaz','H₂O(s) → H₂O(g)','ΔsubH > 0 : le système reçoit de la chaleur.'],depot:['Gaz','Solide','H₂O(g) → H₂O(s)','L’enthalpie est l’opposée de celle de sublimation : le système cède de la chaleur.']};
    function draw(){const d=data[$('phase-choice').value];$('phase-start').textContent=d[0];$('phase-end').textContent=d[1];$('phase-equation').textContent=d[2];$('phase-result').textContent=d[3];}
    $('phase-choice').addEventListener('change',draw);draw();markReady('phase-interactive');
  }
  function solution() {
    if(!$('dissolution-interactive'))return;
    function ion(x,y,positive,r=23){return `<circle cx="${x}" cy="${y}" r="${r}" fill="${positive?'#d5e7ef':'#d9e8cf'}" stroke="#172e42" stroke-width="2"/><text x="${x}" y="${y+6}" text-anchor="middle" font-size="18">${positive?'Na⁺':'Cl⁻'}</text>`;}
    function water(cx,cy,angle,positive){const r=66,ux=Math.cos(angle),uy=Math.sin(angle),ox=cx+r*ux,oy=cy+r*uy,sign=positive?1:-1;const hx1=ox+sign*15*ux-10*uy,hy1=oy+sign*15*uy+10*ux,hx2=ox+sign*15*ux+10*uy,hy2=oy+sign*15*uy-10*ux;return `<path d="M${hx1} ${hy1}L${ox} ${oy}L${hx2} ${hy2}" stroke="#172e42" stroke-width="2" fill="none"/><circle cx="${ox}" cy="${oy}" r="10" fill="#b14d42"/><circle cx="${hx1}" cy="${hy1}" r="6" fill="white" stroke="#172e42"/><circle cx="${hx2}" cy="${hy2}" r="6" fill="white" stroke="#172e42"/>`;}
    function draw(step){select('[data-solution-step]',step,'solutionStep');let svg='',text='';
      if(step==='solid'){for(let i=0;i<2;i++)for(let j=0;j<4;j++)svg+=ion(195+j*70,115+i*70,(i+j)%2===0);text='Solide ionique : les ions Na⁺ et Cl⁻ sont organisés dans un réseau. Le cristal est globalement neutre.';svg+='<text x="300" y="250" text-anchor="middle">Réseau ionique</text>';}
      if(step==='separate'){const points=[[70,75],[240,100],[410,55],[530,140],[115,210],[290,235],[405,175],[520,260]];points.forEach(([x,y],i)=>svg+=ion(x,y,i%2===0));text='Dissociation du réseau : séparer les ions nécessite un apport d’énergie. Les ions conservent leur charge ; cette étape isolée est un chemin fictif pour raisonner.';}
      if(step==='solvate'){for(const [x,y,pos]of [[170,145,true],[430,145,false]]){for(let i=0;i<4;i++)svg+=water(x,y,i*Math.PI/2,pos);svg+=ion(x,y,pos,27);}svg+='<text x="170" y="264" text-anchor="middle" font-size="17">O orienté vers Na⁺</text><text x="430" y="264" text-anchor="middle" font-size="17">H orientés vers Cl⁻</text><text x="300" y="300" text-anchor="middle" font-size="15">Eau : oxygène rouge (δ−), hydrogènes blancs (δ+)</text>';text='Solvatation par l’eau = hydratation : l’eau entoure les ions et les stabilise. Cette contribution libère de l’énergie. Le côté oxygène de l’eau se tourne vers Na⁺ ; les hydrogènes se tournent vers Cl⁻.';}
      $('solution-drawing').innerHTML=svg;$('solution-result').textContent=text;$('solution-desc').textContent=text;
    }
    document.querySelectorAll('[data-solution-step]').forEach(b=>b.addEventListener('click',()=>draw(b.dataset.solutionStep)));draw('solid');markReady('dissolution-interactive');
  }
  function init(){for(const fn of [piston,notation,standard,formation,combustion,bond,phases,solution])fn();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
