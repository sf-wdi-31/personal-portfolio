// sanity check
console.log("app.js linked.");

$(document).ready(function(){

  // $("#profile-pic").delay(1000).animate({ opacity: 1 }, 700);​

  $(".card-link").hover(function(){
    $(this).addClass('animated slideInUp');
  }, function(){
    $(this).removeClass('animated slideInUp');
  })


  // $("#apps").css("display", "none");
  // $("#exercises").css("display", "none");
  //
  //
  // var time;
  //
  // $('header').mouseenter(function handleHover () {
  //   time = setTimeout (function () {
  //     $('#header-info').slideDown("slow")}, 2000);
  // })
  //
  // $('header').mouseleave(function () {
  //   clearTimeout(time);
  // })
  //
  // $( "#apps-title" ).click(function(event) {
  //   event.preventDefault();
  //   $( "#apps" ).slideToggle("slow");
  // });
  //
  // $( "#exer-title" ).click(function(event) {
  //   event.preventDefault();
  //   $( "#exercises" ).slideToggle( "slow");
  // });
})
