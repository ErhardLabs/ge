<?php
/*
Template Name: Links
*/

//* Add custom body class to the head
add_filter('body_class', 'prettycreative_add_body_class');
function prettycreative_add_body_class($classes)
{

  $classes[] = 'social-links';
  return $classes;

}

//* Force full width content layout
add_filter('genesis_site_layout', '__genesis_return_full_width_content');

//* Remove navigation

//* Remove breadcrumbs
remove_action('genesis_before_loop', 'genesis_do_breadcrumbs');

add_action('genesis_entry_content', 'social_links_loop', 8);

function social_links_loop()
{
  ?>
  <div class="links">

    <h4>Socials</h4>
    <div class="social_link">
      <div class="social_link_img_wrap">
        <img src="/wp-content/themes/Pretty Creative/img/link-icons/facebook.png"/>
      </div>
      <a href="https://facebook.com/graysonerhardmusic">https://facebook.com/graysonerhardmusic</a>
    </div>

    <div class="social_link">
      <div class="social_link_img_wrap">
        <img src="/wp-content/themes/Pretty Creative/img/link-icons/instagram.png"/>
      </div>
      <a href="https://instagram.com/grayson_erhard">https://instagram.com/grayson_erhard</a>
    </div>

    <div class="social_link">
      <div class="social_link_img_wrap">
        <img src="/wp-content/themes/Pretty Creative/img/link-icons/youtube.png"/>
      </div>
      <a href="https://youtube.com/graysonerhard?sub_confirmation=1">https://youtube.com/graysonerhard</a>
    </div>

    <div class="social_link">
      <div class="social_link_img_wrap">
        <img src="/wp-content/themes/Pretty Creative/img/link-icons/twitter.png"/>
      </div>
      <a href="https://twitter.com/graysonerhard">https://twitter.com/graysonerhard</a>
    </div>

    <h4>Streaming</h4>
    <div class="social_link">
      <div class="social_link_img_wrap">
        <img src="/wp-content/themes/Pretty Creative/img/link-icons/spotify.png"/>
      </div>
      <a href="https://open.spotify.com/artist/7MkVirJ8M6XVDBLrHZLPMd">https://open.spotify.com/artist/7MkVirJ8M6XVDBLrHZLPMd</a>
    </div>

    <div class="social_link">
      <div class="social_link_img_wrap">
        <img src="/wp-content/themes/Pretty Creative/img/link-icons/apple.png"/>
      </div>
      <a href="https://itunes.apple.com/us/artist/grayson-erhard/956899761?uo=4">https://itunes.apple.com/us/artist/grayson-erhard/956899761?uo=4</a>
    </div>

    <div class="social_link">
      <div class="social_link_img_wrap">
        <img src="/wp-content/themes/Pretty Creative/img/link-icons/tidal.png"/>
      </div>
      <a href="https://tidal.com/artist/6569407">https://tidal.com/artist/6569407</a>
    </div>

    <div class="social_link">
      <div class="social_link_img_wrap">
        <img src="/wp-content/themes/Pretty Creative/img/link-icons/googleplay.png"/>
      </div>
      <a href="https://play.google.com/music/m/Ah6rj2psrfpztsagxgmf4f7za7q?signup_if_needed=1">https://play.google.com/music/m/Ah6rj2psrfpztsagxgmf4f7za7q?signup_if_needed=1</a>
    </div>

    <div class="social_link">
      <div class="social_link_img_wrap">
        <img src="/wp-content/themes/Pretty Creative/img/link-icons/deezer.png"/>
      </div>
      <a href="https://www.deezer.com/artist/7331870">https://www.deezer.com/artist/7331870</a>
    </div>

    <div class="social_link">
      <div class="social_link_img_wrap">
        <img src="/wp-content/themes/Pretty Creative/img/link-icons/amazon.png"/>
      </div>
      <a href="https://www.amazon.com/Grayson-Erhard/dp/B00S22LH5A">https://www.amazon.com/Grayson-Erhard/dp/B00S22LH5A</a>
    </div>

    <div class="social_link">
      <div class="social_link_img_wrap">
        <img src="/wp-content/themes/Pretty Creative/img/link-icons/soundcloud.png"/>
      </div>
      <a href="http://soundcloud.com/gray-son-966160864?id=269202469">http://soundcloud.com/gray-son-966160864?id=269202469</a>
    </div>

    <h4>Shows</h4>
    <div class="social_link">
      <div class="social_link_img_wrap">
        <img src="/wp-content/themes/Pretty Creative/img/link-icons/microphone.png"/>
      </div>
      <a href="https://graysonerhard-com.grayson.staging.wpengine.com/shows">https://graysonerhard-com.grayson.staging.wpengine.com/shows</a>
    </div>
  </div>
  <?php
}

//* Run the Genesis loop
genesis();