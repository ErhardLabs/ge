<?php
/*
Plugin Name: Bandcamp Woocommcerce Product Player
Plugin URI:
Description: Make your WooCommerce music products an interactive music player based on the song's Bandcamp song ID.
Version: 1.0
Author: Grayson Erhard
Author URI: https://graysonerhard.com
License: GPLv2 or later
Text Domain: bandcamp-woocommerce-product-player
*/


add_action('wp_enqueue_scripts', 'slider_scripts');
function slider_scripts() {

  wp_enqueue_style('bwpp-style', WP_PLUGIN_URL.'/bandcamp-woocommerce-product-player/assets/css/bwpp-styles.css');

  wp_register_script('bwpp', WP_PLUGIN_URL.'/bandcamp-woocommerce-product-player/assets/js/bwpp.js', array('jquery'), false, true);

  wp_enqueue_script('slider-div');

}