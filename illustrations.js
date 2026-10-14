'use strict';
(() => {
  const triggers = [...document.querySelectorAll('[data-image-full]')];
  if (!triggers.length) return;
  const dialog = document.createElement('dialog');
  dialog.className = 'illustration-dialog';
  dialog.id = 'illustration-dialog';
  dialog.setAttribute('aria-labelledby', 'illustration-title');
  dialog.innerHTML = '<div class="illustration-toolbar"><h2 id="illustration-title"></h2><div class="illustration-controls"><button type="button" id="illustration-zoom" class="button secondary small" aria-pressed="false">Zoomer ×2</button><button type="button" class="illustration-close" aria-label="Fermer l’image" autofocus>×</button></div></div><div class="illustration-scroll" tabindex="0" role="region" aria-label="Illustration agrandie ; faire défiler pour explorer le zoom"><img id="illustration-image" alt=""></div><p id="illustration-caption"></p>';
  document.body.append(dialog);
  const img = dialog.querySelector('img');
  const stage = dialog.querySelector('.illustration-scroll');
  const zoom = dialog.querySelector('#illustration-zoom');
  let zoomed = false, opener = null;
  function fit() {
    if (!dialog.open || !img.naturalWidth) return;
    const maxW = Math.max(180, stage.clientWidth - 24);
    const maxH = Math.max(180, innerHeight * .65);
    const ratio = Math.min(maxW / img.naturalWidth, maxH / img.naturalHeight, 1);
    img.style.width = Math.round(img.naturalWidth * ratio * (zoomed ? 2 : 1)) + 'px';
    img.style.height = 'auto';
    zoom.setAttribute('aria-pressed', String(zoomed));
    zoom.textContent = zoomed ? 'Vue entière' : 'Zoomer ×2';
  }
  img.addEventListener('load', fit);
  triggers.forEach(trigger => trigger.addEventListener('click', () => {
    opener = trigger;
    zoomed = false;
    dialog.querySelector('#illustration-title').textContent = trigger.dataset.imageTitle;
    dialog.querySelector('#illustration-caption').textContent = trigger.closest('figure').querySelector('figcaption').textContent;
    img.alt = trigger.querySelector('img').alt;
    img.src = trigger.dataset.imageFull;
    dialog.showModal();
    document.body.classList.add('illustration-is-open');
    stage.scrollTop = 0;
    stage.scrollLeft = 0;
    fit();
  }));
  zoom.addEventListener('click', () => { zoomed = !zoomed; fit(); stage.scrollTop = 0; stage.scrollLeft = 0; });
  dialog.querySelector('.illustration-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('illustration-is-open');
    opener?.focus({preventScroll: true});
  });
  window.addEventListener('resize', fit);
})();
