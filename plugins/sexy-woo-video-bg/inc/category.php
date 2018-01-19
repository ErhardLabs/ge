<?php


add_action('genesis_after_header', 'category_video_background', 1);

function category_video_background() {
  var_dump(is_archive());die();
  if (is_archive()) {
    genesis_widget_area( 'home-subscribe-widget', array(
        'before' => '<div id="home-subscribe-widget" class="home-subscribe-widget"><div class="widget-area ' . prettycreative_widget_area_class( 'home-subscribe-widget' ) . '"><div class="wrap">',
        'after'  => '</div></div></div>',
    ) );
  }

}