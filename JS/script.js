"use strict"

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

if (isMobile.any()) {
   document.body.classList.add('_touch');

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