$(document).ready(function() {
  $('.parallax').parallax();
  $('.sidenav').sidenav();
  $('.modal').modal({
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
  });
  $('.collapsible').collapsible();
  $('.carousel').carousel();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
  });
  // Carousel
  autoplay();
  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 5000);
  }
});
