<?php

add_action('genesis_after_header', 'ge_page_video_background', 1);

function ge_page_video_background()
{

  $videoID = get_post_meta( get_the_ID(), 'ge_video_bg', true );

  if ((is_product_category()) || (is_front_page()) || ($videoID !== '')) {
    echo "<span id='landing_yt_player' data-id='" . $videoID . "'></span>";
  }
}