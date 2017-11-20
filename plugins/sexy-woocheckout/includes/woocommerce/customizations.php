<?php

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}

/**
* WooCommerce Extra Feature
* --------------------------
*
* Change number of related products on product page
* Set your own value for 'posts_per_page'
*
*/
function woo_related_products_limit() {
  global $product;

  $args['posts_per_page'] = 2;
  return $args;
}


add_filter( 'woocommerce_output_related_products_args', 'sexy_woocheckout_related_products_args' );
function sexy_woocheckout_related_products_args( $args ) {
  $args['posts_per_page'] = 2; // 4 related products
  $args['columns'] = 2; // arranged in 2 columns
  return $args;
}

add_filter('woocommerce_cross_sells_total', 'sexy_woocheckout_cartCrossSellTotal');
function sexy_woocheckout_cartCrossSellTotal($total) {
  $total = '1';
  return $total;
}

// SEXY CHECKOUT RELATED PRODUCTS THAT SAYS "YOU MAY BE INTERESTED IN..."
if (get_option( 'wc_sexy_woocheckout_show_related_products' ) === 'no') {
  // from individual products
  //  remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20 );

  // FROM CART
}


remove_action( 'woocommerce_cart_collaterals', 'woocommerce_cross_sell_display');
