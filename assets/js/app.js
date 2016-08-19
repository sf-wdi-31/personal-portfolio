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

  $('header').on("mouseover", function handleHover () {
    $('#header-info').delay(800).slideDown("slow");
  })

})
