$=jQuery;

$(document).ready(function() {initialize();});



function initialize() {

  let cartIconClass;
	
	console.log('slider-div');

  if (typeof localized_sexy_config.sexy_woocheckout_cart_icon_class !== 'undefined') {

    cartIconClass = '.'+localized_sexy_config.sexy_woocheckout_cart_icon_class;

  } else {

    $('a').each(function(i) {
      let baseURI = $('a')[i].baseURI;
      let href = $('a')[i].href;
      let pathname = $('a')[i].pathname;

      if (pathname === '/home/cart/') {
        cartIconClass = $('a')[i].attr('class');
      }

    });
  }



	// CLOSE SLIDER
	$('#slider .fa-times-circle').unbind().click(function (e) {
		
		if ($(window).width() === $('#slider').outerWidth()) {
			var percentage = '-100%';
		} else { // DESKTOP AND TABLET VIEW
			var percentage = '-40%';
		}

		$('#slider').animate({
			right: percentage
		}, 500, function () {
			$('#slider').fadeOut();
			$('#slider section').fadeOut();
      $('#slider a.button.checkout.wc-forward').fadeIn();
      $('.woocommerce-mini-cart__total').fadeIn();
      $('#slider #sexy-woo-cart').css({'width': '100%'});
		});

	});


	$(cartIconClass).unbind().click(function (e) {

		e.preventDefault();

		view_slider($(window).width(), 'cart', $(this));

	});

  $(cartIconClass+' span').unbind().click(function (e) {

    e.preventDefault();

    view_slider($(window).width(), 'cart', $(this));

  });

	//ABOUT - GE.COM
  $('#read-more').unbind().click(function (e) {

    e.preventDefault();

    view_slider($(window).width(), 'Read More', $(this));

  });


	//CONTACT - GE.COM
	$('nav #menu-item-792').unbind().click(function (e) {

	  // console.log('contact');

		e.preventDefault();

		view_slider($(window).width(), 'Contact', $(this));

	});
	
}


function view_slider(widthOfScreen, text, element) {



	$('#slider section').fadeOut();

	if ($('.fa-shopping-cart').hasClass('shopping_cart_clicked_before')) {
    $('#slider #sexy-woo-cart').fadeIn();
	}

	var doNothing = false;

	if (widthOfScreen < 768) {
		var percentage = '-100%';
		var widthOfSlider = '100%';
	} else { // DESKTOP AND TABLET VIEW
		var percentage = '-40%';
		var widthOfSlider = '40%';
	}

  if (text == 'checkout') {

    $('#slider .woocommerce-mini-cart__total').fadeOut();
    $('#slider a.button.checkout.wc-forward').fadeOut();
    $('#slider #sexy-woo-cart').fadeOut();
    $('#slider #sexy-woo-checkout').fadeIn();

  }
	
	$('#slider').show();
	$('#slider section:first-of-type').fadeIn();
	
	
	$('#slider').animate({
		 right: '0%',
		 width: widthOfSlider
	}, 500, function () {

    if (text == 'Read More') {
      $('#slider #text-30').fadeIn();
    } else if (text == 'Contact') {
      $('#slider .gform_widget').fadeIn();
    } else if (text == 'cart') {
    	if (!$('.fa-shopping-cart').hasClass('shopping_cart_clicked_before')) {
        $('#slider #sexy-woo-cart').fadeIn();
      }
    }

	});

	$("html, body, #slider").animate({ scrollTop: 0 }, "slow");


}