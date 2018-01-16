<?php


add_action('genesis_after_header', 'category_video_background', 1);

function category_video_background() {
  genesis_widget_area( 'home-subscribe-widget', array(
      'before' => '<div id="home-subscribe-widget" class="home-subscribe-widget"><div class="widget-area ' . prettycreative_widget_area_class( 'home-subscribe-widget' ) . '"><div class="wrap">',
      'after'  => '</div></div></div>',
  ) );
}