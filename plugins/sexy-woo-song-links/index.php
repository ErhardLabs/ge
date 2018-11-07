<?php
/*
Plugin Name: Sexy Woo Song Links
Plugin URI:
Description: Add music streaming links to your woocommerce product!
Version: 1.0
Author: Grayson Erhard
Author URI: https://graysonerhard.com
License: GPLv2 or later
Text Domain: sexy-woo-song-links
*/

add_action('wp_enqueue_scripts', 'swsl_scripts');
function swsl_scripts() {

  $classes = get_body_class();
  if (in_array('listen',$classes)) {
    wp_enqueue_style('swsl-style',  plugin_dir_url(__FILE__) . '/assets/css/styles.css');
    wp_enqueue_script('swsl', plugin_dir_url(__FILE__) . '/assets/js/animation.js', array('jquery'), false, true);
  }


}

$pluginPath = plugin_dir_path( __FILE__ );
$adminFile = '/admin.php';

require_once($pluginPath . $adminFile);