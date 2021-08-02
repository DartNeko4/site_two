
"use strict"
/*-----------------------------check device type-------------------------------*/
const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
      iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
   }
};
/*-----------------------------check device type-------------------------------*/

/*----------------------add classes------------------------*/
if (isMobile.any()) {
   document.body.classList.add('_touch');/*add class to body*/

   let burgerLines = document.querySelectorAll('.burger_lines');
   if (burgerLines.length > 0) {
      for (let index = 0; index < burgerLines.length; index++) {
      const burgerLine = burgerLines[index];
      burgerLine.addEventListener("click", function (e) {
         burgerLine.parentElement.classList.toggle('_active');
      });
      }
   }

} else {
   document.body.classList.add('_pc');
}
/*----------------------add classes------------------------*/

/*----------------------add class to body------------------------*/
let burgerLines = document.querySelectorAll('.burger_lines');
   if (burgerLines.length > 0) {
      for (let index = 0; index < burgerLines.length; index++) {
      const burgerLine = burgerLines[index];
      burgerLine.addEventListener("click", function (e) {
         document.body.classList.toggle('_hidden');
      });
      }
   }
/*----------------------add class to body------------------------*/