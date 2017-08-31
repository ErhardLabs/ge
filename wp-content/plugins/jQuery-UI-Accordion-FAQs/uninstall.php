<?php

if ( !defined('ABSPATH') && !defined('WP_UNINSTALL_PLUGIN')) { exit();

}

delete_option('my_option');

// Check for hook
if ( function_exists('register_uninstall_hook') ) {
 register_uninstall_hook(__FILE__, 'remove_custom_posts_db');
}

add_action( 'admin_init', 'codex_init' );
function codex_init() {
    if ( current_user_can( 'delete_posts' ) ) {
        add_action( 'delete_post', 'remove_custom_posts_db', 10 );
    }
}

// Delete options in database
function remove_custom_posts_db() {
      global $wpdb;
      
      if ( $wpdb->get_var( $wpdb->prepare( "SELECT ID FROM wp_term_taxonomy WHERE wp_term_taxonomy.taxonomy = 'faqs_categories'" ) ) ) 
     { 
      return $wpdb->query( $wpdb->prepare( "DELETE FROM wp_term_taxonomy WHERE wp_term_taxonomy.taxonomy = 'faqs_categories'" ) );
     }
     
     if ( $wpdb->get_var( $wpdb->prepare( "SELECT ID FROM wp_posts WHERE wp_posts.post_type = 'clc_faqs_post_type'" ) ) ) 
     { 
      return $wpdb->query( $wpdb->prepare( "DELETE FROM wp_posts WHERE wp_posts.post_type = 'clc_faqs_post_type'" ) );
      
          $args = array(
          'post_type' =>'clc_faqs_post_type'
          );
        $posts = get_posts( $args );
        if (is_array($posts)) {
            foreach ($posts as $post) {
                
           wp_delete_post( $post->ID, true);
           echo "Deleted Post: ".$post->title."\r\n";
            }
        }
    }
 }
