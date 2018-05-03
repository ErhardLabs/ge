jQuery( document ).ready(function(){

  // Set Random image background for Lyrics div
  let imagesArray = [
    SSP_LOCAL_PHP.siteUrl + '/wp-content/uploads/sites/14/2016/10/Grayson-Erhard-Colorado-Guitarist-and-Singer-Songwriter-Hair.jpg',
    SSP_LOCAL_PHP.siteUrl + '/wp-content/uploads/sites/14/2018/05/Grayson-Erhard-12.jpg'
    SSP_LOCAL_PHP.siteUrl + '/wp-content/uploads/sites/14/2018/05/Grayson-Erhard-15.jpg'
  ];

  let $randomImage = imagesArray[Math.floor(Math.random() * imagesArray.length )];
  $('.ssp_lyrics').css('background-image', 'url(' + $randomImage + ')');

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

});