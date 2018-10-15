import '../sass/main.scss';
import data from '../json/boxes.json';

document.addEventListener("DOMContentLoaded", function(event) {
   insertData();
   scrollTop();
   scrollBottom();
   showMenu();
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

   burger.addEventListener('click', function(){
      menu.querySelector("ol").classList.add("hide");
      if(checkBox.checked == true){
         label.style.background = 'transparent';
      }
      else {
         label.style.background = 'black';
      }
   });

   for(let i=0; i<allLiHref.length; i++){
      allLiHref[i].addEventListener('click', function(){
         event.stopPropagation();
         checkBox.checked = false;
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
