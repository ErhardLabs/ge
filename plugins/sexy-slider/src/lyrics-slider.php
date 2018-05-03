<?php
if ( get_the_content() !== '' ) :

	// Delimit by /lyric
	$lyrics = explode( '/lyric', get_the_content_with_formatting() );

	?>
    <div class="ssp_lyrics ssp_div">
        <div class="ssp_lyrics_background"></div>
        <div class="lyrics_title">
            <h3>LYRICS</h3>
        </div>
        <div class="ssp_lyrics_wrap">
            <?php
                foreach ( $lyrics as $lyric ) : ?>
                    <div class="lyrics">
                        <?php echo $lyric ?>
                    </div>
            <?php endforeach; ?>
        </div>
    </div>
<?php endif; ?>

<?php
function get_the_content_with_formatting ($more_link_text = '(more...)', $stripteaser = 0, $more_file = '') {
	$content = get_the_content($more_link_text, $stripteaser, $more_file);
	$content = apply_filters('the_content', $content);
	$content = str_replace(']]>', ']]&gt;', $content);
	return $content;
}
?>



