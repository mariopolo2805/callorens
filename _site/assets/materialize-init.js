$(document).ready(function(){function a(){$(".carousel").carousel("next"),setTimeout(a,5e3)}$(".parallax").parallax(),$(".sidenav").sidenav(),$(".modal").modal({inDuration:300,outDuration:200}),$(".collapsible").collapsible(),$(".carousel").carousel(),$(".carousel.carousel-slider").carousel({fullWidth:!0,indicators:!0}),a()});