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

define('SSP_URL', plugin_dir_url(__FILE__));
define('SSP_PATH', plugin_dir_path(__FILE__));

add_action('wp_enqueue_scripts', 'ssp_scripts_styles');
function ssp_scripts_styles() {
  wp_enqueue_style('sexy-single-product-css', SSP_URL .'assets/css/sexy-single-product.css');
  wp_register_script('sexy-single-product-js', SSP_URL .'assets/js/sexy-single-product.js');

  wp_localize_script('sexy-single-product-js', 'SSP_LOCAL_PHP', array(
    'siteUrl' => get_bloginfo( 'url' )
  ) );

  wp_enqueue_script('sexy-single-product-js');

}

add_action( 'woocommerce_before_single_product_summary', 'ssp_get_product_image', 10 );

function ssp_get_product_image() {
  global $product;
  $id = $product->get_id();
  if ( has_post_thumbnail( $id ) ) {
    $image = wp_get_attachment_image_src( get_post_thumbnail_id( $id), 'thumbnail' );
//    echo '<div class="ssp_background"></div>';
    echo '<div class="ssp_background_image" style="background-image: url(' . esc_url( $image[0] ) . ');"></div>';
  }
}

add_action( 'woocommerce_after_single_product_summary', 'ssp_video', 15 );

function ssp_video() {
  include_once( SSP_PATH . 'includes/product-video.php' );

}

add_action( 'woocommerce_after_single_product', 'ssp_lyrics', 10 );

function ssp_lyrics() {
  include_once( SSP_PATH . 'includes/product-lyrics.php' );

}


add_action( 'woocommerce_after_single_product', 'ssp_output_upsells', 15 );

function ssp_output_upsells() {
  woocommerce_upsell_display( 4,3 );

}
