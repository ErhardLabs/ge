<?php if ( get_field("product_video" ) ) :
  $product_video = esc_url( get_field("product_video" ) );
  preg_match('/[\\?\\&]v=([^\\?\\&]+)/', $product_video, $matches);
  $id = $matches[1];
  ?>
<div class="ssp_video ssp_div">
  <div class="ssp_container">
        <div class="ssp_video_wrap">
            <iframe src="https://www.youtube.com/embed/<?php echo $id ?>?rel=0&showinfo=0&color=white&iv_load_policy=3"
                    frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
</div>
<?php endif; ?>
