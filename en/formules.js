/* Fractions locales, sans dépendance externe. Les contrôles ne sont jamais réécrits. */
(()=>{'use strict';
const atom='(?:[∂ΔA-Za-zÀ-ÿξρνθ₀-₉ᵢᵃ⁺¹²³°,]+(?:(?:<sub>[^<]+</sub>|<sup>[^<]+</sup>)[∂ΔA-Za-zÀ-ÿξρνθ₀-₉ᵢᵃ⁺¹²³°,]*)*|[0-9]+(?:[.,][0-9]+)?)';
const operand='(?:\\([^()<>]+\\)|'+atom+')';
const ratio=new RegExp('('+operand+')\\s*/\\s*('+operand+')','g');
function format(el){if(el.closest('.math-frac,.math-typeset,math,.eyebrow,a,code,pre,svg,select,script,style')||el.querySelector('button,input,select,textarea,a,code,pre,img,math,p,div,table,ul,ol'))return;const html=el.innerHTML;if(!html.includes('/')||html.includes('math-frac'))return;
// Une adresse web, même affichée en texte brut dans une fenêtre de dialogue,
// n'est jamais une expression mathématique. Préserver tout son conteneur.
if(/(?:https?:\/\/|www\.|mailto:|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/i.test(el.textContent))return;
const next=html.replace(ratio,(all,a,b)=>{if(['eau/glace','Zn/Cu²⁺','UEL/Unisciel'].includes(all)||/^[A-Za-z]+\/[^<]*>$/.test(all))return all;return '<span class="math-frac"><span>'+a+'</span><span class="fraction-slash">/</span><span>'+b+'</span></span>'});if(next!==html)el.innerHTML=next;}
function run(){observer.disconnect();document.querySelectorAll('.formula,p,td,.quiz-option>span,li').forEach(format);observer.observe(document.body,{childList:true,subtree:true,characterData:true});}
let pending=false;const observer=new MutationObserver(()=>{if(!pending){pending=true;requestAnimationFrame(()=>{pending=false;run()})}});run();
})();
