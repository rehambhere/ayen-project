"use strict";
window.onscroll = function() {
  myFunction();
};

var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

$(function() {
  "use strict";
  var header = $(".top-header"),
    navbar = $("nav");
  $(window).scroll(function() {
    if (
      $(window).scrollTop() >= header.height()
        ? navbar.addClass("sticky navbar-fixed-top")
        : navbar.removeClass("sticky navbar-fixed-top")
    );
  });
});


