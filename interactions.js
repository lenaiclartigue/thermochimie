'use strict';
(() => {
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
})();
