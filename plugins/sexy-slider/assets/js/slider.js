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

  $('.ssp_lyrics_wrap').flexslider({
    selector: ".lyrics",
    slideshow: false,
    touch: true
  });

  // $.each('.lyrics', function (i) {
  //   //let height = $(this).height();
  //   console.log(i);
  // });



  // Create FlexSlider from array of videos
  $('.single-product  .ssp_container').flexslider({
    selector: ".ssp_video_wrap",
    slideshow: false,
    touch: true
  });

  //Upsell slider
  // $('.single-product .upsells').flexslider({
  //   selector: ".products > .product",
  //   slideshow: false,
  //   touch: true,
  //   minItems: 3,
  //   maxItems: 3
  // });

  $('.ge-slider-add-to-cart a').addClass('cta');
  $('.button.add_to_cart_button').addClass('cta');

});


