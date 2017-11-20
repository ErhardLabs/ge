<?php

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}

add_action('get_footer', 'sexy_woocheckout_display_slider_widget');
function sexy_woocheckout_display_slider_widget() {

?>
<div id="slider" class="slider">
  <section id="close_slider" class="widget widget_text">
    <div class="textwidget">
      <a href="#/" class="close" data-wpel-link="internal"><i class="fa fa-times-circle fa-2x"></i></a>
    </div>
  </section>

  <section id="sexy-woo-messages" class="widget widget_text">
    <div class="textwidget"></div>
  </section>

  <section id="loading">
    <img src="<?php echo SEXY_WOOCHECKOUT_URL . '/assets/img/loading.gif';?>"/>
  </section>

  <?php dynamic_sidebar('slider'); ?>
  <section id="sexy-woo-cart">
    <h4>CART</h4>
    <div id="sexy-woo-cart-container">
      <?php echo do_shortcode('[woocommerce_cart]'); ?>
    </div>
    <a href="#" class="cart_plus plus_btn"><span>+</span></a>
  </section>
  <section id="sexy-woo-checkout">
    <h4>CHECKOUT</h4>
    <?php echo do_shortcode('[woocommerce_checkout]'); ?>
    <?php // echo do_shortcode('[woocommerce_one_page_checkout]'); ?>


    <a href="#" class="checkout_plus plus_btn"><span>+</span></a>
  </section>

</div>
<?php
}