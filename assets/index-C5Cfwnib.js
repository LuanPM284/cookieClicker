(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))P(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const T of o.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&P(T)}).observe(document,{childList:!0,subtree:!0});function C(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function P(t){if(t.ep)return;t.ep=!0;const o=C(t);fetch(t.href,o)}})();let j=document.getElementById("points"),G=document.getElementById("coockie"),J=document.getElementById("credit");document.getElementById("multi-list");let Q=document.getElementById("clickValue"),b=document.getElementById("bonus"),a=50,m=100,w=document.getElementById("AutoClickBtn"),R=document.getElementById("autozone"),U=document.getElementById("autoclickprice"),A=0,H=document.getElementById("custspan2x"),V=document.getElementById("custspan5x"),$=document.getElementById("custspan10x"),z=document.getElementById("custspan100x"),E=document.getElementById("2x"),v=document.getElementById("5x"),I=document.getElementById("10x"),L=document.getElementById("100x");var S=0;let e=0;var l=1;let n=[],N=2,W=5,O=10,D=100,f=10,p=20,x=30,y=40,q=100;function X(){e+=l}function F(){S+=l,X(),s(),r(),c(),me()}function s(){j.innerText=S,J.innerText=e}function c(){Q.innerText=`${l}`}let Y=document.getElementById("autoclickprice");function Z(){Y.innerText=`Cost: ${q}`}function u(i,d){i.innerText=`Cost: ${d}`}function k(){e>=f?E.disabled=!1:E.disabled=!0,e>=p?v.disabled=!1:v.disabled=!0,e>=x?I.disabled=!1:I.disabled=!0,e>=y?L.disabled=!1:L.disabled=!0,e>=q?AutoClickBtn.disabled=!1:AutoClickBtn.disabled=!0,e>=a?(b.disabled=!1,console.log("bunos disable")):(b.disabled=!0,console.log("no")),e>=m?w.disabled=!1:w.disabled=!0}function r(){k()}function ee(){e-=f,l*=N,f*=N,r(),s(),n.push("2x"),B(),u(H,f),c(),h()}function te(){e-=p,l*=W,p*=N,r(),s(),n.push("5x"),B(),u(V,p),c(),h()}function ne(){e-=x,l*=O,x*=O,r(),s(),n.push("10x"),B(),u($,x),c(),h()}function ie(){e-=y,l*=D,y*=D,r(),s(),n.push("100x"),B(),u(z,y),c(),h()}B();s();c();Z();r();u(H,f);u(V,p);u($,x);u(z,y);E.disabled=!0;v.disabled=!0;I.disabled=!0;L.disabled=!0;G.addEventListener("click",F);E.addEventListener("click",ee);v.addEventListener("click",te);I.addEventListener("click",ne);L.addEventListener("click",ie);document.getElementById("persecond");let oe=document.getElementById("activeBooster2xbutton"),le=document.getElementById("activeBooster2xNum"),ce=document.getElementById("activeBooster5xbutton"),se=document.getElementById("activeBooster5xNum"),ue=document.getElementById("activeBooster10xbutton"),de=document.getElementById("activeBooster10xNum"),re=document.getElementById("activeBooster100xbutton"),ae=document.getElementById("activeBooster100xNum");function B(){n.includes("2x")&&(oe.classList.remove("hidden"),le.textContent=g(n,"2x")),n.includes("5x")&&(ce.classList.remove("hidden"),se.textContent=g(n,"5x")),n.includes("10x")&&(ue.classList.remove("hidden"),de.textContent=g(n,"10x")),n.includes("100x")&&(re.classList.remove("hidden"),ae.textContent=g(n,"100x"))}function g(i,d){return i.filter(C=>C===d).length}function me(){var i=new Audio("sound/clickb7.mp3");i.play()}function h(){var i=new Audio("sound/buy3.mp3");i.play()}document.getElementById("timer");const K=30;let M=Math.floor(Date.now()/1e3),_=M+K;function fe(){M=Math.floor(Date.now()/1e3);const i=_-M;i>=0?(document.getElementById("countdown").innerHTML=`${i}s`,setTimeout(()=>b.classList.remove("rainbow"),3e4),document.getElementById("countdown").classList.remove("hidden")):document.getElementById("countdown").classList.add("hidden")}function pe(){e>=a&&(e-=a,a*=2,document.getElementById("bonuszone").innerHTML="Cost: "+a,s(),k(),_=Math.floor(Date.now()/1e3)+K,setInterval(fe,1e3),l*=2,setTimeout(()=>{l/=2,k(),c()},3e4)),c()}b.addEventListener("click",()=>{pe()});function xe(){e>=m&&(A+=1,e-=m,m+=10,setInterval(F,1e4),s(),k(),R.innerHTML=A+" click par 10s ",U.innerHTML="Cost"+m)}w.addEventListener("click",xe);
