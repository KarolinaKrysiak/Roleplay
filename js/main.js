"use strict";












/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNavX() {
    document.getElementById("myNav").style.width = "0%";
  }

  /* Close when someone clicks on the lnk inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    window.scroll({
      top: 0, 
      left: 0, 
     });
  }

  function scrollTop(){
    window.scroll({
      top: 0, 
      left: 0, 
     });
  }


