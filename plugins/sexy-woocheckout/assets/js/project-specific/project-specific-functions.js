function project_specific(data) {

  $('#continue_1').data('product-id', data);
  $('#continue_1').attr('data-product-id', data);

  $('#continue_1').data('product-variation-id', $('input.variation_id').val());
  $('#continue_1').attr('data-product-variation-id', $('input.variation_id').val());

}


// $('#continue_1').data('product-id', 184);
// $('#continue_1').attr('data-product-id', 184);
//
// $('#continue_1').data('product-variation-id', 149);
// $('#continue_1').attr('data-product-variation-id', 149);