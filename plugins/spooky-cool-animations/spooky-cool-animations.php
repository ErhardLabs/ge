<?php

/**
 * Spooky Cool Animations
 *
 * @package     spookyCoolAnimations
 * @author      Sumner Erhard
 * @copyright   2017 Sumner Erhard Erhard Development LLC
 * @license     GPL-2.0+
 *
 * @wordpress-plugin
 * Plugin Name: Spooky Cool Animations
 * Description: Add waypoint animations to your content
 * Version:     1.0.0
 * Author:      Sumner Erhard
 * Author URI:  https://sumnererhard.com
 * Text Domain: spookyCoolAnimations
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

//*WAYPOINTS
add_action('wp_enqueue_scripts', 'spooky_custom_scripts');
function spooky_custom_scripts() {
  wp_enqueue_script( 'waypoints-lib', plugins_url( 'spooky-cool-animations/assets/js/jquery.waypoints.min.js' ), array('jquery'), '', true);
  wp_enqueue_script( 'markup', plugins_url( 'spooky-cool-animations/src/recipes.js' ), array('jquery'), '', true );
  wp_enqueue_script( 'attributes', plugins_url( 'spooky-cool-animations/src/attributes.js' ), array('jquery'), '', true );
  wp_enqueue_script( 'waypoints', plugins_url( 'spooky-cool-animations/src/waypoints.js' ), array('jquery'), '', true );

  wp_enqueue_style( 'animate-lib', plugins_url( 'spooky-cool-animations/assets/css/animate.min.css' ) );
  wp_enqueue_style( 'spooky-animations', plugins_url( 'spooky-cool-animations/assets/css/spooky-animations.css' ) );

}