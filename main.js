(()=>{"use strict";const t=document.querySelector(".header"),e=()=>{!0===n?(()=>{const t=document.querySelector(".expanded-sidebar");document.querySelector("#expand-btn").addEventListener("click",(function(){d.setAttribute("style","display: grid; grid-template-columns: 1fr"),t.setAttribute("style","background-color: red;"),n=!1,console.log("sidebar retracted")}))})():(()=>{if(d.setAttribute("style","display: grid; grid-template-columns: auto 1fr"),!1===n){const t=document.createElement("div");t.id="expanded-menu",t.setAttribute("style","grid-column: 1;\n            background-color: #252526; \n            width: 10rem;"),d.appendChild(t),console.log("sidebar expanded"),n=!0}})()};let n=!1;const d=document.querySelector("#content"),o=document.querySelector(".compact-sidebar"),i=((()=>{const t=document.createElement("div");t.id="expand-btn",t.textContent="EXPAND",t.setAttribute("style","grid-row: 1 / 2; color: white"),o.appendChild(t),t.addEventListener("click",e)})(),(()=>{const t=document.createElement("div");t.id="home-btn",t.textContent="HOME",t.setAttribute("style","grid-row: 2 / 3; color: white"),o.appendChild(t)})(),(()=>{const t=document.createElement("div");t.id="today-btn",t.textContent="TODAY",t.setAttribute("style","grid-row: 3 / 4; color: white"),o.appendChild(t)})(),(()=>{const t=document.createElement("div");t.id="upcoming-btn",t.textContent="UPCOMING",t.setAttribute("style","grid-row: 4 / 5; color: white"),o.appendChild(t)})(),(()=>{const t=document.createElement("div");t.id="pastdue-btn",t.textContent="PAST DUE",t.setAttribute("style","grid-row: 5 / 6; color: white"),o.appendChild(t)})(),(()=>{const t=document.createElement("div");t.id="projects-btn",t.textContent="PROJECTS",t.setAttribute("style","grid-row: 6 / 7; color: white"),o.appendChild(t)})(),(()=>{const t=document.createElement("div");t.id="account-btn",t.textContent="ACCOUNT",t.setAttribute("style","grid-row: 8 / 9; color: white"),o.appendChild(t)})(),void(()=>{const t=document.createElement("div");t.id="settings-btn",t.textContent="SETTINGS",t.setAttribute("style","grid-row: 9 / 10; color: white"),o.appendChild(t)})());document.getElementById("content"),(()=>{const e=document.createElement("div");e.id="header-logo",e.textContent="LOGO",e.setAttribute("style","grid-column: 1 / 2; color: white"),t.appendChild(e)})(),(()=>{const e=document.createElement("div");e.id="header-username",e.textContent="USERNAME---",e.setAttribute("style","grid-column: 3 / 4; color: white"),t.appendChild(e)})(),(()=>{const e=document.createElement("div");e.id="header-pfp",e.textContent="PFP",e.setAttribute("style","grid-column: 4 / 5; color: white"),t.appendChild(e)})(),i()})();