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

      menu.addEventListener('mouseover', function(){
         if (this.querySelector("ol") != null){
            this.querySelector("ol").style.display = "block";
         }   
      });

   menu.addEventListener('mouseout', function() {
      if (this.querySelector("ol") != null) {
         this.querySelector("ol").style.display = "none"; 
      }
   });
}

function scrollTop(){
   let buttonSubmit = $('#bottom-section').find('input[type="submit"]');
   
   buttonSubmit.on('click', function(event){
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 1500, 'linear');
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
