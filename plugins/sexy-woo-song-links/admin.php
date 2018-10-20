<?php



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

  woocommerce_wp_text_input(
      array(
          'id'          => '_pandora_text_field',
          'label'       => __( 'Pandora', 'woocommerce' ),
          'placeholder' => 'https://www.pandora.com/artist/grayson-erhard/driving-in-the-rain-single/driving-in-the-rain/TRbb6kfxcgqcd4V',
          'desc_tip'    => 'true',
          'description' => __( 'Enter the Pandora track share link here.', 'woocommerce' )
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

  $pandoraTextField = $_POST['_pandora_text_field'];
  if( !empty( $pandoraTextField ) )
    update_post_meta( $post_id, '_pandora_text_field', esc_attr( $pandoraTextField ) );

}