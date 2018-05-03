<?php

/**
 * Sexy slider
 *
 * @package     sexy-slider
 * @author      Sumner Erhard
 * @copyright   2017 Sumner Erhard Erhard Development LLC
 * @license     GPL-2.0+
 *
 * @wordpress-plugin
 * Plugin Name: Sexy Slider
 * Description: Create custom sliders from repeated fields
 * Version:     1.0.0
 * Author:      Sumner Erhard
 * Author URI:  https://sumnererhard.com
 * Text Domain: sexy-slider
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

define('SEXY_SLIDER_URL', plugin_dir_url(__FILE__));
define('SEXY_SLIDER_PATH', plugin_dir_path(__FILE__));

function sexy_slider_scripts_and_style() {
  wp_enqueue_script( 'flex-slider-js', SEXY_SLIDER_URL .'/assets/js/jquery.flexslider-min.js', array('jquery'), '', false );
  wp_enqueue_script( 'slider', SEXY_SLIDER_URL .'/assets/js/slider.js', array('jquery'), '', false );

  wp_enqueue_style( 'flex-slider-css', SEXY_SLIDER_URL . '/assets/css/flexslider.css' );
  wp_enqueue_style( 'slider-style-css', SEXY_SLIDER_URL . '/assets/css/slider-style.css' );

}
add_action( 'wp_enqueue_scripts', 'sexy_slider_scripts_and_style' );


class Sexy_Slider_Widget extends WP_Widget {

  function __construct() {
    // Instantiate the parent object
    parent::__construct( false, 'GE Custom Slider Widget' );
  }

  function widget( $args, $instance ) {
    // Widget output
    require( 'src/front-end.php' );
  }

  function update( $new_instance, $old_instance ) {
    // Save widget options

  }

  function form( $instance ) {
    // Output admin widget options form

    require( 'src/widget-fields.php' );
  }
}

function sexy_slider_widgets() {
  register_widget( 'Sexy_Slider_Widget' );
}

add_action( 'widgets_init', 'sexy_slider_widgets' );

//[sexy_slider lyrics="true"]
function sexy_slider_shortcode( $atts = null, $content = null ){

  ob_start();

  extract($atts = shortcode_atts(  array(
      'free' => 'false',
	    'lyrics' => 'false'
    ), $atts
  ));

	if( $atts['lyrics'] == "true" ) {
		require( 'src/lyrics-slider.php' );
	} else {
		require( 'src/product-slider.php' );
	}

  $content = ob_get_clean();

  return $content;

}
add_shortcode( 'sexy_slider', 'sexy_slider_shortcode' );

// Add product slider to each category page

add_action('woocommerce_before_shop_loop', 'add_product_slider');

function add_product_slider() {

  echo '<div class="wrap">';
  echo do_shortcode( '[sexy_slider]' );
  echo '</div>';

}

