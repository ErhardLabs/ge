<?php
  
  /*
Plugin Name: Sexy Single Product Page
Plugin URI:
Description: Sexier single-product page
Version: 1.0
Author: Sumner Erhard
Author URI: https://sumnererhard.com
License: GPLv2 or later
Text Domain: sexy-single-product-page
*/

define('SEXY_SINGLE_PRODUCT_URL', plugin_dir_url(__FILE__));
define('SEXY_SINGLE_PRODUCT_PATH', plugin_dir_path(__FILE__));

add_action('wp_enqueue_scripts', 'sexy_single_product_scripts_styles');
function sexy_single_product_scripts_styles() {
  wp_enqueue_style('sexy-single-product-css', SEXY_SINGLE_PRODUCT_URL .'assets/css/sexy-single-product.css');
  wp_register_script('sexy-single-product-js', SEXY_SINGLE_PRODUCT_URL .'assets/js/sexy-single-product.js');

  wp_enqueue_script('sexy-single-product-js');

}

add_action( 'woocommerce_before_single_product_summary', 'sexy_get_product_image', 10 );

function sexy_get_product_image() {
  global $product;
  $id = $product->get_id();
  $image = wp_get_attachment_image_src( get_post_thumbnail_id( $id), 'single-post-thumbnail' );
//  $data = array(
//    'product_image' => $image
//  );
//
//  d($data);
//
//  wp_localize_script('sexy-single-product-js', 'sexy_single_product_php_vars', $data);

  echo '<div class="sexy_single_product_background" style="background-image: url(' . $image[0] . ');">';
  //echo '<img style="position:absolute; opacity:0; z-index:-100;" src="' . $image[0] .'" data-id="'. $id . '">';
  echo '</div>';
}

add_action( 'woocommerce_after_single_product_summary', 'sexy_product_video', 15 );

function sexy_product_video() {
  include_once( SEXY_SINGLE_PRODUCT_PATH . 'includes/product-video.php' );

}

add_action( 'woocommerce_after_single_product', 'sexy_product_lyrics', 10 );

function sexy_product_lyrics() {
  include_once( SEXY_SINGLE_PRODUCT_PATH . 'includes/product-lyrics.php' );

}


add_action( 'woocommerce_after_single_product', 'sexy_output_upsells', 15 );

function sexy_output_upsells() {
  woocommerce_upsell_display( 2,2 );

}
