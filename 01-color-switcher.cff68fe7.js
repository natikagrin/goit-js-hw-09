!function(){const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let n=null;function a(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(t){n=setInterval(a,1e3),t.target.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(e){clearInterval(n),e.target.disabled=!0,t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.cff68fe7.js.map
