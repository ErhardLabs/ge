<?php
/**
 * Plugin Name: WooCommerce Remove Billing Fields for Free Virtual Products
 * Plugin URI: https://gist.github.com/BFTrick/7873168
 * Description: Remove the billing address fields for free virtual orders
 * Author: Patrick Rauland
 * Author URI: http://patrickrauland.com/
 * Version: 2.0
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @author    	Patrick Rauland
 * @since		1.0
 */

function patricks_billing_fields( $fields ) {
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
add_filter( 'woocommerce_billing_fields', 'patricks_billing_fields', 20 );


// That's all folks!
