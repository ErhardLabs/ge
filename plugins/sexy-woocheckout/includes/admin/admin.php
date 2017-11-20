<?php

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}

class WC_Sexy_WooCheckout_Settings_Tab {

  /**
   * Bootstraps the class and hooks required actions & filters.
   *
   */
  public static function init() {
    add_filter( 'woocommerce_settings_tabs_array', __CLASS__ . '::add_settings_tab', 50 );
    add_action( 'woocommerce_settings_tabs_sexy_woocheckout', __CLASS__ . '::settings_tab' );
    add_action( 'woocommerce_update_options_sexy_woocheckout', __CLASS__ . '::update_settings' );
  }


  /**
   * Add a new settings tab to the WooCommerce settings tabs array.
   *
   * @param array $settings_tabs Array of WooCommerce setting tabs & their labels, excluding the Subscription tab.
   * @return array $settings_tabs Array of WooCommerce setting tabs & their labels, including the Subscription tab.
   */
  public static function add_settings_tab( $settings_tabs ) {
    $settings_tabs['sexy_woocheckout'] = __( 'Sexy WooCheckout', 'woocommerce-sexy-woocheckout' );
    return $settings_tabs;
  }


  /**
   * Uses the WooCommerce admin fields API to output settings via the @see woocommerce_admin_fields() function.
   *
   * @uses woocommerce_admin_fields()
   * @uses self::get_settings()
   */
  public static function settings_tab() {
    woocommerce_admin_fields( self::get_settings() );
  }


  /**
   * Uses the WooCommerce options API to save settings via the @see woocommerce_update_options() function.
   *
   * @uses woocommerce_update_options()
   * @uses self::get_settings()
   */
  public static function update_settings() {
    woocommerce_update_options( self::get_settings() );
  }


  /**
   * Get all the settings for this plugin for @see woocommerce_admin_fields() function.
   *
   * @return array Array of settings for @see woocommerce_admin_fields() function.
   */
  public static function get_settings() {

    $settings = array(
        'section_title' => array(
            'name'     => __( 'Sexy WooCheckout', 'woocommerce-sexy-woocheckout' ),
            'type'     => 'title',
            'desc'     => '',
            'id'       => 'wc_sexy_woocheckout_section_title'
        ),
//        'description' => array(
//            'name' => __( 'Description', 'woocommerce-sexy-woocheckout' ),
//            'type' => 'textarea',
//            'desc' => __( 'This is a paragraph describing the setting. Lorem ipsum yadda yadda yadda. Lorem ipsum yadda yadda yadda. Lorem ipsum yadda yadda yadda. Lorem ipsum yadda yadda yadda.', 'woocommerce-sexy-woocheckout' ),
//            'id'   => 'wc_sexy_woocheckout_description'
//        ),
        'enabled' => array(
            'title'   => __( 'Enabled', 'woocommerce-sexy-woocheckout' ),
            'type'    => 'checkbox',
            'id'   => 'wc_sexy_woocheckout_enabled',
            'default' => 'yes'
        ),
        'show_related_products' => array(
            'title'   => __( 'Show related products in cart', 'woocommerce-sexy-woocheckout' ),
            'type'    => 'checkbox',
            'id'   => 'wc_sexy_woocheckout_show_related_products',
            'default' => 'yes'
        ),
        'dark_theme' => array(
            'title'   => __( 'Dark theme', 'woocommerce-sexy-woocheckout' ),
            'type'    => 'checkbox',
            'id'   => 'wc_sexy_woocheckout_dark_theme'
        ),
        'slide_out_screen_px' => array(
            'title'   => __( 'Desktop slide out screen pixel amount', 'woocommerce-sexy-woocheckout' ),
            'type'    => 'text',
            'id'   => 'wc_sexy_woocheckout_slide_out_screen_perc',
            'default' => '420'
        ),
        'link_color' => array(
            'title'   => __( 'Link color', 'woocommerce-sexy-woocheckout' ),
            'type'    => 'text',
            'id'   => 'wc_sexy_woocheckout_link_color'
        ),
        'text_color' => array(
            'title'   => __( 'Text color', 'woocommerce-sexy-woocheckout' ),
            'type'    => 'text',
            'id'   => 'wc_sexy_woocheckout_text_color'
        ),
        'button_color' => array(
            'title'   => __( 'Button color', 'woocommerce-sexy-woocheckout' ),
            'type'    => 'text',
            'id'   => 'wc_sexy_woocheckout_button_color'
        ),
        'cart_icon_class' => array(
            'title'       => __( 'Cart Icon Class', 'woocommerce-sexy-woocheckout' ),
            'type'        => 'text',
            'desc' => __( 'The class associated with the cart icon that will trigger Sexy WooCheckout', 'woocommerce-sexy-woocheckout' ),
            'desc_tip'    => true,
            'id'   => 'wc_sexy_woocheckout_cart_icon_class'
        ),
        'section_end' => array(
            'type' => 'sectionend',
            'id' => 'wc_sexy_woocheckout_section_end'
        )
    );

    return apply_filters( 'wc_settings_tab_demo', $settings );

  }

}

WC_Sexy_WooCheckout_Settings_Tab::init();