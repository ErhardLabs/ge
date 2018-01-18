<?php
if (get_the_content() !== '') :
  ?>
  <div class="ssp_lyrics ssp_div">
      <div class="ssp_lyrics_background"></div>
    <div class="ssp_lyrics_wrap">
      <div class="lyrics_title">
        <h3>LYRICS</h3>
      </div>
      <div class="lyrics">
        <?php the_content(); ?>
      </div>
    </div>
  </div>
<?php endif; ?>