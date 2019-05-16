$(document).ready(function() {
  $(".hover-pro").hide();
  $(".hover").hover(function() {
    $(this).children(".hover-pro").toggle();
  });
});
