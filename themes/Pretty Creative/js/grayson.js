$=jQuery;


$(document).ready(function() {

  $('#place_order').unbind().click(function(e) {
    e.preventDefault();

    if (($('#billing_first_name').val() == '') || ($('#billing_last_name').val() == '') || ($('#billing_email').val() == '')) {
      alert('Please make sure you have filled out first name, last name, and email to receive your order.');
    } else {
      $('form[name="checkout"]').submit();
    }
  });

  // Remove by songkick logo (can't remove with css)

  $('#powered').css('display', 'none');


  $('.home-subscribe-widget').hide();

  $('.filter-drop-spacer').remove();

  $('.cta.add_to_cart_button').unbind().click(function() {
    $(this).html('Added!');
  });

  // $('.fa-shopping-cart').addClass('fa-3x');

  $('.close').unbind().click(function(e) {
    e.preventDefault();
    var today = new Date();
    var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);

    document.cookie =
        'disableLandingPagePopUp=1; '+
        'expires='+nextweek+';' +
        'path=/';

    $('.home-subscribe-widget').fadeOut('fast');
  });


  // $('#social_stickers_widget-3').html().replace('spotify.png', 's.png');
  // $('#social_stickers_widget-3').html().replace('facebook.png', 'fb.png');
  // $('#social_stickers_widget-3').html().replace('twitter.png', 't.png');
  // $('#social_stickers_widget-3').html().replace('youtube.png', 'yt.png');
  // $('#social_stickers_widget-3').html().replace('instagram.png', 'i.png');


  if ($(window).width() < 768) {



    $('.featured_image_wrapper').css({'background-attachment': 'scroll'});
    $('.home-top').css({'background-attachment': 'scroll'});
    $('.home-page-2').css({'background-attachment': 'scroll'});

  } else { // DESKTOP AND TABLET VIEW





    if(!readCookie('disableLandingPagePopUp')) {
      $('.home-subscribe-widget').fadeIn('fast');
    }

    $('.menu-item a').unbind().click(function(e) {
      if ($(this).attr('href') == '#') {
        e.preventDefault();
        window.location = $(this).parent().find('ul li a').first().attr('href');
      }
    });

    var fullPath = location.pathname + location.search + location.hash;

    if(fullPath === "/") {

      $('.site-header').append('<span class="home-down"><i class="fa fa-angle-down"></i></span>');

      var timer;
      $(document).mousemove(function() {
        if (timer) {
          clearTimeout(timer);
          timer = 0;
        }

        $('.home-down .fa-angle-down').fadeIn('slow');
        timer = setTimeout(function() {
          $('.home-down .fa-angle-down').fadeOut()
        }, 2000)
      });




    }



  }





});

/*
$(document).ready(function() {
	if (typeof $('.bit-date').closest('tr')[0] != "undefined") {
		var tr = $('.bit-date').closest('tr')[0];
		$(tr).addClass('bandsintown-header');
	}
	console.log($('.bit-buy-tix').attr('href'));
	$('.bit-buy-tix').attr('href','https://www.eventbrite.com/e/ian-ethan-case-grayson-erhard-tickets-28612402466'); 
	console.log($('.bit-buy-tix').attr('href'));
});
*/

if ($('p').hasClass('confirmed')) { $('.instructions').hide(); }




function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
