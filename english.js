/* Local, curated translation of dynamic UI. Never changes form values or data keys. */
(()=>{
'use strict';
const dict=window.THERMO_EN||{};
const reverse=Object.fromEntries(Object.entries(dict).map(([fr,en])=>[en,fr]));
const esc=s=>s.replace(/[.*+?^$()|[\]\\]/g,'\\$&');
const keys=Object.keys(dict).filter(s=>dict[s]!==s&&!/[<>{}]/.test(s)&&s.length>2).sort((a,b)=>b.length-a.length);
const pattern=new RegExp('(?<![\\p{L}])(?:'+keys.map(esc).join('|')+')(?![\\p{L}])','gu');
function text(s){
 const trimmed=s.trim();
 if(dict[trimmed])return s.replace(trimmed,dict[trimmed]);
 return s.replace(pattern,m=>dict[m]).replace(/À (?=[0-9−-])/g,'At ').replace(/([0-9]) à (?=[0-9])/g,'$1 to ');
}
const attrs=['title','alt','aria-label','placeholder'];
function translate(root){
 const doc=root.nodeType===9?root:root.ownerDocument;
 if(root.nodeType===3){
  if(!root.parentElement?.closest('script,style,textarea,[contenteditable],[data-language],.giscus')){const t=text(root.nodeValue);if(t!==root.nodeValue)root.nodeValue=t;}return;
 }
 if(root.nodeType!==1&&root.nodeType!==9)return;
 if(root.nodeType===1&&root.closest('script,style,textarea,[contenteditable],[data-language],.giscus'))return;
 const walker=doc.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;const nodes=[];
 while(n=walker.nextNode())nodes.push(n);nodes.forEach(translate);
 for(const el of [root,...root.querySelectorAll('[title],[alt],[aria-label],[placeholder]')]){
  if(!el.getAttribute||el.closest?.('.giscus,[data-language]'))continue;
  for(const attr of attrs){const old=el.getAttribute(attr);if(old){const t=text(old);if(t!==old)el.setAttribute(attr,t);}}
 }
}
window.ThermoEnglish={text,translate,canonical:s=>reverse[s.trim()]||s};
function init(){
 translate(document);
 const observer=new MutationObserver(records=>{
  observer.disconnect();
  for(const r of records){if(r.type==='characterData')translate(r.target);else if(r.type==='attributes')translate(r.target);else for(const n of r.addedNodes)translate(n);}
  observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:attrs});
 });
 observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:attrs});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
