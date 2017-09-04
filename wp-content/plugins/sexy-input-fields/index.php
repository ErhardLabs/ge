<?php
/*
Plugin Name: Sexy Input Fields
Plugin URI:
Description: Turn your form input fields into the sexiest thing the world has seen.
Version: 1.0
Author: Sumner Erhard & Grayson Erhard AKA Sexy Studios
Author URI: https://sumnererhard.com.com
License: GPLv2 or later
Text Domain: sexy-input-fields
*/


add_action('wp_enqueue_scripts', 'sif_scripts');
function sif_scripts() {

  wp_enqueue_style('sif-style', WP_PLUGIN_URL.'/sexy-input-fields/assets/css/sif-styles.css');

  wp_register_script('sif', WP_PLUGIN_URL.'/sexy-input-fields/assets/js/sif.js', array('jquery'), false, true);

  wp_enqueue_script('sif');

}