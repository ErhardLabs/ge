<?php

/*
Plugin Name: jQuery UI Accordion FAQ Plugin TEST
Description: Creates FAQ's with custom post type and jQuery accordions
Version: 0.1
Author: Copper Leaf Creative, Grayson Erhard
License: GPLv2
*/

/*
This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; version 2 of the License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

// Make sure we don't expose any info if called directly
if ( ! function_exists( 'add_action' ) ) {
	_e( "Hi! Just a plugin, nothing to see here!" );
	exit;
}


if ( ! is_admin() ) {
	add_action('init', 'bt_accordion_faqs_public');
}

function bt_accordion_faqs_public() {       
	// jQuery
		wp_register_script( 'jquery', ( "http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" ), false, '1', false); 
		wp_enqueue_script( 'jquery' );
                wp_enqueue_script( 'jquery-ui-accordion' );
                wp_enqueue_script( 'jquery-ui-core' );
                wp_deregister_style('jquery-ui-standard');
      }

 
if ( ! is_admin() ) {
	add_action('init', 'jquiw_initializor');
}
function jquiw_initializor() {
		echo "<script type=\"stylesheet\">\r\n";
		echo wp_enqueue_script( 'jquery-ui-accordion' )."\r\n";
		echo "</script>\r\n";
}


// Hook for adding admin menus
add_action('admin_menu','bt_accordion_faqs_add_pages');
// action function for above hook
function bt_accordion_faqs_add_pages() {
  // add new submenu under the main post type
    add_submenu_page(
            'edit.php?post_type=clc_faqs_post_type',
            'FAQ Settings',
            'Settings',
            'manage_options',
            'BTAccordionFAQSettings',
            'bt_accordion_faqs_settings_page'
            );
}


// Hook into the admin head action
add_action( 'admin_head', 'add_menu_icons_styles' );
// Add custom icon to custom post type
function add_menu_icons_styles() {
?>
<style>
    #adminmenu .menu-icon-events div.wp-menu-image:before {
         content: "\f128"; }
</style>
<?php
}


// Hook into the 'init' action
add_action( 'init', 'bt_accordion_faqs_custom_post_type', 0 );
// Register Custom Post Type
function bt_accordion_faqs_custom_post_type() {

	$labels = array(
		'name'                => _x( 'FAQs', 'Post Type General Name', 'text_domain' ),
		'singular_name'       => _x( 'FAQ', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'           => __( 'FAQs', 'text_domain' ),
		'parent_item_colon'   => __( 'Parent Item:', 'text_domain' ),
		'all_items'           => __( 'All Items', 'text_domain' ),
		'view_item'           => __( 'View Item', 'text_domain' ),
		'add_new_item'        => __( 'Add New FAQ', 'text_domain' ),
		'add_new'             => __( 'Add New', 'text_domain' ),
		'edit_item'           => __( 'Edit Item', 'text_domain' ),
		'update_item'         => __( 'Update Item', 'text_domain' ),
		'search_items'        => __( 'Search Item', 'text_domain' ),
		'not_found'           => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'  => __( 'Not found in Trash', 'text_domain' ),
                
	);
	$args = array(
		'labels'              => $labels,
		'supports'            => array( ),
		'taxonomies'          => array( 'faqs_categories' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => 5,
		'menu_icon'           => 'dashicons-format-status',
		'can_export'          => true,
		'has_archive'         => true,
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'capability_type'     => 'page',
	);
	register_post_type( 'clc_faqs_post_type', $args );
}


// Hook into the 'init' action
add_action( 'init', 'custom_taxonomy', 0 );
// Register Custom Taxonomy
function custom_taxonomy() {

	$labels = array(
		'name'                       => _x( 'FAQ Categories', 'Taxonomy General Name', 'text_domain' ),
		'singular_name'              => _x( 'FAQ Category', 'Taxonomy Singular Name', 'text_domain' ),
		'menu_name'                  => __( 'FAQ Categories', 'text_domain' ),
		'all_items'                  => __( 'All Items', 'text_domain' ),
		'parent_item'                => __( 'Parent Item', 'text_domain' ),
		'parent_item_colon'          => __( 'Parent Item:', 'text_domain' ),
		'new_item_name'              => __( 'New Item Name', 'text_domain' ),
		'add_new_item'               => __( 'Add New Item', 'text_domain' ),
		'edit_item'                  => __( 'Edit Item', 'text_domain' ),
		'update_item'                => __( 'Update Item', 'text_domain' ),
		'separate_items_with_commas' => __( 'Separate items with commas', 'text_domain' ),
		'search_items'               => __( 'Search Items', 'text_domain' ),
		'add_or_remove_items'        => __( 'Add or remove items', 'text_domain' ),
		'choose_from_most_used'      => __( 'Choose from the most used items', 'text_domain' ),
		'not_found'                  => __( 'Not Found', 'text_domain' ),
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => false,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
	);
	register_taxonomy( 'faqs_categories', 'clc_faqs_post_type', $args );
}


// Displays the page content for the Test settings submenu
function bt_accordion_faqs_settings_page() {

    $opt_name = 'bt_accordion_faqs_jquery';
	$opt_name2 = 'bt_accordion_faqs_url';

    $hidden_field_name = 'bt_accordion_faqs_submit_hidden';
    $data_field_name = 'bt_accordion_faqs_jquery';
	$data_field_name2 = 'bt_accordion_faqs_url';

    // Read in existing option value from database
    $opt_val = get_option( $opt_name );
    stripslashes($opt_val);
	$opt_val2 = get_option( $opt_name2 );

    // See if the user has posted us some information
    // If they did, this hidden field will be set to 'Y'
    if( isset($_POST[ $hidden_field_name ]) && $_POST[ $hidden_field_name ] == 'Y' ) {
        // Read their posted value
        $opt_val = $_POST[ $data_field_name ];
		$opt_val2 = $_POST[ $data_field_name2 ];

        // Save the posted value in the database
        update_option( $opt_name, $opt_val );
		update_option( $opt_name2, $opt_val2 );

        // Put an settings updated message on the screen
?>
<div class="updated"><p><strong><?php _e('settings saved.', 'accordion-faqs-menu' ); ?></strong></p></div>
<?php 

    }

    // Now display the settings editing screen
    echo '<div class="wrap">';

    // header
    echo "<h2>" . __( 'FAQs', 'accordion-faqs-menu' ) . "</h2>";

    // settings form
    $jquery_slashes = 'jQuery(document).ready(function($) { jQuery( "#accordion" ).accordion(); });';
    $jquery_snippet = stripslashes($jquery_slashes);
?>

<form name="form1" method="post" action="">
<input type="hidden" name="<?php echo $hidden_field_name; ?>" value="Y">
<br>
<label style="cursor: default !important;">jQuery Code:</label>
<p><?php _e("", 'accordion-faqs-menu' ); ?> 
<textarea rows="14" style="width: 750px;" name="<?php echo $opt_name ?>"><?php if (empty($opt_val)) { echo $jquery_snippet;} else { echo stripslashes($opt_val);}?></textarea><br>
    <br><span style="font-style:italic;">Add custom jQuery code above, e.g. <code>$( "#accordion" ).accordion();</code> and it will be added automatically to your site.<br>
        Don't forget to add your jQuery inside the proper wrapper e.g. <code>jQuery(document).ready(function($) { // Add jQuery code here... });</code></span><br>
&nbsp;<br>
<?php _e("Custom User Interface Theme File:", 'accordion-faqs-menu' ); ?> 
<input type="text" style="width: 500px; margin-left: 40px;" name="<?php echo $opt_name2 ?>" value="<?php echo $opt_val2 ?>" size="40"><br>
&nbsp;<br> <span style="font-style:italic;">Create a <a href="http://jqueryui.com/themeroller/" target="_blank">custom theme</a> to override the standard theme. Upload to <code><?php echo dirname(__FILE__); ?></code><br>
    and enter the path/name of the custom stylesheet above, relative to this folder.</span>
</p><hr />

<p class="submit">
<input type="submit" name="Submit" class="button-primary" value="<?php esc_attr_e('Save Changes') ?>" />
</p>
</form>
    <br><br>
            <hr>
            <br><br>
    <form name="uninstall_form" method="post" action="/wp-content/plugins/jqueryUI-Accordion-FAQs/uninstall.php">
        <input type="submit" name="UNINSTALL" id="uninstall" value="<?php esc_attr_e('UNINSTALL') ?>" style="background:red; border-radius: 5px; color: white; cursor: pointer;"/>
        <span>This button permanently deletes all of your data in the database and erases the files from your <code>/wp-content/plugins</code> directory.  Proceed with caution.</span>
    </form>
<?php }  



/* Register style sheet. */
if ( ! is_admin() ) {
	add_action('init', 'bt_accordion_faqs_themes');
}       
function bt_accordion_faqs_themes() {
    $custom_css = get_option('bt_accordion_faqs_url');
    $base = dirname(__FILE__);
    $jquery_standard_theme_file = plugin_dir_url(__FILE__).'jquery-ui-classic.css';
    $jquery_custom_theme_file = plugin_dir_url(__FILE__).$custom_css;
    $custom_css_new = $base.'/'.$custom_css; 
    
    if (!file_exists($custom_css_new) ) {
        wp_enqueue_style ( 'jquery-ui-theme-standard', $jquery_standard_theme_file );
    } else {
        wp_enqueue_style ( 'jquery-ui-theme-custom', $jquery_custom_theme_file );    
    }
}


// Add Shortcode
add_shortcode('bt_accordion_faqs', 'bt_accordion_faqs_form');
// Shortcode function:	
function bt_accordion_faqs_form( $atts ) { 
    global $wpdb;
    extract(shortcode_atts(array(
        'id' => '',
        'cat' => '',
    ), $atts, 'bt_accordion_faqs'));   

if ( $id == null && $cat == null) {
    $args = array(	
    'post_type' => 'clc_faqs_post_type',
    'order' => 'ASC',     
    'posts_per_page' => 90
    );  
} else {
    
$args = array(
    'tax_query' => array(
        'relation' => 'OR',
        array(
                'taxonomy' => 'faqs_categories',
                'field' => 'slug',
                'terms' => $cat,
            ),
        array(
                'taxonomy' => 'faqs_categories',
                'field' => 'id',
                'terms' => $id,
        )
        ),		
    'post_type' => 'clc_faqs_post_type',
    'posts_per_page' => 90,
    
    );


}

// THERE IS A BUG WITH THE NUMBER OF POSTS_PER_PAGE, 0 WASN'T WORKING SO YOU HAVE TO INSERT THE AMOUNT OF POSTS YOU WANT MANUALLY

$custom_css = get_option('bt_accordion_faqs_url');
    $base = dirname(__FILE__);
    $jquery_standard_theme_file = plugin_dir_url(__FILE__).'jquery-ui-classic.css';
    $jquery_custom_theme_file = plugin_dir_url(__FILE__).$custom_css;
    $custom_css_new = $base.'/'.$custom_css; 
    
//     echo $custom_css;


$bt_accordion_faqs = new WP_Query( $args );

    $output = '<div class="accordion_wrap"><div id="accordion">';
        while( $bt_accordion_faqs->have_posts() ): $bt_accordion_faqs->the_post();
        $output .= '<h3 style="display: block;"><a>' . get_the_title() . '</a></h3><div>' . get_the_content() . '</div>';
        endwhile; // end loop
    $output .= "</div>" . "</div>";
    
    return $output;


}



// Hook into footer
add_action('wp_footer','bt_accordion_jQuery_in_header');
// strip slashes for <head>
function bt_accordion_jQuery_in_header() {
    $custom_javascript = get_option('bt_accordion_faqs_jquery');
         echo '<script type="text/javascript">';
            echo stripslashes($custom_javascript);
         echo '</script>';    
}