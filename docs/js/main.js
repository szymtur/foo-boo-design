!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n(1);var o=function(e){return e&&e.__esModule?e:{default:e}}(n(3));document.addEventListener("DOMContentLoaded",function(e){!function(){for(var e=document.querySelectorAll("#main-section figure"),t=document.querySelectorAll("#main-section .icon"),n=document.querySelectorAll(".title"),r=document.querySelectorAll("#main-section .description"),i=document.querySelectorAll("#main-section a"),l=0;l<i.length;l++)e[l].style.display="none",t[l].classList.add(o.default[l].icon),n[l].innerText=o.default[l].title,r[l].innerText=o.default[l].description,i[l].innerText=o.default[l].button.text,i[l].href=o.default[l].button.link}(),$("#bottom-section").find('input[type="submit"]').on("click",function(e){return e.preventDefault(),$("html, body").animate({scrollTop:0},1500,"linear"),!1}),$("#intro").find("a").on("click",function(){return $("html, body").animate({scrollTop:$(document).height()},1500,"linear"),!1}),function(){var e=document.querySelector(".main-nav .offer");e.addEventListener("mouseover",function(){null!=this.querySelector("ol")&&(this.querySelector("ol").style.display="block")}),e.addEventListener("mouseout",function(){null!=this.querySelector("ol")&&(this.querySelector("ol").style.display="none")})}()})},function(e,t,n){},,function(e){e.exports=[{icon:"fa-thumbs-up",title:"UTINI",description:"Wait, there's something dead ahead on the scanner. It looks like our droid...hit the accelerator.",button:{text:"ACCELERATE",link:"#box1"}},{icon:"fa-plane",title:"TATOOINE",description:"Two or Three more things and we're in great shape. The sooner the better.",button:{text:"About his mission",link:"#box2"}},{icon:"fa-university",title:"JAM THEIR COMLINK",description:"Ah, good. New acquisitions. You are a protocol droid, are you not? I am See-Threepio, human-cy... Yes or no will do.",button:{text:"About his mission",link:"#box3"}},{icon:"fa-trophy",title:"REMOVE THE BOLT",description:"All troops will debark for ground assault. Prepare to target the main generator.",button:{text:"Mynocks?",link:"#box4"}}]}]);