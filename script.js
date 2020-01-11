$(function(){

  $(".menu-list").hide();

  $(".menu-button").click( function(){
    $(".menu-button").toggleClass('isOpen');
    $(".menu-list").slideToggle();
  });

});
