<?php if ( !empty( get_post_meta( get_the_ID(), '_lyrics_text_area', true) ) ) :
$lyrics = get_post_meta( get_the_ID(), '_lyrics_text_area', true ); ?>
<div class="ssp_lyrics ssp_div">
    <div class="ssp_lyrics_background"></div>
  <div class="ssp_lyrics_wrap">
    <div class="lyrics_title">
      <h1>LYRICS</h1>
    </div>
    <div class="lyrics">
        <p><?php
        //Preserve line breaks to create stanza
        echo wpautop( $lyrics ); ?></p>
    </div>
  </div>
</div>
<?php endif; ?>