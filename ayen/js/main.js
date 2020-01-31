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

$("div[id^='myModal']").each(function() {
  var currentModal = $(this);

  //click next
  currentModal.find(".btn-next").click(function() {
    currentModal.modal("hide");
    currentModal
      .closest("div[id^='myModal']")
      .nextAll("div[id^='myModal']")
      .first()
      .modal("show");
  });

  //click prev
  currentModal.find(".btn-prev").click(function() {
    currentModal.modal("hide");
    currentModal
      .closest("div[id^='myModal']")
      .prevAll("div[id^='myModal']")
      .first()
      .modal("show");
  });
});

$(document).ready(function() {
  $(".media").click(function() {
    $("body").addClass("fixed");
  });
});
