<?php
if (has_excerpt()) :
  ?>
  <div class="ssp_lyrics ssp_div">
      <div class="ssp_lyrics_background"></div>
    <div class="ssp_lyrics_wrap">
      <div class="lyrics_title">
        <h1>LYRICS</h1>
      </div>
      <div class="lyrics">
        <?php the_content(); ?>
      </div>
    </div>
  </div>
<?php endif; ?>