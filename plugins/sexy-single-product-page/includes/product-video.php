<div class="sexy_product_video ssp_div">
  <div class="sexy_product_video_wrap">
    <?php 
      global $product;
      $id = $product->get_id();
    ?>
    <div class="sexy_video_container">
        <div class="sexy_video_wrap">
            <?php $product_video = get_field("product_video" );
                if ( $product_video ) :
                  preg_match('/[\\?\\&]v=([^\\?\\&]+)/', $product_video, $matches);
                  $id = $matches[1];
                  ?>
            <iframe src="https://www.youtube.com/embed/<?php echo $id ?>?rel=0&showinfo=0&color=white&iv_load_policy=3"
                    frameborder="0" allowfullscreen></iframe>
            <?php endif; ?>
        </div>
    </div>

  </div>
</div>
