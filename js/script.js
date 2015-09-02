$(document).ready(function() {

  $(".1").click(function (){
    $('html, body').animate({
      scrollTop: $(".menu").offset().top
    }, 1000);
  });

  $(".2").click(function (){
    $('html, body').animate({
      scrollTop: $(".contact").offset().top
    }, 1000);
  });

  $(".3").click(function (){
    $('html, body').animate({
      scrollTop: $(".about").offset().top
    }, 1000);
});

});
