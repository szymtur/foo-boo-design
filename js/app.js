import '../sass/main.scss';
import data from '../json/boxes.json';
import icon from '../graphics/favicon/favicon.png';

document.addEventListener("DOMContentLoaded", function(event) {
   insertData();
   scrollTop();
   scrollBottom();
   showMenu();
   changeFavicon(icon);
});

function insertData() {
   let icons = document.querySelectorAll('#main-section .icon');
   let title = document.querySelectorAll('.title');
   let description = document.querySelectorAll('#main-section .description');
   let buttons = document.querySelectorAll('#main-section a');
   
   for (let i=0; i<buttons.length; i++) {
      icons[i].classList.add(data[i].icon);
      title[i].innerText = data[i].title;
      description[i].innerText = data[i].description;
      buttons[i].innerText = data[i].button.text;
      buttons[i].href = data[i].button.link;
   }
}

function showMenu(){
   let menu = document.querySelector('.main-nav .offer');
   let checkBox = document.querySelector('.main-nav input[type="checkbox"]');
   let burger = document.querySelector('.main-nav .burger');
   let close = document.querySelector('.main-nav .close');
   let label = document.querySelector('.main-nav label[for="drop-menu"]');
   let allLiHref = document.querySelectorAll('.main-nav a');
   let arrowDown = document.querySelector('.main-nav .fas');
   
   if(window.innerWidth >= 1025) {
      menu.addEventListener('mouseover', function(event){
         if(this.querySelector("ol").classList != null){
            this.querySelector("ol").classList.remove("hide");
         }
      });

      menu.addEventListener('mouseout', function() {
         if(this.querySelector("ol").classList != null){
            this.querySelector("ol").classList.add("hide"); 
         }
      });
   }

   if (window.innerWidth < 1025) {
      menu.addEventListener('click', function(event){
         if (event.target.querySelector("ol").classList == "hide") {
            event.target.querySelector("ol").classList.remove("hide");
            event.stopPropagation();
         }
         else {
            event.target.querySelector("ol").classList.add("hide");
         }
      });

      arrowDown.addEventListener('click', function(event){
         event.stopPropagation();
      })
   }

   label.addEventListener('click', function(){
      menu.querySelector("ol").classList.add("hide");
      
      if(checkBox.checked == true){
         label.style.background = 'transparent';
         burger.classList.remove("hide");
         close.classList.add("hide");
      }
      else {
         label.style.background = 'black';
         burger.classList.add("hide");
         close.classList.remove("hide");
      }
   });

   for(let i=0; i<allLiHref.length; i++){
      allLiHref[i].addEventListener('click', function(event) {
         event.stopPropagation();
         checkBox.checked = false;
         burger.classList.remove("hide");
         close.classList.add("hide");
         label.style.background = 'transparent';
      })
   }
}

function scrollTop(){
   let buttonSubmit = $('#bottom-section').find('input[type="submit"]');
   
   buttonSubmit.on('click', function(event){
      event.preventDefault();
      $('html, body').animate({  scrollTop: 0}, 1500, 'linear');
      return false;
   })
}
  
function scrollBottom(){
   let buttons = $('#intro').find('a');
   
   buttons.on('click', function(){
      $('html, body').animate({scrollTop: $(document).height()}, 1500, 'linear');
      return false;        
   })
}

function changeFavicon(img) {
   let favicon = document.querySelector('link[rel="shortcut icon"]');

   if (!favicon) {
      favicon = document.createElement('link');
      favicon.setAttribute('rel', 'shortcut icon');
      let head = document.querySelector('head');
      head.appendChild(favicon);
   }
   
   favicon.setAttribute('type', 'image/png');
   favicon.setAttribute('href', `images/${img}`);
}

