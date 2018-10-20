<?php
/*
Template Name: Listen
*/

//* Add custom body class to the head
add_filter('body_class', 'prettycreative_add_body_class');
function prettycreative_add_body_class($classes)
{

  $classes[] = 'listen';
  return $classes;

}

get_header();

global $woocommerce;
global $wp;
$current_url = home_url( add_query_arg( array(), $wp->request ) );

// RUN PIXEL CAFFEINE FOR FB PIXEL PROCESSING
(function_exists('PixelCaffeine')) ? PixelCaffeine() : false;

$slug = (isset($_GET['t'])) ? $_GET['t'] : false;
$productID = (isset($_GET['pid'])) ? $_GET['pid'] : false;

if ($slug) {
  $_product = get_page_by_path( $slug, OBJECT, 'product' );
  $productID = $_product->ID;
} else if ($productID) {
  $productID = (isset($_GET['pid'])) ? $_GET['pid'] : false;
  $productID = preg_replace('/[^0-9]/', '', $productID);
  $item = get_post( $productID );
  $slug = $item->post_name;
}

if ($productID) {

  $_product = wc_get_product($productID);
  $webstoreLink = $_product->get_permalink();
  $productTitle = $_product->get_title();

  $image = wp_get_attachment_image_src( get_post_thumbnail_id( $productID ), 'single-post-thumbnail' );

  $youtubeLink = get_post_meta($productID, '_youtube_text_area', true);
  $youtubeID = explode('?v=', $youtubeLink);
  $youtubeID = explode('&', $youtubeID[1]);
  $youtubeID = explode(',', $youtubeID[0]);
  $youtubeVideoStartTime = 0;

  $spotify = get_post_meta($productID, '_spotify_text_field', true);
  $appleMusic = get_post_meta($productID, '_apple_music_text_field', true);
  $tidal = get_post_meta($productID, '_tidal_text_field', true);
  $googlePlay = get_post_meta($productID, '_google_play_text_field', true);
  $deezer = get_post_meta($productID, '_deezer_text_field', true);
  $amazon = get_post_meta($productID, '_amazon_text_field', true);
  $pandora = get_post_meta($productID, '_pandora_text_field', true);


  echo "<div class='sexy_song_link_container' style='background: url($image[0]); background-size: cover;'>";
  echo "<div class='sexy_song_link_brightness'>";
  echo "<span class='listen_to'>LISTEN TO</span>";
  echo "<h2>$productTitle</h2>";
  echo "<h4>Grayson Erhard</h4>";

  if( !empty( $spotify ) )
//      echo "<a class='sexy_song_link youtube' id='youtube_newmusic' href='$youtubeLink' target='_blank'><i class='fa fa-2x fa-youtube'></i><span>YouTube</span></a>";

    echo "<div class='sexy_song_link_video_wrap'>";
  echo '<iframe width="420" height="240" src="https://www.youtube.com/embed/'. $youtubeID[0].'?rel=0&showinfo=0&loop=1&enablejsapi=1&list=PLCcd4NlKH5YzNrrji-f_3elED_tmifwUz&start='.$youtubeVideoStartTime.'" frameborder="0" allowfullscreen></iframe>';
  echo "</div>";

  if( !empty( $spotify ) )
    echo "<a class='sexy_song_link' href='$spotify' id='spotify_newmusic' target='_blank'><i class='fa fa-2x fa-spotify'></i><span>Spotify</span></a>";

  if( !empty( $appleMusic ) )
    echo "<a class='sexy_song_link' href='$appleMusic' id='apple_newmusic' target='_blank'><i class='fa fa-2x fa-apple'></i><span>Apple Music</span></a>";

  echo "<a class='sexy_song_link' href='$webstoreLink' id='webstore_newmusic' target='_blank'><img src='/wp-content/plugins/sexy-woo-song-links/assets/img/Grayson-Erhard-Logo-Emblem-OPAC-BLACK.png' /><span>Webstore</span></a>";

  if( !empty( $tidal ) )
    echo "<a class='sexy_song_link' href='$tidal' id='tidal_newmusic' target='_blank'><img src='/wp-content/plugins/sexy-woo-song-links/assets/img/tidal-square.png' /><span>Tidal</span></a>";

  if( !empty( $googlePlay ) )
    echo "<a class='sexy_song_link' href='$googlePlay' id='google_newmusic' target='_blank'><img src='/wp-content/plugins/sexy-woo-song-links/assets/img/google-play.png' /><span>Google Play</span></a>";

  if( !empty( $deezer ) )
    echo "<a class='sexy_song_link' href='$deezer' id='deezer_newmusic' target='_blank'><img src='/wp-content/plugins/sexy-woo-song-links/assets/img/deezer.svg' /><span>Deezer</span></a>";

  if( !empty( $amazon ) )
    echo "<a class='sexy_song_link' href='$amazon' id='amazon_newmusic' target='_blank'><i class='fa fa-2x fa-amazon'></i><span>Amazon</span></a>";

  if ( !empty( $pandora ) )
    echo "<a class='sexy_song_link' href='$pandora' id='pandora_newmusic' target='_blank'><img src='/wp-content/plugins/sexy-woo-song-links/assets/img/pandora-bw.png' /><span>Pandora</span></a>";



  echo "<a class='song_link_share' id='share_newmusic' href='".$current_url."'><i class='fa fa-2x fa-share-alt'></i>Share</a>";

//    echo "<div class='remember_dsp'>";
//      echo "<input type='checkbox' class='song_link_remember' id='remember_user_dsp_option' />";
//      echo "<label>Always send me to this app.</label>";
//    echo "</div>";

  echo "<div class='link_copied'>LINK COPIED TO CLIPBOARD</div>";
  echo "</div>"; // sexy_song_link_brightness
  echo "</div>"; // song_link_container
}