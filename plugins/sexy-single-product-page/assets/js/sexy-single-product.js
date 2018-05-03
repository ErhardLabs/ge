jQuery( document ).ready(function(){

  // Set Random image background for Lyrics div
  let imagesArray = [
    SSP_LOCAL_PHP.siteUrl + '/wp-content/uploads/sites/14/2016/10/Grayson-Erhard-Colorado-Guitarist-and-Singer-Songwriter-Hair.jpg',
    SSP_LOCAL_PHP.siteUrl + '/wp-content/uploads/sites/14/2016/10/Grayson-Erhard-Colorado-Guitarist-and-Singer-Songwriter.jpg',
    SSP_LOCAL_PHP.siteUrl + '/wp-content/uploads/sites/14/2016/10/Grayson-Erhard-Colorado-Guitarist-and-Singer-Songwriter-press-photo.jpg'
  ];

  let $randomImage = imagesArray[Math.floor(Math.random() * imagesArray.length )];
  $('.ssp_lyrics').css('background-image', 'url(' + $randomImage + ')');

});