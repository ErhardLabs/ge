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
  wp_enqueue_script('sexy-single-product-js', SEXY_SINGLE_PRODUCT_URL .'assets/css/sexy-single-product.css');

}
  
add_action( 'woocommerce_after_single_product_summary', 'sexy_product_video', 10 );

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

function sexy_get_product_image() {
  global $product;
  $id = $product->get_id();
  $image = wp_get_attachment_image_src( get_post_thumbnail_id( $id), 'single-post-thumbnail' );

  d($id);
  d($image);

  echo '<img src="' . $image[0] .'" data-id="'. $id . '">';
}