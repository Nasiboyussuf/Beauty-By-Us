$(document).ready(function(){
    $(".image").hover(function(){
        $(".price").hide();
        $(this).children(".price").show();
 
    });
});