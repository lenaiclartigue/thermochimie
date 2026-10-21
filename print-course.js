/* Vue de lecture autonome pour impression/PDF. Aucun accès aux sauvegardes. */
(()=>{'use strict';
function init(){const trigger=(document.getElementById('print')||document.getElementById('print-practical')),source=(document.getElementById('pane-course')||document.querySelector('main'));if(!trigger||!source)return;
trigger.textContent='Version PDF / impression';
trigger.onclick=()=>{
 const page=window.open('','_blank');if(!page){alert('Autorisez l’ouverture de la version imprimable dans un nouvel onglet, puis réessayez.');return;}
 const content=source.cloneNode(true);
 // Preserve CSS-based diagram colors, strokes and typography in the static copy.
 const originals=source.querySelectorAll('svg,svg *'),copies=content.querySelectorAll('svg,svg *');
 originals.forEach((node,index)=>{const css=getComputedStyle(node);for(const key of ['fill','stroke','stroke-width','stroke-dasharray','opacity','font-family','font-size','font-weight','text-anchor','visibility'])copies[index].style.setProperty(key,css.getPropertyValue(key));});
 content.querySelectorAll('script,iframe,dialog,nav,#print,#print-practical,.print-stamp,.step-next,.rappel-hint,.choice-buttons,.notation-buttons,.thermal-controls,.diagram-mobile-hint,.heating-prediction,.range-label,input,select,textarea,progress,[role="group"],.exercise-feedback').forEach(x=>x.remove());
 content.querySelectorAll('[hidden]').forEach(x=>x.remove());
 content.querySelectorAll('details').forEach(x=>{const section=document.createElement('section');section.className='print-detail';const summary=x.querySelector('summary');if(summary){const h=document.createElement('h4');h.textContent=summary.textContent;summary.replaceWith(h);}section.append(...x.childNodes);x.replaceWith(section);});
 content.querySelectorAll('button').forEach(x=>{if(x.matches('.grandeur-term'))x.replaceWith(document.createTextNode(x.textContent));else x.remove();});
 content.querySelectorAll('label').forEach(x=>x.remove());
 content.querySelectorAll('svg').forEach(x=>{x.removeAttribute('width');x.removeAttribute('height');});
 content.querySelectorAll('.course-interactive,.thermal-widget,.reasoning-builder').forEach(x=>{const note=document.createElement('p');note.className='snapshot-note';note.textContent='Illustration : état affiché au moment de la préparation du document. L’activité complète est disponible en ligne.';x.append(note);});
 content.querySelectorAll('.progressive-diagram').forEach(x=>x.style.minWidth='0');
 const title=document.querySelector('h1')?.textContent||'Thermochimie';
 const escape=x=>x.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const url=new URL(location.href);url.hash='';
 page.document.open();page.document.write('<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><base href="'+escape(document.baseURI)+'"><title>'+escape(title)+' — Thermochimie</title><link rel="stylesheet" href="print-course.css?v=1"></head><body><nav class="print-toolbar"><p>Version de lecture · choisissez « Enregistrer au format PDF » dans la destination d’impression. Format A4 ; désactivez les en-têtes et pieds de page du navigateur.</p><button type="button" id="save-pdf">Imprimer / enregistrer en PDF</button></nav><header class="document-header"><p class="kicker">THERMOCHIMIE · LICENCE</p><h1>'+escape(title)+'</h1><p>Lénaïc Lartigue · Nantes Université</p><p class="document-source"><a href="'+escape(url.href)+'">'+escape(url.href)+'</a></p></header><main>'+content.innerHTML+'</main><footer>Thermochimie · Lénaïc Lartigue · CC BY-NC-ND 4.0</footer></body></html>');page.document.close();
 page.document.getElementById('save-pdf').onclick=()=>page.print();
};}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
