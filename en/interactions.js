'use strict';
(() => {
function initExisting(){
  const byId = id => document.getElementById(id);
  const number = (x, digits = 3) => x.toLocaleString('en-GB', {maximumFractionDigits: digits});
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
  const num = (n, d = 2) => n.toLocaleString('en-GB', {maximumFractionDigits:d});
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
    const host=$('standard-temperature');if(!host)return;
    const elements={
      Cu:{name:'cuivre',fusion:1084.62,boil:2562,color:'#ad4b25',soft:'#fff0e7'},
      Pb:{name:'plomb',fusion:327.46,boil:1748,color:'#69509c',soft:'#f2edfa'},
      Hg:{name:'mercure',fusion:-38.83,boil:356.73,color:'#226d9b',soft:'#e9f4fb'}
    };
    const range=$('standard-temperature-range'),input=$('standard-temperature-number'),motion=$('standard-motion');
    let symbol='Cu',state='s',playing=false,visible=false,frame=0,elapsed=0,last=0;
    const bounce=(value,min,max)=>{const width=max-min,v=((value-min)%(2*width)+2*width)%(2*width);return min+(v>width?2*width-v:v);};
    const gasStart=[[42,42],[120,40],[214,40],[280,65],[65,112],[161,100],[243,125],[39,190],[128,174],[215,198],[282,212],[173,230]];
    function points(phase,time){
      if(phase==='s')return Array.from({length:12},(_,i)=>[112+(i%4)*32+1.5*Math.sin(time*5+i),155+Math.floor(i/4)*32+1.5*Math.cos(time*5+i*1.7)]);
      if(phase==='l')return Array.from({length:12},(_,i)=>{
        const outer=i<8,k=outer?i:i-8,angle=(outer?k*Math.PI/4:k*Math.PI/2)+(outer?time*.24:-time*.42)+.09*Math.sin(i*2);
        return [160+(outer?75:29)*Math.cos(angle),175+(outer?48:20)*Math.sin(angle)];
      });
      return gasStart.map(([x,y],i)=>[bounce(x+time*(18+(i%3)*6)*(i%2?1:-1),27,293),bounce(y+time*(14+(i%4)*4)*(i%3?1:-1),27,233)]);
    }
    function paint(time){
      for(const phase of ['s','l','g']){
        const pts=points(phase,time),e=elements[symbol],lines=[];
        if(phase!=='g')for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){
          const [x1,y1]=pts[i],[x2,y2]=pts[j],d=Math.hypot(x2-x1,y2-y1);
          if(d<(phase==='s'?37:57))lines.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`);
        }
        $('standard-links-'+phase).innerHTML=lines.join('');
        $('standard-atoms-'+phase).innerHTML=pts.map(([x,y])=>`<g transform="translate(${x.toFixed(2)} ${y.toFixed(2)})"><circle r="12" fill="${e.color}"/><text text-anchor="middle" dy="5" fill="#fff" font-size="14" font-weight="600">${symbol}</text></g>`).join('');
      }
    }
    function syncMotion(){
      cancelAnimationFrame(frame);last=0;
      motion.setAttribute('aria-pressed',String(playing));motion.textContent=playing?'Mettre en pause':'Animer les particules';host.dataset.motion=playing?'playing':'paused';
      $('standard-motion-note').textContent=playing?'Mouvements illustratifs, sans échelle de vitesse.':'Schémas à l’arrêt. La cohésion reste visible.';
      if(!playing||!visible||document.hidden)return;
      function tick(now){
        if(last&&now-last<40){frame=requestAnimationFrame(tick);return;}
        if(last)elapsed+=Math.min((now-last)/1000,.1);last=now;paint(elapsed);frame=requestAnimationFrame(tick);
      }
      frame=requestAnimationFrame(tick);
    }
    function draw(raw){
      if(raw===''||!Number.isFinite(Number(raw)))return;
      const t=Math.max(-100,Math.min(2800,Number(raw)));symbol=$('standard-element').value;const e=elements[symbol];range.value=String(t);input.value=String(t);
      const fusion=Math.abs(t-e.fusion)<.005,boil=Math.abs(t-e.boil)<.005;
      state=fusion?'sl':boil?'lg':t<e.fusion?'s':t<e.boil?'l':'g';
      const names={s:'solide',l:'liquide',g:'gazeux',sl:'solide et liquide',lg:'liquide et gaz'};
      const label=state==='sl'?`${symbol}(s) + ${symbol}(l)`:state==='lg'?`${symbol}(l) + ${symbol}(g)`:`${symbol}(${state})`;
      host.style.setProperty('--element-color',e.color);host.style.setProperty('--element-soft',e.soft);host.dataset.element=symbol;host.dataset.state=state;
      $('standard-species').textContent=label;$('standard-kelvin').textContent=`${num(t+273.15)} K · p° = 1 bar`;
      $('standard-thresholds').textContent=`Repères : fusion ${num(e.fusion)} °C ; ébullition ${num(e.boil)} °C.`;
      $('standard-result').textContent=(state.length>1?`Au seuil de ${num(t)} °C : coexistence ${names[state]}. Les deux phases sont mises en évidence.`:`À ${num(t)} °C, l’état de référence du ${e.name} est ${names[state]} : ${label}.`)+' La pression standard reste 1 bar.';
      for(const phase of ['s','l','g']){
        const active=state.includes(phase),card=host.querySelector(`[data-state-card="${phase}"]`);card.dataset.active=String(active);
        $('state-badge-'+phase).textContent=active?(state.length>1?'✓ Phase en coexistence':'✓ État à cette température'):'Repère à une autre température';
        $('state-svg-title-'+phase).textContent=`${e.name} : organisation ${names[phase]}`;
      }
      paint(elapsed);
    }
    range.addEventListener('input',()=>draw(range.value));input.addEventListener('input',()=>draw(input.value));input.addEventListener('change',()=>{if(input.value==='')draw(range.value);});
    $('standard-element').addEventListener('change',()=>draw(input.value));
    host.querySelectorAll('[data-standard-point]').forEach(b=>b.addEventListener('click',()=>{const e=elements[$('standard-element').value];draw({ambient:25,fusion:e.fusion,ebullition:e.boil}[b.dataset.standardPoint]);}));
    motion.addEventListener('click',()=>{playing=!playing;syncMotion();});
    document.addEventListener('visibilitychange',syncMotion);
    if('IntersectionObserver' in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;syncMotion();}).observe(host);else visible=true;
    // No automatic animation, including when reduced motion is requested.
    const preference=window.matchMedia('(prefers-reduced-motion: reduce)');preference.addEventListener?.('change',()=>{if(preference.matches){playing=false;syncMotion();}});
    draw(25);syncMotion();markReady('standard-temperature');
  }
  function formation() {
    if(!$('formation-interactive'))return;
    const data={CH4:{reactants:['C(graphite)','2 H₂(g)'],product:'CH₄(g)',note:'Un carbone et quatre hydrogènes de chaque côté. Le carbone est pris sous forme graphite, pas sous forme d’atome gazeux.'},H2O:{reactants:['H₂(g)','½ O₂(g)'],product:'H₂O(l)',note:'Deux hydrogènes et un oxygène de chaque côté. Le coefficient ½ devant O₂ permet de former exactement une mole d’eau.'},CO2:{reactants:['C(graphite)','O₂(g)'],product:'CO₂(g)',note:'Un carbone et deux oxygènes de chaque côté. Les corps simples de référence sont le graphite et le dioxygène.'},NH3:{reactants:['½ N₂(g)','3/2 H₂(g)'],product:'NH₃(g)',note:'Un azote et trois hydrogènes de chaque côté. N₂ et H₂ sont des corps simples ; NH₃ est un corps composé.'}};
    function draw(){const d=data[$('formation-choice').value];$('formation-reactants').innerHTML=d.reactants.map(x=>`<span class="species-card">${x}</span>`).join('<span>+</span>');$('formation-product').innerHTML=`<span class="species-card">1 ${d.product}</span>`;$('formation-equation').textContent=d.reactants.join(' + ')+' → '+d.product;$('formation-note').textContent=d.note;}
    $('formation-choice').addEventListener('change',draw);draw();markReady('formation-interactive');
  }
  function combustion() {
    if(!$('combustion-interactive'))return;let water='l';
    function draw(){const propane=$('combustion-choice').value==='C3H8';$('combustion-equation').textContent=propane?`C₃H₈(g) + 5 O₂(g) → 3 CO₂(g) + 4 H₂O(${water})`:`CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(${water})`;$('combustion-note').textContent=water==='l'?'L’eau est liquide : convention retenue ici, sauf indication contraire. Les exercices du méthane et du propane utilisent H₂O(l).':'L’eau est gazeuse : ce choix doit être indiqué dans l’énoncé et les données doivent correspondre à H₂O(g).';select('[data-combustion-water]',water,'combustionWater');}
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

// Build the reasoning within the existing exercises, using their original data.
(() => {
  const parse=s=>{s=String(s).trim().replace(/[\s\u00a0\u202f]/g,'').replace(/−/g,'-').replace(',','.');return /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(s)?Number(s):NaN;};
  const fmt=n=>n.toLocaleString('en-GB',{maximumFractionDigits:4});
  function hess(){
    const host=document.getElementById('hess-builder');if(!host)return;
    const form=host.closest('.course-hess-builder'),inputs=[1,2,3].map(i=>document.getElementById('propane-reponse-'+i));
    const labels=['C₃H₈(g)','O₂(g)','CO₂(g)','H₂O(l)','C(graphite)','H₂(g)'];
    const reactions=[[-1,-5,3,4,0,0],[0,-1,1,0,-1,0],[0,-.5,0,1,0,-1]],energy=[-2220,-394,-286],target=[1,0,0,0,-3,-4];
    const term=(n,i)=>(Math.abs(n-1)<1e-8?'':fmt(n)+' ')+labels[i];
    const side=(r,sign)=>r.map((v,i)=>v*sign>1e-8?term(Math.abs(v),i):'').filter(Boolean).join(' + ')||'∅';
    function draw(){
      const k=inputs.map(x=>parse(x.value)),all=k.every(Number.isFinite);
      document.getElementById('hess-transformed').innerHTML=k.map((v,i)=>`<p><strong>Équation ${i+1} :</strong> ${Number.isFinite(v)?(v===0?'multiplicateur nul : aucune contribution.':side(reactions[i].map(x=>x*v),-1)+' → '+side(reactions[i].map(x=>x*v),1)):'choisissez son multiplicateur.'}</p>`).join('');
      const cancellation=document.getElementById('hess-cancellations'),status=document.getElementById('hess-status'),expression=document.getElementById('hess-energy-expression');
      cancellation.replaceChildren();expression.replaceChildren();host.dataset.complete='false';
      form.querySelectorAll('[data-hess-direction]').forEach(b=>{const value=parse(document.getElementById(b.dataset.hessInput).value);b.setAttribute('aria-pressed',String(Number.isFinite(value)&&value!==0&&Math.sign(value)===Number(b.dataset.hessDirection)));});
      if(!all){status.textContent='Renseignez les trois multiplicateurs pour visualiser leur somme.';return;}
      const left=labels.map(()=>0),right=labels.map(()=>0);
      reactions.forEach((r,i)=>r.forEach((n,j)=>{const v=n*k[i];if(v<0)left[j]-=v;else right[j]+=v;}));
      const sum=right.map((v,i)=>v-left[i]);
      const remaining=(total,cancel,i)=>`${cancel>1e-8?'<del>'+term(cancel,i)+'</del>':''}${total-cancel>1e-8?(cancel>1e-8?' + ':'')+term(total-cancel,i):''}`||'—';
      cancellation.innerHTML='<p>Les quantités identiques présentes des deux côtés sont barrées. Les états physiques doivent être identiques.</p><div class="table-wrap"><table><thead><tr><th>Espèce</th><th>Réactifs additionnés</th><th>Produits additionnés</th></tr></thead><tbody>'+labels.map((label,i)=>{const c=Math.min(left[i],right[i]);return left[i]+right[i]>1e-8?`<tr><th>${label}</th><td>${remaining(left[i],c,i)}</td><td>${remaining(right[i],c,i)}</td></tr>`:'';}).join('')+'</tbody></table></div><div class="formula">'+side(sum,-1)+' → '+side(sum,1)+'</div>';
      const correct=sum.every((v,i)=>Math.abs(v-target[i])<1e-8);host.dataset.complete=String(correct);
      status.textContent=correct?'La somme donne la réaction de formation recherchée. Appliquez maintenant ces mêmes multiplicateurs aux enthalpies.':'La somme ne donne pas encore la réaction recherchée. Vérifiez le sens de la combustion du propane et les coefficients de C et H₂.';
      expression.innerHTML='<p>Expression à calculer, en kJ·mol⁻¹ :</p><div class="formula">'+k.map((v,i)=>'('+fmt(v)+') × ('+fmt(energy[i])+')').join(' + ')+'</div><p>La somme des enthalpies suit les mêmes coefficients que la somme des équations.</p>';
    }
    inputs.forEach(x=>x.addEventListener('input',draw));
    form.querySelectorAll('[data-hess-direction]').forEach(b=>b.addEventListener('click',()=>{const input=document.getElementById(b.dataset.hessInput),value=parse(input.value);input.value=String((Number.isFinite(value)&&value!==0?Math.abs(value):1)*Number(b.dataset.hessDirection));input.dispatchEvent(new Event('input',{bubbles:true}));}));
    draw();
  }
  function balances(){
    document.querySelectorAll('[data-balance-builder]').forEach(host=>{
      const form=host.closest('form'),rows=[...host.querySelectorAll('[data-balance-term]')],tf=Number(host.dataset.finalTemperature);
      function draw(check=false){
        let valid=true,answered=0;const expressions=[];
        for(const row of rows){
          const temp=row.querySelector('[data-initial-expected]'),sign=row.querySelector('[data-sign-expected]'),ti=temp?parse(temp.value):NaN;
          const expression=temp?row.dataset.capacity+'('+fmt(tf)+' − '+(Number.isFinite(ti)?fmt(ti):'Tinitiale')+')':row.dataset.capacity;
          row.querySelector('.balance-expression').textContent=expression;expressions.push(expression);
          const feedback=row.querySelector('.balance-feedback');feedback.textContent='';feedback.className='balance-feedback';
          const tempOk=!temp||temp.value===temp.dataset.initialExpected,signOk=sign.value===sign.dataset.signExpected;
          if(temp?.value)answered++;if(sign.value)answered++;
          if(!tempOk||!signOk)valid=false;
          if(check){
            const missing=(temp&&!temp.value)||!sign.value;
            feedback.classList.add(tempOk&&signOk?'good':'bad');
            feedback.textContent=missing?'Complétez les choix de cette contribution.':!tempOk?'Reprenez la température initiale de ce constituant dans l’énoncé.':!signOk?(temp?'Le signe suit Tf − Tinitiale : un constituant qui se réchauffe reçoit de la chaleur ; celui qui refroidit en cède.':'La réaction fournit la chaleur reçue par le calorimètre, la solution et le zinc : sa contribution est négative.'):(temp?'Température et signe cohérents.':'Signe cohérent avec le bilan.');
          }
        }
        host.querySelector('.balance-equation').textContent=expressions.join(' + ')+' = 0';
        host.querySelector('.balance-status').textContent=check?(valid?'Votre bilan est cohérent. Passez au calcul demandé dans l’exercice.':'Votre bilan reste à compléter ou à reprendre ; les indications figurent sous chaque contribution.'):'Associez chaque terme à sa température initiale et à son signe, puis vérifiez votre bilan.';
        host.dataset.valid=String(valid);form.dataset.preparationValid=String(check&&valid);return valid;
      }
      host.querySelectorAll('[data-preparation]').forEach(x=>x.addEventListener('input',()=>draw(false)));
      host.querySelector('[data-check-balance]').addEventListener('click',()=>{form.dataset.preparationChecked='true';draw(true);form.dispatchEvent(new Event('preparation-check'));});
      form.addEventListener('exercise-reset',()=>draw(false));draw(form.dataset.preparationChecked==='true');
    });
  }
  function init(){hess();balances();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();

// Chauffage de l'exercice et découverte du calorimètre.
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const f = (n, digits = 3) => n.toLocaleString('en-GB', {minimumFractionDigits: digits, maximumFractionDigits: digits});
  const heating = $('chauffage-interactif');
  if (heating) {
    const limit = 18072, total = 140172, range = $('heating-energy');
    let frame = 0, last = 0, pausedAtPlateau = false;
    function stop() {
      cancelAnimationFrame(frame); frame = 0; last = 0;
      $('heating-play').textContent = 'Animer';
      $('heating-play').setAttribute('aria-pressed', 'false');
    }
    function render() {
      const q = Number(range.value), heat = Math.min(q, limit), vap = Math.max(0, q-limit);
      const t = 20 + heat / (3 * 75.3), nv = vap / 40700, nl = 3 - nv;
      const x = 65 + q / total * 540, y = 220 - (t - 20) / 80 * 130;
      $('heating-point').setAttribute('cx', x); $('heating-point').setAttribute('cy', y);
      $('heating-trace').setAttribute('d', q <= limit ? `M65 220L${x} ${y}` : `M65 220L${65+limit/total*540} 90H${x}`);
      $('heating-q').textContent = f(q/1000) + ' kJ';
      $('heating-t').textContent = f(t,2) + ' °C';
      $('heating-state').textContent = q < limit ? 'Liquide' : q === limit ? 'Début de vaporisation' : q < total ? 'Liquide + vapeur' : 'Vapeur';
      range.setAttribute('aria-valuetext', `${f(q/1000)} kilojoules, ${f(t,2)} degrés Celsius, ${f(nv)} mole de vapeur`);
      $('heating-liquid').textContent = f(nl) + ' mol'; $('heating-vapour').textContent = f(nv) + ' mol';
      $('heating-liquid-bar').style.width = (nl/3*100)+'%'; $('heating-vapour-bar').style.width = (nv/3*100)+'%';
      $('heating-calculation').innerHTML = `<p><strong>1. Chauffage du liquide</strong><br>Q<sub>chauffage</sub> = n C<sub>p,m</sub> (T − Tᵢ)<br>= 3 × 75,3 × (${f(t,2)} − 20) ≈ <strong>${f(heat,1)} J = ${f(heat/1000)} kJ</strong></p>` +
        `<p><strong>2. Vaporisation à 100 °C</strong><br>Q<sub>vap</sub> = n<sub>vaporisée</sub> Δ<sub>vap</sub>H°<br>= ${f(nv)} × 40,7 ≈ <strong>${f(vap/1000)} kJ</strong>${q < limit ? '<br>Cette étape n’a pas encore commencé.' : ''}</p>` +
        `<p><strong>Q<sub>total</sub> = ${f(heat/1000)} + ${f(vap/1000)} = ${f(q/1000)} kJ</strong></p><p class="muted">Les valeurs affichées sont arrondies ; les calculs utilisent les valeurs non arrondies. Une variation de 1 °C correspond à une variation de 1 K.</p>`;
      $('heating-explanation').textContent = q < limit ? 'Avant le palier, la chaleur reçue augmente la température du liquide.' : q < total ? 'Pendant le palier, la température reste à 100 °C. La chaleur reçue vaporise progressivement l’eau : ΔT = 0 ne signifie pas Q = 0.' : 'Toute l’eau est vaporisée : 18,072 kJ pour chauffer le liquide, puis 122,100 kJ pour le vaporiser, soit 140,172 kJ (environ 140,2 kJ).';
      if (q !== limit) $('heating-prediction').hidden = true;
    }
    function tick(time) {
      if (document.hidden || heating.closest('[hidden]')) { stop(); return; }
      const dt = last ? Math.min(100, time-last) : 0; last = time;
      let next = Math.min(total, Number(range.value) + dt * total / 25000);
      if (!pausedAtPlateau && Number(range.value) < limit && next >= limit) {
        range.value = limit; pausedAtPlateau = true; stop(); render();
        $('heating-prediction').hidden = false; return;
      }
      range.value = Math.round(next); render();
      if (next >= total) { stop(); return; }
      frame = requestAnimationFrame(tick);
    }
    $('heating-play').addEventListener('click', () => {
      if (frame) { stop(); return; }
      if (Number(range.value) >= total) { range.value = 0; pausedAtPlateau = false; }
      $('heating-play').textContent = 'Pause'; $('heating-play').setAttribute('aria-pressed', 'true');
      frame = requestAnimationFrame(tick);
    });
    range.addEventListener('input', () => { stop(); pausedAtPlateau = Number(range.value) >= limit; render(); });
    $('heating-reset').addEventListener('click', () => {
      stop(); range.value = 0; pausedAtPlateau = false;
      $('heating-prediction-feedback').textContent = ''; render();
    });
    heating.querySelectorAll('[data-heating-step]').forEach(b => b.addEventListener('click', () => {
      stop(); range.value = b.dataset.heatingStep; pausedAtPlateau = true; render();
      if (Number(range.value) === limit) $('heating-prediction').hidden = false;
    }));
    heating.querySelectorAll('[data-heating-answer]').forEach(b => b.addEventListener('click', () => {
      $('heating-prediction-feedback').textContent = (b.dataset.heatingAnswer === 'plateau' ? 'Oui. ' : 'Pendant le palier, non. ') + 'À pression constante, la température du corps pur reste constante pendant sa vaporisation. La quantité de vapeur augmente. Cliquez sur « Animer » pour poursuivre.';
    }));
    new IntersectionObserver(entries => { if (!entries[0].isIntersecting) stop(); }).observe(heating);
    document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); });
    stop(); render();
  }
  const calo = $('calorimetre-explorer');
  if (calo) {
    const info = {
      wall: ['Double paroi argentée', 'L’argenture limite les échanges thermiques par rayonnement. Les deux parois délimitent l’espace dans lequel le vide est réalisé.'],
      vacuum: ['Vide entre les parois', 'Le vide limite les échanges thermiques par conduction entre les parois. L’isolation réelle n’est pas parfaite ; les pertes sont négligées dans ce modèle.'],
      thermometer: ['Thermomètre', 'Il mesure la température du contenu. On relève les températures initiale et finale pour déterminer la variation ΔT utilisée dans le bilan thermique.'],
      stirrer: ['Agitateur', 'Il homogénéise la température de la solution : on cherche une température uniforme dans le liquide. Le mouvement représenté est schématique.']
    };
    function select(part) {
      calo.querySelectorAll('[data-calo-part]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.caloPart === part)));
      calo.querySelectorAll('[data-calo-shape]').forEach(g => {
        g.classList.toggle('calo-selected', g.dataset.caloShape === part);
        g.setAttribute('aria-pressed', String(g.dataset.caloShape === part));
      });
      $('calo-part-info').innerHTML = `<h4>${info[part][0]}</h4><p>${info[part][1]}</p>`;
    }
    calo.querySelectorAll('[data-calo-part]').forEach(b => b.addEventListener('click', () => select(b.dataset.caloPart)));
    calo.querySelectorAll('[data-calo-shape]').forEach(g => {
      g.addEventListener('click', () => select(g.dataset.caloShape));
      g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(g.dataset.caloShape); } });
    });
    let waterFrame = null;
    const water = $('calo-water'), surface = $('calo-surface');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    function drawWater(time) {
      const points = [];
      for (let x = 163; x <= 347; x += 4) {
        const envelope = Math.sin(Math.PI * (x - 163) / 184);
        const y = 182 + 3.5 * envelope * Math.sin((x - 163) / 22 - time / 280);
        points.push(`${x},${y.toFixed(2)}`);
      }
      const top = 'M' + points.join(' L');
      surface.setAttribute('d', top);
      water.setAttribute('d', top + 'V278Q347 291 334 291H176Q163 291 163 278Z');
      waterFrame = requestAnimationFrame(drawWater);
    }
    function motion(on) {
      if (waterFrame !== null) cancelAnimationFrame(waterFrame);
      waterFrame = null;
      if (on && !reducedMotion.matches && water && surface) waterFrame = requestAnimationFrame(drawWater);
      else if (water && surface) {
        surface.setAttribute('d', 'M163 182H347');
        water.setAttribute('d', 'M163 182H347V278Q347 291 334 291H176Q163 291 163 278Z');
      }
      calo.classList.toggle('stirring', on);
      $('calo-stir').textContent = on ? 'Arrêter l’agitateur' : 'Animer l’agitateur';
      $('calo-stir').setAttribute('aria-pressed', String(on));
    }
    $('calo-stir').addEventListener('click', () => { select('stirrer'); motion(!calo.classList.contains('stirring')); });
    new IntersectionObserver(entries => { if (!entries[0].isIntersecting) motion(false); }).observe(calo);
    document.addEventListener('visibilitychange', () => { if (document.hidden) motion(false); });
    select('wall'); motion(false);
  }
})();

// Courbe qualitative T(temps) : les cinq étapes et les deux paliers.
(() => {
  const host = document.getElementById('figure-changements-etat');
  if (!host || !document.getElementById('full-phase-progress')) return;
  const $ = id => document.getElementById(id);
  const points = [[100,350],[175,295],[295,295],[370,165],[545,165],[620,65]];
  const descriptions = [
    ['Chauffage du solide · S','Le corps est solide. La chaleur reçue augmente sa température jusqu’à la température de fusion.','Q = n C<sub>p,m</sub>(solide) ΔT'],
    ['Fusion · S + L','Le solide et le liquide coexistent. La température reste constante à T<sub>fus</sub> tandis que le solide se transforme progressivement en liquide. Le système continue à recevoir de la chaleur.','Q<sub>fusion</sub> = n<sub>fondue</sub> Δ<sub>fus</sub>H'],
    ['Chauffage du liquide · L','Tout le solide a fondu. La chaleur reçue augmente maintenant la température du liquide, jusqu’à la température de vaporisation.','Q = n C<sub>p,m</sub>(liquide) ΔT'],
    ['Vaporisation · L + V','Le liquide et la vapeur coexistent. La température reste constante à T<sub>vap</sub> tandis que le liquide se transforme progressivement en vapeur. Le système continue à recevoir de la chaleur.','Q<sub>vap</sub> = n<sub>vaporisée</sub> Δ<sub>vap</sub>H'],
    ['Chauffage de la vapeur · V','Tout le liquide est vaporisé. La chaleur reçue augmente à nouveau la température, cette fois celle de la vapeur.','Q = n C<sub>p,m</sub>(vapeur) ΔT']
  ];
  let frame=0,last=0,stage=-1,progress=0;
  const slider=$('full-phase-progress');
  function stop(){cancelAnimationFrame(frame);frame=0;last=0;$('full-phase-play').textContent='Animer la courbe';$('full-phase-play').setAttribute('aria-pressed','false');}
  function render(){
    const x=100+Number(slider.value)/1000*520;
    let i=points.findIndex((p,j)=>j<5 && x<points[j+1][0]);if(i<0)i=4;
    const a=points[i],b=points[i+1],u=(x-a[0])/(b[0]-a[0]),y=a[1]+u*(b[1]-a[1]);
    $('full-phase-point').setAttribute('cx',x);$('full-phase-point').setAttribute('cy',y);
    $('full-phase-guide').setAttribute('d',`M${x} ${y}V380`);
    $('full-phase-trace').setAttribute('d','M'+points.slice(0,i+1).map(p=>p.join(' ')).join('L')+`L${x} ${y}`);
    slider.setAttribute('aria-valuetext',descriptions[i][0]);
    const energies=[1.1286,18,22.59,122.1,2.0148],temps=[263.15,273.15,273.15,373.15,373.15,393.15];
    const qStage=energies[i]*u,qTotal=energies.slice(0,i).reduce((a,b)=>a+b,0)+qStage;
    const temperature=temps[i]+u*(temps[i+1]-temps[i]);
    const fmt=(n,d=3)=>n.toLocaleString('en-GB',{minimumFractionDigits:d,maximumFractionDigits:d});
    $('full-numeric-t').textContent=fmt(temperature,2)+' K ('+fmt(temperature-273.15,2)+' °C)';
    $('full-numeric-q').textContent=fmt(qTotal)+' kJ';
    const expressions=[`3 × 37,62 × (${fmt(temperature,2)} − 263,15) / 1000`,`${fmt(3*u)} × 6,00`,`3 × 75,3 × (${fmt(temperature,2)} − 273,15) / 1000`,`${fmt(3*u)} × 40,7`,`3 × 33,58 × (${fmt(temperature,2)} − 373,15) / 1000`];
    const phases=i===1?`Solide : ${fmt(3*(1-u))} mol ; liquide : ${fmt(3*u)} mol.`:i===3?`Liquide : ${fmt(3*(1-u))} mol ; vapeur : ${fmt(3*u)} mol.`:`3 mol dans la phase ${['solide','','liquide','','vapeur'][i]}.`;
    $('full-numeric-calculation').innerHTML=`<p><strong>Étape en cours</strong><br>${expressions[i]} ≈ <strong>${fmt(qStage)} kJ</strong></p><p>${phases}</p><p>Chaleur reçue aux étapes précédentes : ${fmt(qTotal-qStage)} kJ.<br><strong>Total : ${fmt(qTotal)} kJ.</strong></p><p class="muted">Calculs sur les valeurs non arrondies. Le facteur 1/1000 convertit les joules en kilojoules. Pendant les paliers, on multiplie l’enthalpie molaire par la quantité déjà transformée.</p>`;

    if(i!==stage){
      stage=i;host.dataset.stage=String(i);
      $('full-phase-info').innerHTML=`<h4>${i+1}. ${descriptions[i][0]}</h4><p>${descriptions[i][1]}</p><p class="formula">${descriptions[i][2]}</p><p class="muted">${i===1||i===3?'La quantité dans la formule est celle effectivement transformée pendant le palier. ΔT = 0 ne signifie pas Q = 0.':'Cette expression suppose la capacité calorifique constante sur l’intervalle considéré.'}</p>`;
      host.querySelectorAll('[data-full-step]').forEach(el=>el.setAttribute('aria-pressed',String(Number(el.dataset.fullStep)===i)));
      host.querySelectorAll('[data-full-label]').forEach(el=>el.setAttribute('fill',Number(el.dataset.fullLabel)===i?'#b3391a':'#526973'));
    }
  }
  function tick(t){
    if(document.hidden||host.closest('[hidden]')){stop();return;}
    const dt=last?Math.min(t-last,100):0;last=t;
    progress=Math.min(1000,progress+dt/25);slider.value=progress;render();
    if(Number(slider.value)>=1000){stop();return;}frame=requestAnimationFrame(tick);
  }
  slider.addEventListener('input',()=>{stop();render();});
  $('full-phase-play').addEventListener('click',()=>{if(frame){stop();return;}if(Number(slider.value)>=1000){slider.value=0;render();}last=0;progress=Number(slider.value);$('full-phase-play').textContent='Pause';$('full-phase-play').setAttribute('aria-pressed','true');frame=requestAnimationFrame(tick);});
  $('full-phase-reset').addEventListener('click',()=>{stop();slider.value=0;render();});
  host.querySelectorAll('[data-full-step]').forEach(el=>el.addEventListener('click',()=>{stop();const i=Number(el.dataset.fullStep);slider.value=Math.round(((points[i][0]+points[i+1][0])/2-100)/520*1000);render();}));
  new IntersectionObserver(es=>{if(!es[0].isIntersecting)stop();}).observe(host);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});render();
})();
