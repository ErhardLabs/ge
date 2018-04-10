$=jQuery;

$(document).ready(function() {
  // Nav Search box
  $('nav input.aws-search-field').wrap("<span id='search' class='search_box'></span>");
  $('nav input.aws-search-field').click(function() {
    if($('nav input.aws-search-field').val() == ''){
      $('.aws-search-result').hide();
    }

    if($(window).width() > 585){
      $('nav #menu-header-right li:not(:last-child)').css('display', 'none');
    } else {
      $('#menu-item-1950').css('display', 'none');
    }

    $('nav .widget-area .image').fadeOut('fast');
    $('.search_box').addClass('hidden');
  });

  $(document).click(function() {
    if(!$(event.target).closest('nav input.aws-search-field').length) {
      $('nav input.aws-search-field').val('');
      if($(window).width() > 585){
        $('nav #menu-header-right li:not(:last-child)').fadeIn('fast');
      } else {
        $('#menu-item-1950').fadeIn('fast');
      }

      $('nav .widget-area .image').css('display', 'inline-block');

      $('.search_box').removeClass('hidden');
    }
  });


});