<?php
/*
Plugin Name: Sexy Woo Song Links
Plugin URI:
Description: Add music streaming links to your woocommerce product!
Version: 1.0
Author: Grayson Erhard
Author URI: https://graysonerhard.com
License: GPLv2 or later
Text Domain: sexy-woo-song-links
*/

add_action('wp_enqueue_scripts', 'swsl_scripts');
function swsl_scripts() {

  $classes = get_body_class();
  if (in_array('song_links',$classes)) {
    wp_enqueue_style('swsl-style',  plugin_dir_url(__FILE__) . '/assets/css/styles.css');
    wp_enqueue_script('swsl', plugin_dir_url(__FILE__) . '/assets/js/animation.js', array('jquery'), false, true);
  }


}


// Display Fields
add_action( 'woocommerce_product_options_general_product_data', 'swsl_woo_add_custom_general_fields' );
function swsl_woo_add_custom_general_fields() {

  //TODO: MAKE RADIO BUTTON: TRACK/ALBUM

  global $woocommerce, $post;

  echo '<div class="options_group">';

  woocommerce_wp_text_input(
      array(
          'id'          => '_spotify_text_field',
          'label'       => __( 'Spotify', 'woocommerce' ),
          'placeholder' => 'https://open.spotify.com/track/4MRPSULsdQX3PAfGb2xBfn',
          'desc_tip'    => 'true',
          'description' => __( 'Enter the Spotify track share link here.', 'woocommerce' )
      )
  );

  woocommerce_wp_text_input(
      array(
          'id'          => '_apple_music_text_field',
          'label'       => __( 'Apple Music', 'woocommerce' ),
          'placeholder' => 'https://itunes.apple.com/us/album/driving-in-the-rain/1402634578?i=1402635758&uo=4',
          'desc_tip'    => 'true',
          'description' => __( 'Enter the Apple Music track share link here.', 'woocommerce' )
      )
  );

  woocommerce_wp_text_input(
      array(
          'id'          => '_tidal_text_field',
          'label'       => __( 'Tidal', 'woocommerce' ),
          'placeholder' => 'https://tidal.com/track/90835287',
          'desc_tip'    => 'true',
          'description' => __( 'Enter the Tidal track share link here.', 'woocommerce' )
      )
  );

  woocommerce_wp_text_input(
      array(
          'id'          => '_google_play_text_field',
          'label'       => __( 'Google Play', 'woocommerce' ),
          'placeholder' => 'https://play.google.com/music/m/T6wx3sdagst7os3dywd3gopeeja?signup_if_needed=1',
          'desc_tip'    => 'true',
          'description' => __( 'Enter the Google Play track share link here.', 'woocommerce' )
      )
  );

  woocommerce_wp_text_input(
      array(
          'id'          => '_deezer_text_field',
          'label'       => __( 'Deezer', 'woocommerce' ),
          'placeholder' => 'https://www.deezer.com/track/517724692',
          'desc_tip'    => 'true',
          'description' => __( 'Enter the Deezer track share link here.', 'woocommerce' )
      )
  );

  woocommerce_wp_text_input(
      array(
          'id'          => '_amazon_text_field',
          'label'       => __( 'Amazon', 'woocommerce' ),
          'placeholder' => 'https://www.amazon.com/Driving-in-the-Rain/dp/B07DYB2T8M',
          'desc_tip'    => 'true',
          'description' => __( 'Enter the Amazon track share link here.', 'woocommerce' )
      )
  );

  echo '</div>';

}


// Save Fields
add_action( 'woocommerce_process_product_meta', 'swsl_woo_add_custom_general_fields_save' );
function swsl_woo_add_custom_general_fields_save($post_id) {
  // Text Field
  $spotifyTextField = $_POST['_spotify_text_field'];
  if( !empty( $spotifyTextField ) )
    update_post_meta( $post_id, '_spotify_text_field', esc_attr( $spotifyTextField ) );

  $appleMusicTextField = $_POST['_apple_music_text_field'];
  if( !empty( $appleMusicTextField ) )
    update_post_meta( $post_id, '_apple_music_text_field', esc_attr( $appleMusicTextField ) );

  $tidalTextField = $_POST['_tidal_text_field'];
  if( !empty( $tidalTextField ) )
    update_post_meta( $post_id, '_tidal_text_field', esc_attr( $tidalTextField ) );

  $googlePlayTextField = $_POST['_google_play_text_field'];
  if( !empty( $googlePlayTextField ) )
    update_post_meta( $post_id, '_google_play_text_field', esc_attr( $googlePlayTextField ) );

  $deezerTextField = $_POST['_deezer_text_field'];
  if( !empty( $deezerTextField ) )
    update_post_meta( $post_id, '_deezer_text_field', esc_attr( $deezerTextField ) );

  $amazonTextField = $_POST['_amazon_text_field'];
  if( !empty( $amazonTextField ) )
    update_post_meta( $post_id, '_amazon_text_field', esc_attr( $amazonTextField ) );

}

function display_song_links() {

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
    $youtubeVideoStartTime = 0;

    $spotify = get_post_meta($productID, '_spotify_text_field', true);
    $appleMusic = get_post_meta($productID, '_apple_music_text_field', true);
    $tidal = get_post_meta($productID, '_tidal_text_field', true);
    $googlePlay = get_post_meta($productID, '_google_play_text_field', true);
    $deezer = get_post_meta($productID, '_deezer_text_field', true);
    $amazon = get_post_meta($productID, '_amazon_text_field', true);


    echo "<div class='sexy_song_link_container' style='background: url($image[0])'>";
      echo "<div class='sexy_song_link_brightness'>";
      echo "<span class='listen_to'>LISTEN TO</span>";
      echo "<h2>$productTitle</h2>";
      echo "<h4>Grayson Erhard</h4>";


        if( !empty( $spotify ) )
          echo "<a class='sexy_song_link youtube' id='youtube_newmusic' href='#'><i class='fa fa-2x fa-youtube'></i><span>YouTube</span></a>";

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



        echo "<a class='song_link_share' id='share_newmusic' href='".$current_url."'><i class='fa fa-2x fa-share-alt'></i>Share</a>";

        echo "<div class='link_copied'>LINK COPIED TO CLIPBOARD</div>";
      echo "</div>"; // sexy_song_link_brightness
    echo "</div>"; // song_link_container
  }

}
add_shortcode( 'song_links', 'display_song_links' );