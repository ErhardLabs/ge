<?php
/*
Template Name: Follow
*/

//* Add custom body class to the head
add_filter('body_class', 'prettycreative_add_body_class');
function prettycreative_add_body_class($classes)
{

  $classes[] = 'follow';
  return $classes;

}

get_header();

global $post;

$image = wp_get_attachment_image_src( $post->ID, 'single-post-thumbnail' );

?>



<div class='sexy_song_link_container' style='background: url(<?php echo $image[0] ?>); background-size: cover;'>
<div class='sexy_song_link_brightness'>
<span class='listen_to'>FOLLOW</span>
<h4>Grayson Erhard</h4>

<a class='sexy_song_link youtube' id='youtube_follow' href='https://youtube.com/graysonerhard?sub_confirmation=1' target='_blank'><i class='fa fa-2x fa-youtube'></i><span>YouTube</span></a>

  <a class='sexy_song_link instagram' id='instagram_follow' href='https://instagram.com/grayson_erhard' target='_blank'><i class='fa fa-2x fa-instagram'></i><span>Instagram</span></a>

  <a class='sexy_song_link facebook' id='facebook_follow' href='https://facebook.com/graysonerhardmusic' target='_blank'><i class='fa fa-2x fa-facebook'></i><span>Facebook</span></a>

  <a class='sexy_song_link twitter' id='twitter_follow' href='https://twitter.com/graysonerhard' target='_blank'><i class='fa fa-2x fa-twitter'></i><span>Twitter</span></a>

<a class='sexy_song_link' href='https://open.spotify.com/artist/7MkVirJ8M6XVDBLrHZLPMd' id='spotify_follow' target='_blank'><i class='fa fa-2x fa-spotify'></i><span>Spotify</span></a>

<a class='sexy_song_link' href='https://itunes.apple.com/us/artist/grayson-erhard/956899761?uo=4' id='apple_follow' target='_blank'><i class='fa fa-2x fa-apple'></i><span>Apple Music</span></a>

<a class='sexy_song_link' href='https://tidal.com/artist/6569407' id='tidal_follow' target='_blank'><img src='/wp-content/plugins/sexy-woo-song-links/assets/img/tidal-square.png' /><span>Tidal</span></a>

<a class='sexy_song_link' href='https://play.google.com/music/m/Ah6rj2psrfpztsagxgmf4f7za7q?signup_if_needed=1' id='google_follow' target='_blank'><img src='/wp-content/plugins/sexy-woo-song-links/assets/img/google-play.png' /><span>Google Play</span></a>

<a class='sexy_song_link' href='https://www.deezer.com/artist/7331870' id='deezer_follow' target='_blank'><img src='/wp-content/plugins/sexy-woo-song-links/assets/img/deezer.svg' /><span>Deezer</span></a>

<a class='sexy_song_link' href='https://www.amazon.com/Grayson-Erhard/dp/B00S22LH5A' id='amazon_follow' target='_blank'><i class='fa fa-2x fa-amazon'></i><span>Amazon</span></a>

<a class='sexy_song_link' href='https://www.pandora.com/artist/grayson-erhard/ARVf5nvqbq2cmX6' id='pandora_follow' target='_blank'><img src='/wp-content/plugins/sexy-woo-song-links/assets/img/pandora-bw.png' /><span>Pandora</span></a>

</div> <!-- sexy_song_link_brightness-->
</div> <!-- song_link_container -->