<?php
/*
Plugin Name: Sexy Background Header Video
Plugin URI:
Description: Make video background headers that are quick and easy!
Version: 1.0
Author: Sumner & Grayson Erhard | Sexy Studios
Author URI: https://graysonerhard.com
License: GPLv2 or later
Text Domain: sexy-bg-header-video
*/

define('SBHV_URL', plugin_dir_url(__FILE__));
define('SBHV_PATH', plugin_dir_path(__FILE__));

add_action('wp_enqueue_scripts', 'sbhv_scripts');
function sbhv_scripts() {

  wp_enqueue_style('sbhv-style', SBHV_URL.'assets/css/sbhv-styles.css');

//  wp_register_script('sbhv', SBHV_URL.'assets/js/sbhv.js', array('jquery'), false, true);
//
//  wp_enqueue_script('sbhv');

}


require_once('inc/admin.php');