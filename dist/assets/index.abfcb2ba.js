import{o as d,c as f,r as _,a as m,b as p,d as h}from"./vendor.d6a18c69.js";const v=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};v();const y="modulepreload",l={},E="/",c=function(s,n){return!n||n.length===0?s():Promise.all(n.map(r=>{if(r=`${E}${r}`,r in l)return;l[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":y,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((a,u)=>{o.addEventListener("load",a),o.addEventListener("error",u)})})).then(()=>s())};var g=(i,s)=>{const n=i.__vccOpts||i;for(const[r,e]of s)n[r]=e;return n};const L={};function O(i,s){const n=_("router-view");return d(),f(n)}var P=g(L,[["render",O]]);m(P).use(p({history:h(),routes:[{component:()=>c(()=>import("./Home.8d47520b.js"),["assets/Home.8d47520b.js","assets/vendor.d6a18c69.js"])},{component:()=>c(()=>import("./View1.9d7e76ad.js"),["assets/View1.9d7e76ad.js","assets/vendor.d6a18c69.js"])},{component:()=>c(()=>import("./View2.9702cb8f.js"),["assets/View2.9702cb8f.js","assets/vendor.d6a18c69.js"])},{component:()=>c(()=>import("./View3.618424a9.js"),["assets/View3.618424a9.js","assets/vendor.d6a18c69.js"])}]})).mount("#app");export{g as _};