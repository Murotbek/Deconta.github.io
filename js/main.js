window.addEventListener("DOMContentLoaded", function(){

   const list = document.querySelectorAll('.header__slider__buttons li'),
         sliders = document.querySelectorAll('.first__rb__image img');
  list.forEach((item, i) =>{ 
         item.addEventListener('click', (e) =>{
         list.forEach(el=>{ el.classList.remove('active'); });
         item.classList.add('active');
         console.log(i)
         sliders.forEach(el=>{ el.classList.remove('active'); });
         sliders[i].classList.add("active")
     })
     
 });
 const partnerImages = document.querySelectorAll(".container__partners__image");
partnerImages.forEach((item)=>{
  item.addEventListener('mouseenter',(e)=>{
      
      if (e.target) {
        partnerImages.forEach(el=>{ el.classList.add("gray"); });
        e.target.classList.remove("gray"); 
        e.target.classList.add("show"); 
      }
   
  });
   item.addEventListener('mouseleave',(e)=>{
    
     if (e.target) {
      partnerImages.forEach(el=>{ el.classList.remove("gray"); });
      e.target.classList.remove("show")
    }
   });
});
const menuClose = document.querySelector('.menu__close'),
      menuBody = document.querySelector('.menu__body');
      budywell = document.querySelector('.well');
      
        menuClose.addEventListener('click', (e)=>{
         if(e.target){
          menuClose.classList.toggle('menu__active');
          if(menuBody.classList.contains('show')){
            menuBody.classList.remove('show');
           setTimeout(()=> menuBody.style.display='none',500);
          
           budywell.style.overflow = 'visible';
          }else{
            setTimeout(()=> menuBody.classList.add('show'),1);
            // menuBody.classList.add('show');
            menuBody.style.display='block'
            budywell.style.overflow = 'hidden';
          }
         
          console.log(e.target);
         }
       })
   
 // Form
//  const order = document.querySelectorAll("[data-modal]"),
//  popup_order = document.querySelector(".popup_order"),
//  popup_order__close = document.querySelector(".popup_order__close"),
//  order_successful = document.querySelector(".order_successful"),
//  prev = document.querySelector(".order__prev"),
//  next = document.querySelector(".order__next"),
//  progress_complete = document.querySelector(".progress-complete");

//  order.forEach((item) =>{
//    item.addEventListener('click', (e)=>{
//      popup_order.classList.remove("hide_order");
//      body.style.overflow = 'hidden';
//      popup_order.classList.add("show_order");
//      prev.classList.add('hide_order');
//      next.classList.remove('hide_order');
    
//    });
//  })
// next.addEventListener("click", () => {
// form.classList.add("form__next");
// progress_complete.classList.add("progress-next");
// next.classList.add('hide_order');
// prev.classList.remove('hide_order');
// });
// prev.addEventListener("click", () => {
// form.classList.remove("form__next");
// progress_complete.classList.remove("progress-next");
// prev.classList.add('hide_order');
// next.classList.remove('hide_order');
// });

// const form = document.getElementById("form");


// popup_order__close.addEventListener('click', (e) =>{
// popup_order.classList.add("hide_order");
// popup_order.classList.remove("show_order");
// order_successful.classList.add("hide_order")
// order_successful.classList.remove("show_order")
// form.classList.remove("form__next");
// progress_complete.classList.remove("progress-next");
// body.style.overflow = 'scroll';
// prev.classList.add('hide_order');
// next.classList.remove('hide_order');
// })
// form.addEventListener("submit", formSend);
// async function formSend(e) {
// e.preventDefault();
// let error = formValidate(form);
// let formData = new FormData(form);

// if (error === 0) {
// form.classList.add("_sending");
// var object = {};
// formData.forEach(function (value, key) {
//  object[key] = value;
// });
// var json = JSON.stringify(object);
// let response = await fetch(
//  "https://troubled-poised-road.glitch.me/post",
//  {
//    method: "POST",
   
//    headers:{
//      'content-type':'application/json',
//    },
//    body: json,
//  }
// );

// if (response.ok) {
//  let result = await response.json();

//  form.reset();
//  form.classList.remove("_sending");
//  order_successful.classList.remove("hide_order");
//  order_successful.classList.add("show_order")
//  order_successful.style.display = 'block';
//  setTimeout(() =>{  
//    popup_order.classList.add("hide_order");
//    popup_order.classList.remove("show_order");
//    order_successful.classList.add("hide_order")
//    order_successful.classList.remove("show_order")
//    form.classList.remove("form__next");
//    progress_complete.classList.remove("progress-next");
//    body.style.overflow = 'scroll';
//    prev.classList.add('hide_order');
//    next.classList.remove('hide_order');
//  },2000)
 
// } else {
//  alert("Ошибка");
//  form.classList.remove("_sending");
//  body.style.overflow = 'scroll';
// }
// } else {
// alert("Ошибка");
// body.style.overflow = 'scroll';
// }
// }

// function formValidate(form) {
// let error = 0;
// let formReq = document.querySelectorAll("._req");
// for (let index = 0; index < formReq.length; index++) {
// const input = formReq[index];
// formRemoveError(input);
// if (input.classList.contains("_email")) {
//  if (emailTest(input)) {
//    formAddError(input);
//    error++;
//  }
// } else {
//  if (input.value === "") {
//    formAddError(input);
//    error++;
//  }
// }
// }
// return error;
// }

// function formAddError(input) {
// input.parentElement.classList.add("_error");
// input.classList.add("_error");
// }
// function formRemoveError(input) {
// input.parentElement.classList.remove("_error");
// input.classList.remove("_error");
// }

// function emailTest(input) {
// return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
// }

$(document).ready(function() {
  $('.container__partners__info__slideshows').mousewheel(function(e, delta) {
      // multiplying by 40 is the sensitivity, 
      // increase to scroll faster.
      this.scrollLeft -= (delta * 100);
      e.preventDefault();
      e.stopPropagation();
  });
});


});
