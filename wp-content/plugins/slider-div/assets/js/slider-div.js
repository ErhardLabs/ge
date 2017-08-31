$=jQuery;

$(document).ready(function() {


  $('#read-more').unbind().click(function (e) {

    e.preventDefault();

    view_slider($(window).width(), 'Read More', $(this));

  });

  $('.fa-shopping-cart').unbind().click(function (e) {

    e.preventDefault();

    view_slider($(window).width(), 'cart', $(this));

  });

  // $('.added_to_cart').unbind().click(function (e) {
  //
  //   e.preventDefault();
  //
  //   // $('.fa-shopping-cart').parent().html('<i class="fa fa-shopping-cart fa-3x"></i>  (10)');
  //
  //   view_slider($(window).width(), 'cart', $(this));
  //
  // });

  $('#menu-item-792').unbind().click(function (e) {

    e.preventDefault();

    view_slider($(window).width(), 'Contact', $(this));

  });

  $('#slider .mini_cart_item .remove').unbind().click(function(e) {

    e.preventDefault();

    woo_remove_from_cart($(this));

  });

  $('.single_add_to_cart_button').unbind().click(function(e) {

      e.preventDefault();

      var id = $(this).val();

      woo_add_to_cart(id);

  });


  $('.add_to_cart_button').unbind().click(function() {
    view_slider($(window).width(), 'cart', $(this));
  });

});




function view_slider(widthOfScreen, text, element) {

  console.log(element);

  var doNothing = false;

  if (widthOfScreen < 768) {
    var percentage = '-100%';
    var width = '100%';
  } else { // DESKTOP AND TABLET VIEW
    var percentage = '-40%';
    var width = '40%';
  }


  if (text == 'Read More') {
    $('#slider #text-30').show();
  } else if (text == 'Contact') {
    $('#slider .gform_widget').show();
  } else if (text == 'cart') {
    $('#slider .widget_shopping_cart').show();
  } else {
    doNothing = true;
  }


  if (!doNothing) {

    $('#slider').css({'width': width});

    $('#slider').show();
    $('#slider section:first-of-type').fadeIn();


    $('#slider').animate({
      right: '0%'
    }, 500, function () {
    });


    $('.fa-times-circle').unbind().click(function () {

      $('#slider').animate({
        right: percentage
      }, 500, function () {
        $('#slider').hide();
        $('#slider section').hide();
      });

    });

  }




}




// AJAX DISCOUNT CODE
function apply_coupon(element) {

  var coupon = $('#coupon_code').val();



  $.post('?wc-ajax=apply_coupon', {security: localized_config.coupon_nonce,coupon_code : coupon}).done(function(data) {

    $('.woocommerce-message').fadeOut();
    $('.woocommerce-error').fadeOut();

    $('header').append(data);

    // LOADS AJAX TO REFRESH THE WOOCOMMERCE TOTALS
    $( 'body' ).trigger( 'update_checkout' );

    $(element).closest('.cart_discount_code').fadeOut('slow');
    $(element).closest('.cart_discount_code').remove();

  });

}

function woo_add_to_cart(productID) {

  // var productID = $('#featured_checkout_item').data('product-id');

  $.post('?wc-ajax=add_to_cart', {product_id : productID, quantity: 1}).done(function(data) {

    $('.woocommerce-message').fadeOut();
    $('.woocommerce-error').fadeOut();

    $('header').prepend(data);

    // LOADS AJAX TO REFRESH THE WOOCOMMERCE TOTALS
    $( 'body' ).trigger( 'update_checkout' );

    $(element).closest('.cart_discount_code').fadeOut('slow');
    $(element).closest('.cart_discount_code').remove();

  });
}

function woo_remove_from_cart(element) {

  console.log(element);

  var productID = $(element).data('product_id');

  console.log(productID);

  // $.post('?wc-ajax=remove_order_item', {security: localized_config.remove_order_item, product_id : productID}).done(function(data) {
  //
  //   $('.woocommerce-message').fadeOut();
  //   $('.woocommerce-error').fadeOut();
  //
  //   $('header').prepend(data);
  //
  //   // LOADS AJAX TO REFRESH THE WOOCOMMERCE TOTALS
  //   $( 'body' ).trigger( 'update_checkout' );
  //
  // });

  $.post('?wc-ajax=add_to_cart', {product_id : productID, quantity: 0}).done(function(data) {

    $('.woocommerce-message').fadeOut();
    $('.woocommerce-error').fadeOut();

    $('header').prepend(data);

    // LOADS AJAX TO REFRESH THE WOOCOMMERCE TOTALS
    $( 'body' ).trigger( 'update_checkout' );

    $(element).closest('.cart_discount_code').fadeOut('slow');
    $(element).closest('.cart_discount_code').remove();

  });
}