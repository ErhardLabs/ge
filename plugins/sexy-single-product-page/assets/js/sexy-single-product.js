jQuery( document ).ready(function(){

  setRandomBackground();

  function setRandomBackground() {
    var imagesArray = [
      SEXY_LOCAL_PHP.siteUrl + '/wp-content/uploads/sites/14/2016/10/Grayson-Erhard-Colorado-Guitarist-and-Singer-Songwriter-Hair.jpg',
      SEXY_LOCAL_PHP.siteUrl + '/wp-content/uploads/sites/14/2016/10/Grayson-Erhard-Colorado-Guitarist-and-Singer-Songwriter.jpg',
      SEXY_LOCAL_PHP.siteUrl + '/wp-content/uploads/sites/14/2016/10/Grayson-Erhard-Colorado-Guitarist-and-Singer-Songwriter-Pro-Press.jpg',
    ];

    var $randomImage = imagesArray[Math.floor(Math.random() * imagesArray.length )];
    $('.sexy_product_lyrics').css('background-image', 'url(' + $randomImage + ')');
  }

});