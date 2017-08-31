<?php
/*
Plugin Name: Slider Div
Plugin URI:
Description: Dynamic slider div that shows widget content after a link click
Version: .1
Author: Grayson Erhard
Author URI: https://graysonerhard.com
License: GPLv2 or later
Text Domain: slider-div
*/


add_action('wp_enqueue_scripts', 'slider_scripts');
function slider_scripts() {

  wp_enqueue_style('slider-div-style', WP_PLUGIN_URL.'/slider-div/assets/css/slider-div-style.css');

  wp_register_script('slider-div', WP_PLUGIN_URL.'/slider-div/assets/js/slider-div.js', array('jquery'), false, true);

  $data = array(
      'coupon_nonce' => wp_create_nonce('apply-coupon'),
      'update_order_nonce' => wp_create_nonce('update-order-review'),
      'remove_order_item' => wp_create_nonce('order-item')
  );

  wp_localize_script('slider-div', 'localized_config', $data);

  wp_enqueue_script('slider-div');

}

add_action( 'widgets_init', 'slider_widget_admin_area' );
function slider_widget_admin_area() {
  register_sidebar( array(
      'name' => __( 'Slider Div', 'prettycreative' ),
      'id' => 'slider',
      'description' => __( '', 'prettycreative' ),
      'before_widget' => '<section id="%1$s" class="widget %2$s">',
      'after_widget'  => '</section>',
      'before_title'  => '<h4 class="widgettitle">',
      'after_title'   => '</h4>',
  ) );
}

add_action('get_footer', 'display_slider_widget');
function display_slider_widget() {
  echo '<div id="slider" class="slider"><div class="widget-area"><div class="wrap">';
  dynamic_sidebar('slider');
  echo '</div></div></div>';
}