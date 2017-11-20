<?php
	/*
	Plugin Name: Testimonials Wordpress plugin
	Plugin URI: http://codecanyon.net/user/husamrayan
	Description: Testimonials Wordpress plugin.
	Version: 1.3
	Author: husamrayan
	*/
	
	


	/*==========================================================================
		enqueue
	==========================================================================*/

	function tmls_theme_enqueue() {
		wp_register_style( 'tmls-testimonials', plugins_url('css/testimonials.css', __FILE__) );
		wp_enqueue_style( 'tmls-testimonials' );
		
		wp_enqueue_script('jquery');
		
		wp_register_script( 'tmls_ba_throttle_debounce', plugins_url('js/helper-plugins/jquery.ba-throttle-debounce.min.js', __FILE__) );
		wp_enqueue_script( 'tmls_ba_throttle_debounce' );
		
		wp_register_script( 'tmls_mousewheel', plugins_url('js/helper-plugins/jquery.mousewheel.min.js', __FILE__) );
		wp_enqueue_script( 'tmls_mousewheel' );
		
		wp_register_script( 'tmls_touchSwipe', plugins_url('js/helper-plugins/jquery.touchSwipe.min.js', __FILE__) );
		wp_enqueue_script( 'tmls_touchSwipe' );
		
		wp_register_script( 'tmls_transit', plugins_url('js/helper-plugins/jquery.transit.min.js', __FILE__) );
		wp_enqueue_script( 'tmls_transit' );
		
		wp_register_script( 'tmls-carouFredSel', plugins_url('js/jquery.carouFredSel-6.2.1.js', __FILE__) );
		wp_enqueue_script( 'tmls-carouFredSel' );
		
		wp_register_script( 'tmls-testimonials-js', plugins_url('js/testimonials.js', __FILE__) );
		wp_enqueue_script( 'tmls-testimonials-js' );
	}
	
	add_action( 'wp_enqueue_scripts', 'tmls_theme_enqueue' );
	
	function tmls_admin_enqueue() {
		
		wp_register_style( 'tmls-testimonials', plugins_url('css/testimonials.css', __FILE__) );
		wp_enqueue_style( 'tmls-testimonials' );
		
		wp_register_style( 'tmls-generate-shortcode-style', plugins_url('css/generate_shortcode.css', __FILE__) );
		wp_enqueue_style( 'tmls-generate-shortcode-style' );
		
		wp_register_script( 'tmls_ba_throttle_debounce', plugins_url('js/helper-plugins/jquery.ba-throttle-debounce.min.js', __FILE__) );
		wp_enqueue_script( 'tmls_ba_throttle_debounce' );
		
		wp_register_script( 'tmls_mousewheel', plugins_url('js/helper-plugins/jquery.mousewheel.min.js', __FILE__) );
		wp_enqueue_script( 'tmls_mousewheel' );
		
		wp_register_script( 'tmls_touchSwipe', plugins_url('js/helper-plugins/jquery.touchSwipe.min.js', __FILE__) );
		wp_enqueue_script( 'tmls_touchSwipe' );
		
		wp_register_script( 'tmls_transit', plugins_url('js/helper-plugins/jquery.transit.min.js', __FILE__) );
		wp_enqueue_script( 'tmls_transit' );
		
		wp_register_script( 'tmls-carouFredSel', plugins_url('js/jquery.carouFredSel-6.2.1.js', __FILE__) );
		wp_enqueue_script( 'tmls-carouFredSel' );
		
		wp_register_script( 'tmls-generate-shortcode', plugins_url('js/generate_shortcode.js', __FILE__) );
		wp_enqueue_script( 'tmls-generate-shortcode' );
		
		global $wp_version;
		
		 //If the WordPress version is greater than or equal to 3.5, then load the new WordPress color picker.
		if ($wp_version >= 3.5){
			//Both the necessary css and javascript have been registered already by WordPress, so all we have to do is load them with their handle.
			wp_enqueue_style( 'wp-color-picker' );
			wp_enqueue_script( 'wp-color-picker' );

		}
		//If the WordPress version is less than 3.5 load the older farbtasic color picker.
		else {
			//As with wp-color-picker the necessary css and javascript have been registered already by WordPress, so all we have to do is load them with their handle.
			wp_enqueue_style( 'farbtastic' );
			wp_enqueue_script( 'farbtastic' );
		}
		
		
	}
	
	add_action( 'admin_enqueue_scripts', 'tmls_admin_enqueue' );
	
	
	/*==========================================================================
		Testimonial custom post type
	============================================================================*/
	
	include('inc/testimonial_custom_post.php');
	
	
	/*==========================================================================
		Shortcode
	============================================================================*/
	
	include('inc/shortcode.php');
	
	/*==========================================================================
		Generate Shortcode Page
	============================================================================*/
	
	add_action('admin_menu', 'tmls_register_my_custom_submenu_page');

	function tmls_register_my_custom_submenu_page() {
		add_submenu_page( 'edit.php?post_type=tmls', 'Generate shortcode', 'Generate shortcode', 'manage_options', 'tmls_generate_shortcode', 'tmls_generate_shortcode_callback' ); 
	}

	function tmls_generate_shortcode_callback() {
		
		include('inc/generate_shortcode/generate_shortcode.php');

	}
	
	/*==========================================================================
		Shortcode Widget
	============================================================================*/
	
	include('inc/widget.php');
	
?>