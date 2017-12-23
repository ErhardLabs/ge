<?php

/**
 * GE Custom Product Slider
 *
 * @package     geCustomProductSlider
 * @author      Sumner Erhard
 * @copyright   2017 Sumner Erhard Erhard Development LLC
 * @license     GPL-2.0+
 *
 * @wordpress-plugin
 * Plugin Name: GE Custom Product Slider
 * Description: Slide between newest products and Popular products in that category
 * Version:     1.0.0
 * Author:      Sumner Erhard
 * Author URI:  https://sumnererhard.com
 * Text Domain: geCustomProductSlider
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

function ge_custom_slider_scripts_and_style() {
  wp_enqueue_script( 'flex-slider-js', plugins_url( 'ge-custom-product-slider/assets/js/jquery.flexslider-min.js' ), array('jquery'), '', false );
  wp_enqueue_script( 'slider', plugins_url( 'ge-custom-product-slider/assets/js/slider.js' ), array('jquery'), '', false );

  wp_enqueue_style( 'flex-slider-css', plugins_url( 'ge-custom-product-slider/assets/css/flexslider.css' ) );
  wp_enqueue_style( 'slider-style-css', plugins_url( 'ge-custom-product-slider/assets/css/slider-style.css' ) );

}
add_action( 'wp_enqueue_scripts', 'ge_custom_slider_scripts_and_style' );


class GE_Custom_Slider_Widget extends WP_Widget {

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

function ge_custom_slider_widgets() {
  register_widget( 'GE_Custom_Slider_Widget' );
}

add_action( 'widgets_init', 'ge_custom_slider_widgets' );

//[ge_custom_slider free="false"]
function ge_custom_slider_shortcode( $atts = null, $content = null ){

  ob_start();

  $atts = shortcode_atts(  array(
      'free' => 'false'
    ), $atts
  );

  extract($atts);

  require( 'src/front-end.php' );

  $content = ob_get_clean();

  return $content;

}
add_shortcode( 'ge_custom_slider', 'ge_custom_slider_shortcode' );

