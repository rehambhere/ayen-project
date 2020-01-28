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

/*validation form */

//   const form = document.getElementById("form");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const error = document.getElementById('error-alert');

// function validateEmail(email) {
//   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }
// form.addEventListener("submit", e => {
//   let errorMessage=['']
//   e.preventDefault();
//   if (email.value === "" || email.value=== null || validateEmail(email)|| password.value === "") {
//     error.classList.add('alert');
//     error.innerHTML = `
//     <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> خطا في اسم المستخدم او كلمة المرور

//     `
//   }else{
//     error.classList.remove('alert');

//     error.innerHTML=" "
//   }

// });
