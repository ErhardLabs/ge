<?php

/*
Plugin Name: Sexy Resume Styles
Plugin URI:
Description: Extending styles to the Resume builder plugin. Adds mobile and tablet support
Version: 1.0
Author: Sumner Erhard
Author URI: https://sumnererhard.com
License: GPLv2 or later
Text Domain: sexy-single-product-page
*/

define('SRS_URL', plugin_dir_url(__FILE__));
define('SRS_PATH', plugin_dir_path(__FILE__));

add_action('wp_enqueue_scripts', 'srs_scripts_styles');
function srs_scripts_styles() {

	wp_enqueue_style('sexy-resume-css', SRS_URL .'sexy-resume.css');

}