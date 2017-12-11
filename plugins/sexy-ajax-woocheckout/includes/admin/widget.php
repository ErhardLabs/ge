<?php

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}

add_action( 'widgets_init', 'sexy_slider_widget_admin_area' );
function sexy_slider_widget_admin_area() {
  register_sidebar( array(
      'name' => __( 'Slider Div', 'sexy-woocheckout' ),
      'id' => 'slider',
      'description' => __( '', '' ),
      'before_widget' => '<section id="%1$s" class="widget %2$s">',
      'after_widget'  => '</section>',
      'before_title'  => '<h4 class="widgettitle">',
      'after_title'   => '</h4>',
  ) );
}