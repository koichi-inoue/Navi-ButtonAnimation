$(function(){

  $(".menu").hide();

  $(".navButton").click( function(){
    $(".navButton").toggleClass('isOpen');
    $(".menu").slideToggle();
  });

});
