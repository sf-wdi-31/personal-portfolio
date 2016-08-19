// sanity check
console.log("app.js linked.");

$(document).ready(function(){

  $(window).on("scroll", function handleScroll(){
    if ($(this).scrollTop() < 150) {
      $('#header-info').slideDown("slow");
    } else {
      $('#header-info').slideUp("slow");
    }
  })

  var time;

  $('header').on("mouseenter", function handleHover () {
    time = setTimeout (function () {
      $('#header-info').slideDown("slow")}, 3000);

  })

  $('header').mouseleave(function () {
    clearTimeout(time);
  })

})


  // var handleClick = $('.nav-buttons').click(function(event) {
  //   event.preventDefault();
  // })
