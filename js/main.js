$(document).ready(function(){

  $('.slider-container').slick({
       dots:true

  });

  document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active')};


let wraps = document.querySelectorAll(".toggle-btn_wrapper");

wraps.forEach((btn)=>{
   btn.addEventListener('click', function(){
      toggleBtns = btn.querySelector(".toggle-btn")
      toggleBtns.classList.toggle("toggle-btn-active")
    
     let sub = btn.parentNode.querySelector(".prices-sublist")
      if (sub){
         sub.classList.toggle("hidden");
         
      
    
    };
});
});
});




