$=jQuery;

$( document ).ready(function(){

  var $productBackground = $('.sexy_single_product_background').prop('src');

  $('.single-product div.product').css({
    'background-image': 'url(' + $productBackground + ')',
    'background-size': 'cover',
    'background-position': 'fixed',
    'background-repeat': 'no-repeat'
  });

});