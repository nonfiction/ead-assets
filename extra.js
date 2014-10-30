// Remove social bar as soon as scrolling begins
$(window).on('scroll', function(e) { 
  $('.social-bar').removeClass('visible');
});
