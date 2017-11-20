<?php

// CSS VARIABLES
include('vars.php');

/* ///////////////////////////////


Primary styles for the input boxes


////////////////////////////////*/

echo "
#slider input {
  border-bottom: solid 1px #ECA76F !important;
  -webkit-transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1) !important;
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1) !important;
  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 96%, #ECA76F 4%) !important;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #ECA76F 4%) !important;
  background-position: -400px 0 !important;
  background-size: 400px 100% !important;
  background-repeat: no-repeat !important;
  color: white !important;
  font-weight: 200;
}


#slider input:focus {
box-shadow: none !important;
outline: none !important;
background-position: 0 0 !important;
}

/* ///////////////////////////////


Animate the placeholders on focus


////////////////////////////////*/

/*input::-webkit-input-placeholder {*/
/*-webkit-transition: all 0.3s ease-in-out !important;*/
/*transition: all 0.3s ease-in-out !important;*/
/*}*/

#slider input[type=text]:focus::-webkit-input-placeholder {
font-size: 11px !important;
-webkit-transform: translateY(-10px) !important;
transform: translateY(-10px) !important;
visibility: visible !important;
color: white !important;
}

#slider input[type=text]::-webkit-input-placeholder {
font-family: 'roboto', sans-serif;
-webkit-transition: all 0.3s ease-in-out !important;
transition: all 0.3s ease-in-out !important;
}

#slider .form-row:focus {
background: white !important;
}

#slider .woocommerce .cart-collaterals .cart_totals, .woocommerce-page .cart-collaterals .cart_totals {
width: 100%;
}

/*
#slider .shop_table tr.cart-subtotal,
#slider .shop_table tr.order-total,
#slider .woocommerce-checkout-review-order-table tr.cart-subtotal,
#slider .woocommerce-checkout-review-order-table tr.order-total{
position: relative;
left: 22px;
}
*/

#slider .cart_totals .shop_table .woocommerce-Price-amount {
text-align: right;
font-size: 20px;
}

#slider .cart_totals .shop_table tr:not(:last-child){
/*#slider .woocommerce-checkout-review-order-table tr:not(:last-child) {*/
display: none;
}

#slider .checkout .shop_table,
#slider .woocommerce-checkout-review-order-table,
#slider .cart_totals {
background: rgba(34,32,32,1);
width: 100%;
margin: 0 auto;
padding: 5px 0px 0px 0px !important;
bottom: 60px;
}

#slider .woocommerce #payment #place_order,
#slider .woocommerce-page #payment #place_order {
margin-bottom: 0 !important;
}














#slider #loading {
width: 100%;
position:fixed;
height: 100vh;
background: rgba(0,0,0,.95);
z-index: 3;
display: none;
margin-left: -15px;
margin-top: -15px;
}

#slider #loading img {
width: 100px;
text-align: center;
display: block;
margin: 0 auto;
margin-top: 50%;
}

#slider #sexy-woo-messages {
display: block !important;
position: fixed;
top: 0;
z-index: 2;
right: 0;
width: 85%;
background: transparent;
margin-top: 0px;
}

#slider #sexy-woo-messages .woocommerce-error,
#slider #sexy-woo-messages .woocommerce .woocommerce-message,
#slider #sexy-woo-messages .woocommerce-message li,
#slider #sexy-woo-messages .woocommerce-error li
{
background: transparent !important;
border: none;
color: #fefefe;
font-size: 12px;
padding: 5px 10px 5px 30px !important;
margin-bottom: 0px;
letter-spacing: 1px;
text-shadow: none !important;
}

#slider #sexy-woo-messages .woocommerce-error::before,
#slider #sexy-woo-messages .woocommerce-message::before,
#slider #sexy-woo-messages .woocommerce-message li::before,
#slider #sexy-woo-messages .woocommerce-error li::before {
/*content: '\e016';*/
/*color: #b81c23;*/
font-size: 24px;
margin-left: -20px;
margin-top: -21px;
background: transparent !important;
}

#slider #sexy-woo-messages .woocommerce-message::before,
#slider #sexy-woo-messages .woocommerce-message li::before {
margin-left: -60px;
margin-top: -28px;
background: transparent !important;
}


#slider .woocommerce .woocommerce-message:before,
#slider .woocommerce-page .woocommerce-message:before {
background: transparent !important;
}

#slider .woocommerce-error li,
#slider .woocommerce-info li,
#slider .woocommerce-message li {
margin-top: 3px;
}





/* //////////////////////////////////////////////////////////////// CART STYLE START */

#slider .woocommerce .cart-collaterals,
#slider .woocommerce-page .cart-collaterals {
width: 100%;
background: rgba(255,255,255,.05);
position: absolute;
margin-left: -15px;
padding: 15px 25px;
}

#slider .return-to-shop {
display: none;
}

#slider #sexy-woo-cart {
padding-bottom: 650px;
}

#slider #sexy-woo-checkout {
padding-bottom: 200px;
}

#slider .woocommerce table.shop_table {
border: none !important;
padding: 0px;
}

#slider .woocommerce .cart_totals .shop_table,
#slider .woocommerce-checkout-review-order-table {
width: 75%;
margin: 0 auto;
display:block;
bottom: 60px;
}

#slider .woocommerce .cart_totals table.shop_table_responsive tr,
#slider .woocommerce-checkout-review-order-table tr {
width: 100%;
float: none;
clear: both;
height: 40px;
font-size: 12px;
display: block;
}

#slider tbody {
border: none;
}

#slider .woocommerce table.shop_table td {
border: none;
}

#slider .product-subtotal {
display: none !important;
}

#slider .woocommerce #content table.cart .product-thumbnail,
#slider .woocommerce table.cart .product-thumbnail,
#slider .woocommerce-page #content table.cart .product-thumbnail,
#slider .woocommerce-page table.cart .product-thumbnail,
#slider table.cart td {
display: block;
}

#slider .woocommerce table.shop_table_responsive tr td::before,
#slider .woocommerce-page table.shop_table_responsive tr td::before {
/* 	content: attr(data-title) ""; */
content: "";
text-transform: uppercase;
}

#slider .cart_totals tbody,
#slider .woocommerce-checkout-review-order-table tfoot {
display:block;
}

#slider .woocommerce table.shop_table_responsive tbody th,
#slider .woocommerce-checkout-review-order-table th {
display: block;
}

#slider .cart_totals .shop_table tbody tr th,
#slider .woocommerce-checkout-review-order-table tr th {
float: left;
width: 50%;
font-size: 20px;
}

#slider .woocommerce .cart_totals table.shop_table td,
#slider .woocommerce .woocommerce-checkout-review-order-table td {
width: 50%;
float: left;
text-align:right;
}

#slider .woocommerce .woocommerce-checkout-review-order-table .woocommerce-Price-amount {
margin-top: 3px;
font-size: 20px;
}

#slider .cart_plus,
#slider .checkout_plus {
font-size: 30px;
display: block;
bottom: 58px;
width: 100%;
position: fixed;
/*position: absolute;*/
/* text-align: center; */
right: 50%;
left: 50%;
z-index: 2;
margin-left: -15px;
}
#slider .checkout_plus {
/*bottom: 5px;*/
}

#slider .quantity::before {
content: "QTY";
margin-right: 5px;
}

#slider tr.cart_item {
line-height: 2.7;
clear: both;
height: 125px;
font-size: 12px;
/*   border-top: 1px solid rgba(255,255,255,.3); */
display: block;
border-radius: 2%;
margin: 15px 0px;
}

#slider .product-quantity {
clear: right;
float: right;
}

#slider .product-quantity input {
float: right;
margin: 0px !important;
height: 15px;
width: 40px;
padding: 15px 0px !important;
text-align: center;
}

#slider .woocommerce-mini-cart__buttons {
position: absolute;
bottom: 0px;
width: 100%;
display: flex;
padding: 0px 20px;
left: 0;
}

#slider .woocommerce #content table.cart td.actions .coupon,
#slider .woocommerce table.cart td.actions .coupon,
#slider .woocommerce-page #content table.cart td.actions .coupon,
#slider .woocommerce-page table.cart td.actions .coupon {
float: none;
}

#slider .woocommerce input.input-text.qty.text,
#slider .woocommerce table.cart td.actions .coupon .input-text {
float: left;
padding: 8px 10px !important;
}


#slider .woocommerce-mini-cart__buttons a {
width: 100%;
text-align: center;
margin: 5px;
}

#slider .woocommerce-mini-cart__buttons a:first-of-type {
display: none;
}

#slider .total {
width: 100%;
position: absolute;
left: 0;
bottom: 50px;
padding: 20px;
display: block;
overflow: auto;
}

#slider .mini_cart_item {
width: 100%;
}

#slider .mini_cart_item a {
float: left;
width: 100%;
}

#slider .product-remove {
width: 20px;
float: left;
margin-right: 10px;
}

#slider .product-thumbnail a img {
float: left;
width: 20%;
margin-right: 10px;
padding: 0px 0px 10px;
}

#slider .woocommerce table.shop_table td {
padding: 0px;
}

#slider .mini_cart_item .quantity .woocommerce-Price-amount {
width: 50%;
}


#slider #woocommerce_products-2 .widget-wrap h4 {
margin-top: 0px;
}

#slider .woocommerce ul.product_list_widget li a {
margin: 0;
}

#slider .cart_list.product_list_widget {
height: 60vh;
overflow-y: scroll;
padding: 10px;
}

#slider .added_to_cart {
display: none !important;
}

#slider #sexy-woo-checkout h4, #slider #sexy-woo-cart h4 {
text-align: center;
}

#slider .woocommerce thead {
display: none;
}

#slider .woocommerce .cart-collaterals .cart_totals,
#slider .woocommerce-page .cart-collaterals .cart_totals {
float: none;
position: fixed;
bottom: 0;
box-shadow: 0px 0px 12px rgba(0,0,0,.3);
background: rgba(34,32,32,1);
margin-left: -15px;
right: 0;
z-index: 1;
}

#slider .cart_totals h2 {
display: none;
}

#slider .wc-proceed-to-checkout a {
width: 100%;
text-align: center;
padding: 15px;
}

#slider .cart-subtotal td,
#slider .order-total td {
float: left;
/*     margin-left: -23px; */
}

#slider .shop_table tbody tr th {
width: 50%;
}

#slider .cross-sells {
width: 100%;
}


#slider .totals_wrap {
display: none;
}

#slider .woocommerce .cart-collaterals .cross-sells ul.products li,
#slider .woocommerce-page .cart-collaterals .cross-sells ul.products li {
width: 100%;
margin: 0 auto;
text-align: center;
}

#slider .border_top {
border-top: 1px solid rgba(255,255,255,.3) !important;
}

#slider .product-name,
#slider .product-price {
text-align: right;
font-family: sans-serif;
letter-spacing: 1px;
}

#slider .product-name {
font-weight: bold;
}
/* //////////////////////////////////////////////////////////////// CART STYLE END */





/* //////////////////////////////////////////////////////////////// CHECKOUT STYLE START */

#slider .totals_wrap tr th,
#slider .totals_wrap tr td span {
font-size: 12px !important;
}

#billing_first_name_field, #billing_last_name_field, #shipping_first_name_field, #shipping_last_name_field {
width: 50%;
float: left;
}

#slider #billing_address_1_field,
#slider #billing_address_2_field,
#slider #billing_city_field,
#slider #shipping_address_1_field,
#slider #shipping_address_2_field,
#slider #shipping_city_field {
width: 50%;
float: left;
}

#slider #billing_state_field,
#slider #billing_postcode_field,
#slider #shipping_state_field,
#slider #shipping_postcode_field {
width: 25%;
float: left;
}

#slider #shipping_country_field, #slider #billing_country_field {
width: 100%;
}

#slider input[name='update_cart'],
#slider .woocommerce-page table.cart td.actions input[name='update_cart'] {
display: none !important;
}

#slider .checkout_coupon {
display: block !important;
}

#slider .woocommerce-cart-form__contents .coupon {
display: none;
}

#slider .woocommerce-info {
height: 60px;
}

#slider #order_review_heading {
display: none;
}

#slider .woocommerce-checkout-review-order-table tbody {
display: none;
}

#slider #add_payment_method #payment,
#slider .woocommerce-cart #payment,
#slider .woocommerce-checkout #payment,
#slider div.payment_box,
#slider ul.payment_methods,
#slider div.form-row {
background: transparent !important;
}

#slider .woocommerce-checkout-review-order-table {
position: fixed;
background: black;
z-index: 1;
margin-left: -15px;
right: 0;
box-shadow: 0px 0px 12px rgba(0,0,0,.3);
}

#slider tfoot {
width:75%;
margin: 0 auto;
}

#slider .woocommerce-checkout-review-order-table td {
float: right;
width: 50%;
text-align:right;
}

#slider .woocommerce #payment #place_order,
#slider .woocommerce-page #payment #place_order {
position: fixed;
margin-bottom: 1em;
bottom: 0;
width: 100%;
right: 0;
z-index: 1;
}

#slider .woocommerce form.checkout_coupon {
padding: 10px;
}

#slider .woocommerce-shipping-fields {
width: 100%;
background: rgba(255,255,255,.05);
/* position: absolute; */
/* margin-left: -25px; */
padding: 15px 5px;
margin: 50px 0px;
}

#slider .woocommerce-billing-fields {
font-size: 24px !important;
text-transform: uppercase !important;
padding: 60px 0px 20px 0px;
}

#slider select {
border-bottom: solid 1px #ECA76F !important;
}

#slider #billing_email_field,
#slider #shipping_email_field {
margin-bottom: 50px;
}

#slider select {
height: 43px;
font-size: 16px;
font-weight: 200;
font-family: "Helvetica Neue";
text-transform: none;
color: #fff !important;
background: transparent !important;
}

#slider #billing_state,
#slider #billing_country,
#slider #shipping_state,
#slider #shipping_country {

}

#slider .woocommerce-shipping-fields #ship-to-different-address {
height: 50px;
}

#slider #ship-to-different-address-checkbox {
width: 25%;
float: left;
height: 25px;
margin-top: 5px;
}

#slider .woocommerce-shipping-fields .woocommerce-form__label-for-checkbox span {
width: 75%;
float: left;
clear: right;
font-size: 16px;
line-height: 1.5;
text-align: left;
letter-spacing: 3px;
}

#slider #payment input[type=radio],
#slider #payment input[type=checkbox] {
float: left;
margin-top: 5px;
}

#slider .payment_method_paypal label {
margin-top: -12px;
display: block;
}

#slider input[type=submit],
#slider .checkout-button {
background: #ECA76F!important;
color: black !important;
font-weight: bold !important;
font-size: 16px !important;
padding: 22px;
border: none!important;
}

#slider .checkout-button {
border: none !important;
}

#slider .woocommerce table.shop_table th {
padding: 0 !important;
}


#slider .cart_totals .woocommerce-Price-amount,
#slider .woocommerce-checkout-review-order-table .woocommerce-Price-amount {
display:inline-block;
width: auto;
}

#slider .product-price .woocommerce-Price-amount {
text-align: right;
}

#slider .woocommerce-checkout-review-order-table th {
padding: 0px !important;
font-size:20px;
}

#slider .checkout_coupon .button {
font-size: 10px !important;
margin-top: px;
width: 100%;
padding: 17px 5px !important;
}

#slider .woocommerce-remove-coupon {
color: salmon;
}

#slider input:-webkit-autofill,
#slider textarea:-webkit-autofill,
#slider select:-webkit-autofill {
background: transparent !important;
color: black !important;
}

#slider .wc-terms-and-conditions {
/*display: none;*/
}

#slider .wc-credit-card-form.wc-payment-form .form-row-wide {
width: 60%;
float: left;
}

#slider .wc-credit-card-form.wc-payment-form .form-row-first {
width: 25%;
float: left;
}


#slider .wc-credit-card-form.wc-payment-form .form-row-last {
width: 15%;
float: left;
}

#slider .wc-credit-card-form.wc-payment-form label {
display: none;
}

#slider .wc-credit-card-form-card-cvc {
width: 100% !important;
}

#slider #add_payment_method #payment ul.payment_methods,
#slider .woocommerce-cart #payment ul.payment_methods,
#slider .woocommerce-checkout #payment ul.payment_methods {
border-bottom: none;
}

#slider .woocommerce-checkout-payment {
margin-top: 30px;
}

#slider #add_payment_method #payment div.payment_box .wc-credit-card-form-card-cvc,
#slider #add_payment_method #payment div.payment_box .wc-credit-card-form-card-expiry,
#slider #add_payment_method #payment div.payment_box .wc-credit-card-form-card-number,
#slider .woocommerce-cart #payment div.payment_box .wc-credit-card-form-card-cvc,
#slider .woocommerce-cart #payment div.payment_box .wc-credit-card-form-card-expiry,
#slider .woocommerce-cart #payment div.payment_box .wc-credit-card-form-card-number,
#slider .woocommerce-checkout #payment div.payment_box .wc-credit-card-form-card-cvc,
#slider .woocommerce-checkout #payment div.payment_box .wc-credit-card-form-card-expiry,
#slider .woocommerce-checkout #payment div.payment_box .wc-credit-card-form-card-number {
font-size: 1em;
}

#slider .woocommerce .col2-set .col-2,
#slider .woocommerce-page .col2-set .col-2 {
width: 100%;
}

#slider #add_payment_method #payment ul.payment_methods,
#slider .woocommerce-cart #payment ul.payment_methods,
#slider .woocommerce-checkout #payment ul.payment_methods {
padding: 5px;
}

#slider .woocommerce #payment #place_order,
#slider .wc-proceed-to-checkout
{
height: 60px;
}

#slider .woocommerce table.shop_table th,
#slider .woocommerce-page table.shop_table th {
line-height: inherit;
}

#slider #payment ul.payment_methods li {
margin: 25px 0px;
}
/* //////////////////////////////////////////////////////////////// CHECKOUT STYLE END */


#slider #sexy-woo-cart,
#slider #sexy-woo-checkout {
margin-top: 40px;
}


@media only screen and (min-width: 768px){

/*#slider #sexy-woo-checkout {*/
/*width: 60%;*/
/*float: right;*/
/*}*/

#slider .checkout .shop_table, #slider .woocommerce-checkout-review-order-table,
#slider .woocommerce #payment #place_order {
width: 40% !important;
}

#slider .checkout #customer_details .col-2 {
margin:0 auto;
float: none;
}

/*#slider #sexy-woo-checkout {*/
/*padding-left: 10px;*/
/*border-left: solid 1px #ECA76F;*/
/*background: rgba(0,0,0,.2);*/
/*}*/

#slider tfoot {
width:75%;
margin: 0 auto;
}

#slider.checkout-active .cross-sells {
width: 100% !important;
}

#slider .cart_plus,
#slider .checkout_plus {
display: flex;
width: 40%;
position: fixed;
justify-content: center;
right: 0;
left: auto;
z-index: 2;
}

#slider #sexy-woo-messages {
width: 30%;
margin-top: 5px;
}

#slider #loading img {
width: 40%;
display: block;
position: fixed;
top: 20%;
padding: 200px;
margin-top: 0;
}

#slider .checkout-button {
margin-left: -5px;
}

}






@media (min-width: 768px) {
#slider .woocommerce .cart-collaterals .cart_totals,
.woocommerce-page .cart-collaterals .cart_totals {
width: 40%;
}

}


@media (min-width: 1024px) {}
";