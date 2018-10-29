<?php

if ( !empty( get_post_meta( get_the_ID(), '_youtube_text_area', true) ) ):

  // Delimit by comma and Remove whitespaces
  $product_videos =
    explode(
      ',' ,
    preg_replace(
          '/\s+/',
          '',
           get_post_meta ( get_the_ID(), '_youtube_text_area', true) ) );
?>

<div class="ssp_video ssp_div">
    <div class="ssp_container">

<?php

  foreach ( $product_videos as $product_video ) :

      if (strpos($product_video, 'youtu.be') !== false) {
        $id = explode('youtu.be/', $product_video)[1];
      } else {
        preg_match('/[\\?\\&]v=([^\\?\\&]+)/', $product_video, $matches );
        $id = $matches[1];
      }

      ?>

        <div class="ssp_video_wrap">
            <iframe src="https://www.youtube.com/embed/<?php echo $id ?>?rel=0&showinfo=0&color=white&iv_load_policy=3"
                    frameborder="0" allowfullscreen></iframe>
        </div>

  <?php endforeach; ?>

    </div>
</div>

<?php endif; ?>
