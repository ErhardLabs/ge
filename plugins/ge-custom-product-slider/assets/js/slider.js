$=jQuery;

$(document).ready(function() {
  $('.flexslider').flexslider({
    slideshow: false,
    touch: true,
    start: function(slider){
      current = 'bg'+slider.currentSlide;
      $('#home-page-1').addClass(current);
    },
    before: function(slider){
      animate = 'bg' +slider.animatingTo;
      $('#home-page-1').addClass(animate, 250);
      current = 'bg'+slider.currentSlide;
      $('#home-page-1').removeClass(current);
    }
  });

  $('.video-slider').flexslider({
    selector: ".youtube_channel > .ytc_video_container",
    slideshow: false
  });

  $('.ge-slider-add-to-cart a').addClass('cta');
  $('.button.add_to_cart_button').addClass('cta');

});


