$(document).ready(function(){
    $(".hover-img").hide();
    $(".hover").hover(function(){
        $(this).children(".hover-img").toggle();
    });
});
