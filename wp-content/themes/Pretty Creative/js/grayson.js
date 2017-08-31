$=jQuery;

$('.home-subscribe-widget').hide();

$('.filter-drop-spacer').remove();

$('.cta.add_to_cart_button').unbind().click(function() {
	$(this).html('Added!');
});

$('.fa-shopping-cart').addClass('fa-3x');

$('.close').unbind().click(function(e) {
	e.preventDefault();
	var today = new Date();
    var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
    
	document.cookie = 
		'disableLandingPagePopUp=1; '+
		'expires='+nextweek+';' +
		'path=/';
		
	$('.home-subscribe-widget').fadeOut('fast');
})

$(document).ready(function() {
	
	
	// $('#social_stickers_widget-3').html().replace('spotify.png', 's.png');
	// $('#social_stickers_widget-3').html().replace('facebook.png', 'fb.png');
	// $('#social_stickers_widget-3').html().replace('twitter.png', 't.png');
	// $('#social_stickers_widget-3').html().replace('youtube.png', 'yt.png');
	// $('#social_stickers_widget-3').html().replace('instagram.png', 'i.png');
	
	
	if ($(window).width() < 768) {
		
		// REMOVE HOME VIDEO IF IT'S MOBILE
		$('.video-background').remove();	
	
		$('.featured_image_wrapper').css({'background-attachment': 'scroll'});
		$('.home-top').css({'background-attachment': 'scroll'});
		$('.home-page-2').css({'background-attachment': 'scroll'});
	
	} else { // DESKTOP AND TABLET VIEW





    $('#read-more').unbind().click(function(e) {

      e.preventDefault();

      $('#slider').show();
      $('#slider').animate({
        right: '0%'
      }, 1000, function() {});


      $('.fa-times-circle').unbind().click(function() {

        $('#slider').animate({
          right: '-40%'
        }, 1000, function() {
          $('#slider').hide();
        });
      });


    });



		
		
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

		// MUTE VIDEO PLAYER
		if(fullPath == "/") {
		
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
				
			
			var homeVideo = $('#landing_yt_player').data('id');
			
			// INSERT VIDEO PLAYER
			$('body').prepend(
				'<div class="video-background">'+
					'<div class="video-foreground">'+
						'<iframe class="home_video" id="yt_home_embed" width="1280" height="720" src="https://www.youtube.com/embed/'+homeVideo+'?rel=0&controls=0&showinfo=0&autoplay=1&loop=1&enablejsapi=1&playlist=79EUORqIh0c" frameborder="0" allowfullscreen volume="0"></iframe>'+
					'</div>'+
				'</div>'
			);
			
			// This code loads the IFrame Player API code asynchronously.
			var tag = document.createElement('script');
			 
			tag.src = "https://www.youtube.com/iframe_api";
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			
			var player;
				
				
			// LOAD iFrame after content loads and a button is clicked	
			var div, n,
	            v = document.getElementsByClassName("youtube-player");
	        for (n = 0; n < v.length; n++) {
	            div = document.createElement("div");
	            div.setAttribute("data-id", v[n].dataset.id);
	            div.innerHTML = labnolThumb(v[n].dataset.id);
	            div.onclick = labnolIframe;
	            v[n].appendChild(div);
		    }		
		    
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


function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt_home_embed', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady() {
    player.playVideo();
    // Mute!
    player.mute();
}


function labnolThumb(id) {
    var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
        play = '<div class="play"></div>';
    return thumb.replace("ID", id) + play;
}

function labnolIframe() {
    var iframe = document.createElement("iframe");
    var embed = "https://www.youtube.com/embed/ID?autoplay=1?showinfo=0";
    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    this.parentNode.replaceChild(iframe, this);
    
}

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
