$(document).ready(function() {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });

  $("#dismiss, .overlay").on("click", function() {
    $("#sidebar").removeClass("active");
    $(".content").removeClass("content-header");
    $(".footer").removeClass("content-header");

    $(".overlay").fadeOut();
  });

  $("#sidebarCollapse").on("click", function() {
    $("#sidebar").addClass("active");
    $(".content,.footer ").toggleClass("content-header");

    $(".overlay").fadeIn();
    $(".collapse.in").toggleClass("in");

    $("a[aria-expanded=true]").attr("aria-expanded", "false");
  });
});
