window.addEventListener("load", () => {
  var carousels = document.querySelectorAll(".carousel-3d");
  for (var i = 0; i < carousels.length; i++) {
      carousel(carousels[i]);
  }
});
function carousel(root) {
  var figure = root.querySelector("figure"),
  nav = root.querySelector("nav"),
  images = figure.children,
  dots = document.querySelectorAll(".dot"),
  nd = document.querySelectorAll(".dots__number"),
  textD = document.querySelectorAll(".dots__text"),
  n = images.length,
  gap = root.dataset.gap || 0,
  bfc = "bfc" in root.dataset,
  theta = 2 * Math.PI / n,
  currImage = 0;
  setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
  window.addEventListener("resize", () => {
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
  });
  setupNavigation();
  function setupCarousel(n, s) {
      var apothem = s / (2 * Math.tan(Math.PI / n));
      figure.style.transformOrigin = `50% 50% ${-apothem}px`;
      for (var i = 0; i < n; i++){ 
        
        if (screen.width < 1536) {
          images[i].style.padding = `0 ${gap/2}px`;
        }else{
          images[i].style.padding = `0 ${gap}px`;
        }
      }
      for (i = 0; i < n; i++) {
          images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
          images[i].style.transform = `rotateY(${i * theta}rad)`;

        
      }
      if (bfc)
      for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";
      rotateCarousel(currImage);
  }
  function setupNavigation() {
      nav.addEventListener("click", onClick, true);
      function onClick(e) {
          e.stopPropagation();
          var t = e.target;
          if (t.tagName.toUpperCase() != "BUTTON") return;
          if (t.classList.contains("next")) {
            if ( currImage < 11){
              currImage++;
            }
              
             var count = 0;
              var s = 0;
              var hrt = 0;
              for (count = 0; count <= currImage; count++) {
                for(j=0; j<n; j++){
                  dots[j].classList.remove("active");
                }
                if(currImage <= 11){
                  dots[count].classList.add('active'); 
                  }} 
               function numbersCalc(number,i){
                for (i = 0; i <= currImage/2; i++) {
                  for(b = 0; b < 6; b++){
                     number[b].classList.remove("active");
                  }
                  if(currImage <= 12){
                    number[i].classList.add('active'); 
                  }} 
 
               }
               numbersCalc(nd,s);
               numbersCalc(textD,hrt);
              } else {
                if ( currImage > 0){
              currImage--;}
               for (count = 12; count > currImage; count--) {
                 for(j=0; j<n; j++){
                   dots[j].classList.remove("active");
                 }
                 if(currImage <= 12){
                   dots[count-1].classList.add('active'); 
                 }} 
                 function numbersCalcMinus(number,i){
                  for (i = 0; i <= currImage/2; i++) {
                    for(b=0; b < 6; b++){
                       number[b].classList.remove("active");
                    }
                    if(currImage <= 12){
                      number[i].classList.add('active'); 
                    }} 
                 }
                 numbersCalcMinus(nd,s);
                 numbersCalcMinus(textD,hrt);
   
          }
          rotateCarousel(currImage);
          // console.log(count);
          // console.log(currImage)
          
      }
  }
  function rotateCarousel(imageIndex) {
      figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
  }
}
