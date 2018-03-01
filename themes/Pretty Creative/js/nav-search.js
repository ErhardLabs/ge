jQuery(document).ready(function() {

  // Nav Search box
  $('nav input.aws-search-field').wrap("<span id='search' class='search_box'></span>")
  $('nav input.aws-search-field').click(function() {
    if($('nav input.aws-search-field').val() == ''){
      $('.aws-search-result').hide();
    }
    $('nav #menu-header-right li:not(:last-child)').css('display', 'none');
    $('nav .widget-area .image').css('display', 'none');
    $('.search_box').addClass('hidden');
  });

  $(document).click(function() {
    if(!$(event.target).closest('nav input.aws-search-field').length) {
      $('nav input.aws-search-field').val('');
      $('nav #menu-header-right li:not(:last-child)').css('display', 'inline-block');
      $('nav .widget-area .image').css('display', 'inline-block');

      $('.search_box').removeClass('hidden');
    }
  });


});