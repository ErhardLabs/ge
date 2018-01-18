<?php
//* Start the engine
include_once( get_template_directory() . '/lib/init.php' );

//* Child theme (do not remove)
define( 'CHILD_THEME_NAME', 'Pretty Creative Theme' );
define( 'CHILD_THEME_URL', 'http://my.studiopress.com/themes/pretty-creative/' );
define( 'CHILD_THEME_VERSION', '1.0.0' );

//* Enqueue Google Fonts
add_action( 'wp_enqueue_scripts', 'genesis_sample_google_fonts' );
function genesis_sample_google_fonts() {
	wp_enqueue_style( 'dashicons' );
	wp_enqueue_style( 'google-fonts', '//fonts.googleapis.com/css?family=Open+Sans:400,300', array(), CHILD_THEME_VERSION );
	wp_enqueue_script( 'sticky-nav', get_bloginfo( 'stylesheet_directory' ) . '/js/sticky-nav.js', array( 'jquery', 'font-awesome' ), '', true );
	wp_enqueue_script( 'prettycreative-responsive-menu', get_stylesheet_directory_uri() . '/js/responsive-menu.js', array( 'jquery', 'font-awesome' ), '1.0.0', true );
	wp_enqueue_script( 'font-awesome', 'https://use.fontawesome.com/2412d65cf4.js', array(), '', true );

}

add_action('genesis_footer', 'custom_script');
function custom_script() {
    wp_register_script ('grayson', get_bloginfo( 'stylesheet_directory' ) . '/js/grayson.js', array( 'jquery', 'font-awesome' ),'1.0.1',true);
  wp_enqueue_script( 'song-kick', get_bloginfo( 'stylesheet_directory' ) . '/js/widget.js', array(), '', true );
  wp_enqueue_script('autosize', get_bloginfo( 'stylesheet_directory' )  . '/lib/js/autosize.min.js', array('jquery'), false, true);
  wp_enqueue_script('sumner-js', get_bloginfo( 'stylesheet_directory' )  . '/js/sumner.js', array('jquery'), false, true);
	wp_enqueue_script( 'grayson');
}

add_action( 'wp_enqueue_scripts', 'custom_style' );
function custom_style() {
	//wp_enqueue_style( 'grayson', get_bloginfo( 'stylesheet_directory' ) . '/grayson.css', array('woocommerce-layout', 'woocommerce-smallscreen', 'woocommerce-general'), CHILD_THEME_VERSION );
  wp_enqueue_style( 'last-style', get_bloginfo( 'stylesheet_directory' ) . '/last-style.css', false, CHILD_THEME_VERSION );
  wp_enqueue_style( 'sumner-style', get_bloginfo( 'stylesheet_directory' ) . '/sumner-style.css', false, CHILD_THEME_VERSION );

}

//* Add HTML5 markup structure
add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );

//* Add viewport meta tag for mobile browsers
add_theme_support( 'genesis-responsive-viewport' );

//* Add Accent color to customizer
require_once( get_stylesheet_directory() . '/lib/customize.php' );

//* Add support for custom header
add_theme_support( 'custom-header', array(
	'width'           => 300,
	'height'          => 300,
	'header-selector' => '.site-title a',
	'header-text'     => false,
) );

//* Add support for 2-column footer widgets
add_theme_support( 'genesis-footer-widgets', 2);

//* Register Image Sizes
add_image_size( 'portfolio', 800, 800, true );
add_image_size( 'featuredposts', 600, 350, true );
add_image_size( 'sidebar-featured', 360, 250, true );
add_image_size( 'sidebar-featured', 800, 533, true );
add_image_size( 'home-page-featured', 800, 800, true );

//* Remove comment form allowed tags
add_filter( 'comment_form_defaults', 'prettycreative_remove_comment_form_allowed_tags' );
function prettycreative_remove_comment_form_allowed_tags( $defaults ) {

	$defaults['comment_notes_after'] = '';
	return $defaults;

}

/* Add support for after entry widget */
add_theme_support( 'genesis-after-entry-widget-area' );

//* Footer credits
add_filter('genesis_footer_creds_text', 'prettycreative_footer_creds_filter');
function prettycreative_footer_creds_filter( $creds ) {

	$creds = '[footer_copyright] &middot; Pretty Creative WordPress Theme by, <a href="http://prettydarncute.com">Pretty Darn Cute Design</a>';
	return $creds;

}

//* Modify the size of the Gravatar in the entry comments
add_filter( 'genesis_comment_list_args', 'prettycreative_comments_gravatar' );
function prettycreative_comments_gravatar( $args ) {

	$args['avatar_size'] = 120;
	return $args;

}

//* Modify the size of the Gravatar in the author box
add_filter( 'genesis_author_box_gravatar_size', 'prettycreative_author_box_gravatar' );
function prettycreative_author_box_gravatar( $size ) {

	return 120;

}

//* Reposition the primary navigation menu
remove_action( 'genesis_after_header', 'genesis_do_nav' );
add_action( 'genesis_before_header', 'genesis_do_nav' );

//* Add Support for Woo Commerce
add_theme_support( 'genesis-connect-woocommerce' );
add_action( 'after_setup_theme', 'woocommerce_support' );
function woocommerce_support() {
    add_theme_support( 'woocommerce' );
}

//* Customize the entry meta
add_filter( 'genesis_post_info', 'prettycreative_post_info_filter' );
function prettycreative_post_info_filter($post_info) {
	$post_info = '[post_date] by [post_author_posts_link] [post_comments] [post_edit]';
	return $post_info;
}

//* Add Author Box Widget
add_filter( 'genesis_author_box', 'prettycreative_author_box', 10, 6 );
function prettycreative_author_box( $output, $context, $pattern, $gravatar, $title, $description ) {
	if ( is_active_sidebar( 'author-box-custom' ) ) {
		ob_start();
		genesis_widget_area( 'author-box-custom', array( 'before' => '<div class="author-box-custom">', 'after' => '</div>', ) );
		$description .= ob_get_contents();
		ob_end_clean();
	}
	$output = sprintf( $pattern, $gravatar, $title, $description );
	return $output;
}

//* Add Support for Comment Numbering
add_action ( 'genesis_before_comment', 'prettycreative_numbered_comments' );
function prettycreative_numbered_comments () {

    if (function_exists( 'gtcn_comment_numbering' ))
    echo gtcn_comment_numbering($comment->comment_ID, $args);

}

//* Modify the length of post excerpts
add_filter( 'excerpt_length', 'prettycreative_excerpt_length' );
function prettycreative_excerpt_length( $length ) {

	return 70; 

}

//* Genesis Previous/Next Post Post Navigation 
add_action( 'genesis_before_comments', 'prettycreative_prev_next_post_nav' );
 
function prettycreative_prev_next_post_nav() {
  
	if ( is_single() ) {
 
		echo '<div class="prev-next-navigation">';
		previous_post_link( '<div class="previous">%link</div>', '%title' );
		next_post_link( '<div class="next">%link</div>', '%title' );
		echo '</div><!-- .prev-next-navigation -->';
	}
}

//* Add Read More Link for Custom Excerpts
function excerpt_read_more_link($output) {
	global $post;
	return $output . '<a href="'. get_permalink($post->ID) . '"> <div class="readmorelink"><div class="rmtext">[ Read More ]</div></div></a>';
}
add_filter('the_excerpt', 'excerpt_read_more_link');

add_filter('excerpt_more','__return_false');

//* Reposition the secondary navigation menu
remove_action( 'genesis_after_header', 'genesis_do_subnav' );
add_action( 'genesis_before_footer', 'genesis_do_subnav' );

//* Reduce the secondary navigation menu to one level depth
add_filter( 'wp_nav_menu_args', 'prettycreative_secondary_menu_args' );
function prettycreative_secondary_menu_args( $args ){

	if( 'secondary' != $args['theme_location'] )
	return $args;

	$args['depth'] = 1;
	return $args;
}
 
//* Subscribe Widget
add_action( 'genesis_before_header', 'custom_subscribe_widget' );
function custom_subscribe_widget() {
	genesis_widget_area( 'subscribewidget', array(
'before' => '<div class=subscribe-widget widget-area">',
'after' => '</div>',
) );
}

add_action('genesis_before_home-page-4_widget_area', 'ge_home_page_4');

function ge_home_page_4() {
  echo '<div class="shows">
          <h1>SHOWS</h1>';
    echo '<div class="songkick-data">';      

echo '<a href="http://www.songkick.com/artists/4403183" class="songkick-widget" data-theme="light" data-detect-style="true" data-background-color="transparent"></a>
<script src="//widget.songkick.com/widget.js"></script>';
    echo '</div>';
  echo '</div>';
}


/*
add_action('genesis_before_home-page-4_widget_area', 'ge_home_page_5');

function ge_home_page_5() {
    echo do_shortcode( '[gravityform id="1" title="false" description="false" ajax="true"]' );
}
*/


//Position Widget's before footer on ALL PAGES
//add_action('genesis_before_footer', 'social_links');
function social_links()  {
  if (!is_home()) {
    genesis_widget_area( 'before-footer', array(
        'before' => '<div id="home-page-5" class="home-page-5"><div class="widget-area ' . prettycreative_widget_area_class( 'home-page-5' ) . '"><div class="wrap">',
        'after'  => '</div></div></div>',
    ) );
  }
}





//* Remove post meta
remove_action( 'genesis_entry_footer', 'genesis_post_meta' );

//* Woocommerce products per page
add_filter( 'loop_shop_per_page', create_function( '$cols', 'return 24;' ), 20 );

//* Customize search form input box text
add_filter( 'genesis_search_text', 'prettycreative_search_text' );
function prettycreative_search_text( $text ) {

	return esc_attr( 'search' );

}

//* Unregister header right widget area
unregister_sidebar( 'header-right' );

//* Setup widget counts
function prettycreative_count_widgets( $id ) {
	global $sidebars_widgets;

	if ( isset( $sidebars_widgets[ $id ] ) ) {
		return count( $sidebars_widgets[ $id ] );
	}

}

function prettycreative_widget_area_class( $id ) {
	$count = prettycreative_count_widgets( $id );

	$class = '';

	if( $count == 1 || $count < 9 ) {

		$classes = array(
			'zero',
			'one',
			'two',
			'three',
			'four',
			'five',
			'six',
			'seven',
			'eight',
		);

		$class = $classes[ $count ] . '-widget';
		$class = $count == 1 ? $class : $class . 's';

		return $class;

	} else {

		$class = 'widget-thirds';
		
		return $class;

	}

}

//* Navigation Search and Social Icons
add_filter( 'genesis_search_button_text', 'prettycreative_search_button_text' );
function prettycreative_search_button_text( $text ) {

	return esc_attr( '&#xf179;' );

}
add_filter( 'genesis_nav_items', 'prettycreative_social_icons', 10, 2 );
add_filter( 'wp_nav_menu_items', 'prettycreative_social_icons', 10, 2 );

function prettycreative_social_icons($menu, $args) {
	$args = (array)$args;
	if ( 'primary' !== $args['theme_location'] )
		return $menu;
	ob_start();
	genesis_widget_area('nav-widget-area');
	$social = ob_get_clean();
	return $menu . $social;
}

/**
 * Default Category Title
 *
 * @author Bill Erickson
 * @url http://www.billerickson.net/default-category-and-tag-titles
 *
 * @param string $headline
 * @param object $term
 * @return string $headline
 */
function be_default_category_title( $headline, $term ) {
	if( ( is_category() || is_tag() || is_tax() ) && empty( $headline ) )
		$headline = $term->name;
		
	return $headline;
}
add_filter( 'genesis_term_meta_headline', 'be_default_category_title', 10, 2 );

/**
 * Image sanitization callback example.
 *
 * Checks the image's file extension and mime type against a whitelist. If they're allowed,
 * send back the filename, otherwise, return the setting default.
 *
 * - Sanitization: image file extension
 * - Control: text, WP_Customize_Image_Control
 *
 * @see wp_check_filetype() https://developer.wordpress.org/reference/functions/wp_check_filetype/
 *
 * @param string               $image   Image filename.
 * @param WP_Customize_Setting $setting Setting instance.
 * @return string The image filename if the extension is allowed; otherwise, the setting default.
 */
function theme_slug_sanitize_image( $image, $setting ) {
	/*
	 * Array of valid image file types.
	 *
	 * The array includes image mime types that are included in wp_get_mime_types()
	 */
	$mimes = array(
		'jpg|jpeg|jpe' => 'image/jpeg',
		'gif'          => 'image/gif',
		'png'          => 'image/png',
		'bmp'          => 'image/bmp',
		'tif|tiff'     => 'image/tiff',
		'ico'          => 'image/x-icon'
	);
	// Return an array with file extension and mime_type.
	$file = wp_check_filetype( $image, $mimes );
	// If $image has a valid mime_type, return it; otherwise, return the default.
	return ( $file['ext'] ? $image : $setting->default );
}

/**
 * Theme Options Customizer Implementation.
 *
 * @link http://ottopress.com/2012/how-to-leverage-the-theme-customizer-in-your-own-themes/
 *
 * @param WP_Customize_Manager $wp_customize Object that holds the customizer data.
 */
function pc_register_theme_customizer( $wp_customize ){

	/*
	 * Failsafe is safe
	 */
	if ( ! isset( $wp_customize ) ) {
		return;
	}

	/**
	 * Add 'Home Top' Section.
	 */
	$wp_customize->add_section(
		// $id
		'pc_section_home_top',
		// $args
		array(
			'title'			=> __( 'Home Top', 'theme-slug' ),
			// 'description'	=> __( 'Some description for the options in the Home Top section', 'theme-slug' ),
		)
	);

	/**
	 * Add 'Home Top Background Image' Setting.
	 */
	$wp_customize->add_setting(
		// $id
		'pc_home_top_background_image',
		// $args
		array(
			'default'		=> get_stylesheet_directory_uri() . '/images/bg-home.jpg',
			'sanitize_callback'	=> 'theme_slug_sanitize_image',
			'transport'		=> 'postMessage'
		)
	);

	/**
	 * Add 'Home Top Background Image' image upload Control.
	 */
	$wp_customize->add_control(
		new WP_Customize_Image_Control(
			// $wp_customize object
			$wp_customize,
			// $id
			'pc_home_top_background_image',
			// $args
			array(
				'settings'		=> 'pc_home_top_background_image',
				'section'		=> 'pc_section_home_top',
				'label'			=> __( 'Home Top Background Image', 'theme-slug' ),
				'description'	=> __( 'Select the image to be used for Home Top Background.', 'theme-slug' )
			)
		)
	);

}

// Settings API options initilization and validation.
add_action( 'customize_register', 'pc_register_theme_customizer' );

/**
 * Writes the Home Top background image out to the 'head' element of the document
 * by reading the value from the theme mod value in the options table.
 */
function pc_customizer_css() {
?>
	 <style type="text/css">
		<?php if ( 0 < count( strlen( ( $home_top_background_image_url = get_theme_mod( 'pc_home_top_background_image' ) ) ) ) ) { ?>
			.home-top {
				background-image: url( <?php echo $home_top_background_image_url; ?> );
			}
		<?php } // end if ?>
	 </style>
<?php
} // end pc_customizer_css
add_action( 'wp_head', 'pc_customizer_css');
/**
 * Registers the Theme Customizer Preview with WordPress.
 *
 * @package    pc
 * @since      0.3.0
 * @version    0.3.0
 */
function pc_customizer_live_preview() {
	wp_enqueue_script(
		'pc-theme-customizer',
		get_stylesheet_directory_uri() . '/js/theme-customizer.js',
		array( 'customize-preview' ),
		'0.1.0',
		true
	);
} // end pc_customizer_live_preview
add_action( 'customize_preview_init', 'pc_customizer_live_preview' );

//* Register widget areas
genesis_register_sidebar( array(
	'id'          => 'home-subscribe-widget',
	'name'        => __( 'Home Subscribe Widget', 'prettycreative' ),
	'description' => __( 'This is the full width subscription widget on the home page', 'prettycreative' ),
) );
genesis_register_sidebar( array(
	'id'          => 'home-top',
	'name'        => __( 'Full Width Image', 'prettycreative' ),
	'description' => __( 'This is the full width image area on your home page.', 'prettycreative' ),
) );
genesis_register_sidebar( array(
	'id'          => 'home-page-1',
	'name'        => __( 'Home Page 1', 'prettycreative' ),
	'description' => __( 'This is the Home Page 1 Widget.', 'prettycreative' ),
) );
genesis_register_sidebar( array(
	'id'          => 'home-page-2',
	'name'        => __( 'Home Page 2', 'prettycreative' ),
	'description' => __( 'This is the Home Page 2 Widget.', 'prettycreative' ),
) );
genesis_register_sidebar( array(
	'id'          => 'home-page-3',
	'name'        => __( 'Home Page 3', 'prettycreative' ),
	'description' => __( 'This is the Home Page 3 Widget.', 'prettycreative' ),
) );
genesis_register_sidebar( array(
	'id'          => 'home-page-4',
	'name'        => __( 'Home Page 4', 'prettycreative' ),
	'description' => __( 'This is the Home Page 4 Widget.', 'prettycreative' ),
) );
genesis_register_sidebar( array(
	'id'          => 'home-page-5',
	'name'        => __( 'Home Page 5', 'prettycreative' ),
	'description' => __( 'This is the Home Page 5 Widget.', 'prettycreative' ),
) );

genesis_register_sidebar( array(
	'id'          => 'home-portfolio-widget',
	'name'        => __( 'Home Portfolio Widget', 'prettycreative' ),
	'description' => __( 'This is the portfolio widget on your home page.', 'prettycreative' ),
) );
genesis_register_sidebar( array(
	'id'          => 'nav-widget-area',
	'name'        => __( 'Nav Widget Area', 'prettycreative' ),
	'description' => __( 'This widget appears in your navigation bar.', 'prettycreative' ),
) );
genesis_register_sidebar( array(
	'id'          => 'author-box-custom',
	'name'        => __( 'Author Box Widget', 'prettycreative' ),
	'description' => __( 'This is the Author Box Custom widget', 'prettycreative' ),
) );
genesis_register_sidebar( array(
	'id'          => 'portfolioblurb',
	'name'        => __( 'Portfolio Archive Page Widget', 'prettycreative' ),
	'description' => __( 'This widget appears above your portfolio items on your portfolio archive page.', 'prettycreative' ),
) );
genesis_register_sidebar( array(
	'id'          => 'before-footer',
	'name'        => __( 'Before Footer', 'prettycreative' ),
	'description' => __( 'This is the widget before the footer.', 'prettycreative' ),
) );

add_filter( 'gform_enable_field_label_visibility_settings', '__return_true' );

add_filter( 'gform_submit_button_11', 'form_submit_button', 10, 2 );
function form_submit_button( $button, $form ) {
    return "<button class='gform_button button cta' id='gform_submit_button_{$form['id']}'><span>Subscribe</span></button>";
}

// Removes showing results

remove_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );

//Remove Woocommerce SKU's
//add_filter( 'wc_product_sku_enabled', '__return_false' );

// Remove Woocommerce Tabs from single product page
remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_product_data_tabs', 10 );

// Remove Upsells From Their Default Position

remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_upsell_display', 15 );



/**
 * Open a preview e-mail.
 * Make sure to use the dropdown and edit the URL variables afterwards
 * https://example.org/wp-admin/admin-ajax.php?action=previewemail&file=emails/customer-processing-order.php&order=180
 * @return null
 */
function previewEmail() {

  if (is_admin()) {
    $default_path = WC()->plugin_path() . '/templates/';

    $files = scandir($default_path . 'emails');
    $exclude = array( '.', '..', 'email-header.php', 'email-footer.php','plain' );
    $list = array_diff($files,$exclude);
    ?><form method="get" action="<?php echo site_url(); ?>/wp-admin/admin-ajax.php">
    <input type="hidden" name="order" value="2055">
    <input type="hidden" name="action" value="previewemail">
    <select name="file">
      <?php
      foreach( $list as $item ){ ?>
        <option value="<?php echo $item; ?>"><?php echo str_replace('.php', '', $item); ?></option>
      <?php } ?>
    </select><input type="submit" value="Go"></form><?php
    global $order;
    $order = new WC_Order($_GET['order']);
    wc_get_template( 'emails/email-header.php', array( 'order' => $order ) );


    wc_get_template( 'emails/'.$_GET['file'], array( 'order' => $order ) );
    wc_get_template( 'emails/email-footer.php', array( 'order' => $order ) );

  }
  return null;
}

add_action('wp_ajax_previewemail', 'previewEmail');

add_filter('genesis_attr_nav-primary', 'add_nav_class');

function add_nav_class( $attributes ) {
    $attributes['class'] .= ' nav-down';
    return $attributes;
}






add_action('woocommerce_before_shop_loop', 'ge_add_custom_links_to_store_page', 10);
function ge_add_custom_links_to_store_page() {
    ?>
      <div class="custom_shop_links">
        <a href="/products/music">MUSIC</a>
        <a href="/products/tabs">TABS</a>
        <a href="/products/merch">MERCH</a>
      </div>
    <?php
}