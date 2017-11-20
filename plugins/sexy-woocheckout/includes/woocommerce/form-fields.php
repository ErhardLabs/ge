<?php

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// CUSTOM FORM FIELDS & PLACEHOLDERS

add_filter( 'woocommerce_ship_to_different_address_checked', '__return_false' );

add_filter( 'woocommerce_checkout_fields' , 'sexy_woocheckout_custom_override_checkout_fields' );

// Our hooked in function - $fields is passed via the filter!
function sexy_woocheckout_custom_override_checkout_fields( $fields ) {

  unset($fields['billing']);
  unset($fields['shipping']);

  $fields['billing']['billing_first_name'] = array(
      'placeholder'   => _x('First Name', 'placeholder', 'woocommerce'),
      'label'					=> __('First Name', 'woocommerce'),
      'priority'		=> 10
  );
  $fields['billing']['billing_last_name'] = array(
      'placeholder'   => _x('Last Name', 'placeholder', 'woocommerce'),
      'label'					=> __('Last Name', 'woocommerce'),
      'priority'		=> 20
  );
  $fields['billing']['billing_email'] = array(
      'placeholder'   => _x('Email', 'placeholder', 'woocommerce'),
      'label'					=> __('Email', 'woocommerce'),
      'priority'		=> 30
  );
  $fields['billing']['billing_address_1'] = array(
      'placeholder'   => _x('Address 1', 'placeholder', 'woocommerce'),
      'label'					=> __('Address 1', 'woocommerce'),
      'priority'		=> 40
  );
  $fields['billing']['billing_address_2'] = array(
      'placeholder'   => _x('Address 2', 'placeholder', 'woocommerce'),
      'label'					=> __('Address 2', 'woocommerce'),
      'priority'		=> 50
  );
  $fields['billing']['billing_city'] = array(
      'type'			=> 'text',
      'placeholder'   => _x('City', 'placeholder', 'woocommerce'),
      'label'					=> __('City', 'woocommerce'),
      'priority'		=> 60
  );
  $fields['billing']['billing_state'] = array(
      'placeholder'   => _x('State', 'placeholder', 'woocommerce'),
      'label'					=> __('State', 'woocommerce'),
      'type'   => 'state',
      'priority'		=> 70
  );
  $fields['billing']['billing_postcode'] = array(
      'type'			=> 'text',
      'placeholder'   => _x('Zip', 'placeholder', 'woocommerce'),
      'label'					=> __('Zip', 'woocommerce'),
      'priority'		=> 75
  );
  $fields['billing']['billing_country'] = array(
      'type'			=> 'country',
      'placeholder'   => _x('Country', 'placeholder', 'woocommerce'),
      'label'					=> __('Country', 'woocommerce'),
      'priority'		=> 90
  );
  $fields['billing']['billing_phone'] = array(
      'placeholder'   => _x('Phone', 'placeholder', 'woocommerce'),
      'label'					=> __('Phone', 'woocommerce'),
      'required'  => false,
      'class'     => array('form-row-wide'),
      'clear'     => true,
      'priority'	=> 95
  );



  ///////////////////////// SHIPPING //////////////////////////////////
  $fields['shipping']['shipping_first_name'] = array(
      'placeholder'   => _x('First Name', 'placeholder', 'woocommerce'),
      'label'					=> __('First Name', 'woocommerce'),
      'priority' 		=> 10
  );
  $fields['shipping']['shipping_last_name'] = array(
      'placeholder'   => _x('Last Name', 'placeholder', 'woocommerce'),
      'label'					=> __('Last Name', 'woocommerce'),
      'priority' 		=> 20
  );
  $fields['shipping']['shipping_address_1'] = array(
      'placeholder'   => _x('Address 1', 'placeholder', 'woocommerce'),
      'label'					=> __('Address 1', 'woocommerce'),
      'priority' 		=> 30
  );
  $fields['shipping']['shipping_address_2'] = array(
      'placeholder'   => _x('Address 2', 'placeholder', 'woocommerce'),
      'label'					=> __('Address 2', 'woocommerce'),
      'priority' 		=> 40
  );
  $fields['shipping']['shipping_city'] = array(
      'type'			=> 'text',
      'placeholder'   => _x('City', 'placeholder', 'woocommerce'),
      'label'					=> __('City', 'woocommerce'),
      'priority'     => 50
  );
  $fields['shipping']['shipping_state'] = array(
      'type'			=> 'state',
      'placeholder'   => _x('State', 'placeholder', 'woocommerce'),
      'priority'     => 60
  );
  $fields['shipping']['shipping_postcode'] = array(
      'type'			=> 'text',
      'placeholder'   => _x('Zip', 'placeholder', 'woocommerce'),
      'label'					=> __('Zip', 'woocommerce'),
      'priority'     => 70
  );
  $fields['shipping']['shipping_country'] = array(
      'type'			=> 'country',
      'placeholder'   => _x('Country', 'placeholder', 'woocommerce'),
      'label'					=> __('Country', 'woocommerce'),
      'priority' 		=> 90
  );
  $fields['shipping']['shipping_phone'] = array(
      'placeholder'   => _x('Phone', 'placeholder', 'woocommerce'),
      'label'					=> __('Phone', 'woocommerce'),
      'required'  => false,
      'class'     => array('form-row-wide'),
      'clear'     => true,
      'priority'	=> 95
  );




  unset($fields['order']['order_comments']);

  $fields = sexy_patricks_billing_fields( $fields );

  return $fields;
}





function sexy_patricks_billing_fields( $fields ) {
  global $woocommerce;

  // if the total is more than 0 then we still need the fields
  if ( 0 != $woocommerce->cart->total ) {
    return $fields;
  }

  // return the regular billing fields if we need shipping fields
  if ( $woocommerce->cart->needs_shipping() ) {
    return $fields;
  }

  // we don't need the billing fields so empty all of them except the email
  unset( $fields['billing']['billing_country'] );
  //  unset( $fields['billing']['billing_first_name'] );
  //  unset( $fields['billing']['billing_last_name'] );
  unset( $fields['billing']['billing_company'] );
  unset( $fields['billing']['billing_address_1'] );
  unset( $fields['billing']['billing_address_2'] );
  unset( $fields['billing']['billing_city'] );
  unset( $fields['billing']['billing_state'] );
  unset( $fields['billing']['billing_postcode'] );
  unset( $fields['billing']['billing_phone'] );



  return $fields;
}







// WooCommerce Checkout Fields Hook
add_filter('woocommerce_checkout_fields','sexy_woocheckout_wc_checkout_fields_no_label');

// Our hooked in function - $fields is passed via the filter!
// Action: remove label from $fields
function sexy_woocheckout_wc_checkout_fields_no_label($fields) {
  // loop by category
  foreach ($fields as $category => $value) {
    // loop by fields
    foreach ($fields[$category] as $field => $property) {
      // remove label property
      unset($fields[$category][$field]['label']);
    }
  }
  return $fields;
}