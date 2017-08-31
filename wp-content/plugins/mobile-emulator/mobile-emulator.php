<?php

/*
Plugin Name: Mobile Emulator
Description: Switch between screen sizes to view your website in a responsive manner.
Version:     0.2
Plugin URI:  N/A
Author:      Grayson Erhard, Brass Takks
Author URI:  N/A
Text Domain: mobile-emulator
License:     GPL v2 or later

Copyright © 2014 Grayson Erhard

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

*/

//include 'style.css';

// Register Custom Post Type
function custom_post_type() {

	$labels = array(
		'name'                => _x( 'Emulations', 'Post Type General Name', 'text_domain' ),
		'singular_name'       => _x( 'Emulation', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'           => __( 'Emulations', 'text_domain' ),
		'parent_item_colon'   => __( 'Parent Site:', 'text_domain' ),
		'all_items'           => __( 'All Sites', 'text_domain' ),
		'view_item'           => __( 'View Site', 'text_domain' ),
		'add_new_item'        => __( 'Add new site URL:', 'text_domain' ),
		'add_new'             => __( 'Add New', 'text_domain' ),
		'edit_item'           => __( 'Edit Site', 'text_domain' ),
		'update_item'         => __( 'Update Site', 'text_domain' ),
		'search_items'        => __( 'Search Site', 'text_domain' ),
		'not_found'           => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'  => __( 'Not found in Trash', 'text_domain' ),
	);
	$args = array(
		'label'               => __( 'emulations', 'text_domain' ),
		'description'         => __( 'Shows websites that can be viewed in a responsive manner.', 'text_domain' ),
		'labels'              => $labels,
		'supports'            => array( 'title', 'thumbnail', ),
		'taxonomies'          => array( 'category', 'post_tag' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => 5,
		'menu_icon'           => '',
		'can_export'          => true,
		'has_archive'         => true,
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'capability_type'     => 'page',
	);
	register_post_type( 'emulations', $args );

}

// Hook into the 'init' action
add_action( 'init', 'custom_post_type', 0 );

add_shortcode('mobile-emulator', 'mobile_emulator');

function mobile_emulator() {
    global $post;

// WP_Query arguments
$args = array (
    'post_type' => 'emulations',
);

// The Query
$query = new WP_Query( $args );

// Assign thumbnail image to variable
$thumbnail = wp_get_attachment_image_src(get_the_post_thumbnail($post->ID, 'full' ));

// The Loop
if ( $query->have_posts() ) {
	while ( $query->have_posts() ) {
		$query->the_post();
                    echo '<a href="';
                        if ( strstr( get_the_title(), 'http'  ) ) {
                            echo get_the_title() . '">';
                        } else {
                            echo 'http://www.';  
                            echo get_the_title() . '">';
                        }
                    echo '<img src="' . $thumbnail . '"></a>';
	}
} else {
    echo 'No sites found that can be emulated! Please check in your Emulations post type to see if they exist.';
}

// Restore original Post Data
wp_reset_postdata();
   
}


/* NOTES:
 * 
 * Featured Image not working FIX FIRST!!!!
 * Adding a custom field was an absolute bitch, using title instead
 * 
 */



  ?>
       <!-- <form name="userWebsiteForm" action="" method="post">
            <label>Please type in your website WITHOUT "http://www."<br>For example: <code>website.com</code></label>
            <input type="text" name="userWebsiteURL">
            <input type="submit" value="submit">
        </form>
        <?php /*
        $user_website = 'http://www.' . $_POST['userWebsiteURL'];
    echo $user_website;
    */?> 
<!--    <div class="container">
			
			<div class="full-screen">
                                <iframe src="<?php// if ($user_website != null) { echo $user_website; }?>"></iframe>
			</div>
			
			<div class="tablet-screen">
				<iframe src="<?php// if ($user_website != null) { echo $user_website; }?>"></iframe>
			</div>
			
			<div class="mobile-screen">
				<iframe src="<?php// if ($user_website != null) { echo $user_website; }?>"></iframe>
			</div>
        <div class="sticky-footer">
            
        </div>-->
    <?php
    