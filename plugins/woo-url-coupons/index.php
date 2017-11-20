<?php
/*
Plugin Name: Woo URL Coupons
Plugin URI:
Description: Adds a product and applys a coupon to cart from a URL via GET variables.
Version: 1.0
Author: Grayson Erhard
Author URI: https://graysonerhard.com
License: GPLv2 or later
Text Domain: woo-url-coupons
*/

// EXAMPLE URL: https://graysonerhard.com/promo/?pid=1346&code=ge-test-coupon

function ged_woo_url_coupons() {

  global $woocommerce;

  $productID = (isset($_GET['pid'])) ? $_GET['pid'] : false;
  $couponCode = (isset($_GET['code'])) ? $_GET['code'] : false;

  if ($productID && $couponCode) {
    $woocommerce->cart->empty_cart();

    ged_add_product_to_cart($productID);
    ged_apply_matched_coupons($couponCode);

    wp_redirect( $woocommerce->cart->get_checkout_url(), '301' );

  }



}
add_shortcode( 'woo_url_coupons', 'ged_woo_url_coupons' );


function ged_add_product_to_cart($productID) {
  if ( ! is_admin() ) {
    $found = false;
    //check if product already in cart
    if ( sizeof( WC()->cart->get_cart() ) > 0 ) {
      foreach ( WC()->cart->get_cart() as $cart_item_key => $values ) {
        $_product = $values['data'];
        if ( $_product->id == $productID )
          $found = true;
      }
      // if product not found, add it
      if ( ! $found )
        WC()->cart->add_to_cart( $productID );
    } else {
      // if no products in cart, add it
      WC()->cart->add_to_cart( $productID );
    }
  }
}


function ged_apply_matched_coupons($couponCode) {

  global $woocommerce;

  if ( $woocommerce->cart->cart_contents_count > 0 ) {
    $woocommerce->cart->add_discount($couponCode);
  }

}

// hide coupon field on checkout page
function ged_hide_coupon_field_on_checkout( $enabled ) {
	
	global $woocommerce;
	
	if ((!empty($woocommerce->cart->applied_coupons)) && (is_checkout())) {
		
		/* Change woocommerce "place order" text */
		add_filter( 'woocommerce_order_button_text', 'ged_woo_custom_order_button_text', 10 ); 
		//Change the Billing Details checkout label to Your Details
		add_filter( 'gettext', 'ged_wc_billing_field_strings', 20, 3 );
		
		// DISABLE AJAX FROM UPDATING 'PLACE ORDER' TEXT
		?>
		<script type='text/javascript'>
			jQuery(document.body).on('update_checkout', function(e){
			    e.stopImmediatePropagation();
			});
		</script>
		<?php
		
	  return false;
	  
	} else {
		
		return true;
		
	}
	
}
add_filter( 'woocommerce_coupons_enabled', 'ged_hide_coupon_field_on_checkout' );



function ged_woo_custom_order_button_text() {
  return __( 'Claim your free item', 'woocommerce' ); 
}


//Change the Billing Details checkout label to Your Details
function ged_wc_billing_field_strings( $translated_text, $text, $domain ) {
	
// 	echo $translated_text;
	
	switch ( $translated_text ) {
		case 'Billing details' :
		$translated_text = __( 'Please fill out your info below to receive your free items!', 'woocommerce' );
		break;
	}
		return $translated_text;
}


// jQuery(window).load(function() {
/*
 jQuery('#place_order').attr('value', 'Start Subscription');
});
*/