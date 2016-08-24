// sanity check
console.log("app.js linked.");

$(document).ready(function(){

  $("#apps").css("display", "none");
  $("#exercises").css("display", "none");

  $(window).on("scroll", function handleScroll(){
    if ($(this).scrollTop() < 150) {
      $('#header-info').slideDown("slow");
    } else {
      $('#header-info').slideUp("slow");
    }
  })

  var time;

  $('header').mouseenter(function handleHover () {
    time = setTimeout (function () {
      $('#header-info').slideDown("slow")}, 2000);
  })

  $('header').mouseleave(function () {
    clearTimeout(time);
  })

  $( "#apps-title" ).click(function(event) {
    event.preventDefault();
    $( "#apps" ).slideToggle("slow");
  });

  $( "#exer-title" ).click(function(event) {
    event.preventDefault();
    $( "#exercises" ).slideToggle( "slow");
  });
})
