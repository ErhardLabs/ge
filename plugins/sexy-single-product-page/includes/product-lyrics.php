<?php if ( get_field("lyrics" ) ) :
$lyrics = get_field("lyrics" ); ?>
<div class="sexy_product_lyrics ssp_div">
  <div class="sexy_product_lyrics_wrap">
    <div class="lyrics_title">
      <h1>LYRICS</h1>
    </div>
    <div class="lyrics">
        <p><?php echo $lyrics; ?></p>
    </div>
  </div>
</div>
<?php endif; ?>