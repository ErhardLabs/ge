<?php
/**
 * Thankyou page
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/thankyou.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     3.2.0
 */

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}
?>

<div class="woocommerce-order">

  <?php if ( $order ) : ?>

    <?php if ( $order->has_status( 'failed' ) ) : ?>

      <p class="woocommerce-notice woocommerce-notice--error woocommerce-thankyou-order-failed"><?php _e( 'Unfortunately your order cannot be processed as the originating bank/merchant has declined your transaction. Please attempt your purchase again.', 'woocommerce' ); ?></p>

      <p class="woocommerce-notice woocommerce-notice--error woocommerce-thankyou-order-failed-actions">
        <a href="<?php echo esc_url( $order->get_checkout_payment_url() ); ?>" class="button pay"><?php _e( 'Pay', 'woocommerce' ) ?></a>
        <?php if ( is_user_logged_in() ) : ?>
          <a href="<?php echo esc_url( wc_get_page_permalink( 'myaccount' ) ); ?>" class="button pay"><?php _e( 'My account', 'woocommerce' ); ?></a>
        <?php endif; ?>
      </p>

    <?php else : ?>

      <?php echo '<div class="background_image" style="background-image: url(/wp-content/uploads/sites/14/2016/10/Grayson-Erhard-Colorado-Guitarist-and-Singer-Songwriter-Hair.jpg);"></div>'; ?>

      <h1 class="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received"><?php echo apply_filters( 'woocommerce_thankyou_order_received_text', __( 'Thank you', 'woocommerce' ), $order ); ?></h1>

    <?php endif; ?>

    <?php do_action( 'woocommerce_thankyou_' . $order->get_payment_method(), $order->get_id() ); ?>
    <?php do_action( 'woocommerce_thankyou', $order->get_id() ); ?>

  <?php else : ?>

    <p class="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received"><?php echo apply_filters( 'woocommerce_thankyou_order_received_text', __( 'Thank you. Your order has been received.', 'woocommerce' ), null ); ?></p>

  <?php endif; ?>
    <div class="thankyou-continue">
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
        <a href="/shop">Continue Shopping</a>
    </div>
    <hr>
    <div class="stay-connected">
        <h1>Stay Connected</h1>
        <div class="thankyou-icons">
            <a href="https://www.facebook.com/GraysonErhardMusic/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/grayson_erhard/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="https://www.youtube.com/user/GraysnE"><i class="fa fa-youtube" aria-hidden="true"></i></a>
            <a href="https://twitter.com/GraysonErhard"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            <a href="https://open.spotify.com/artist/7MkVirJ8M6XVDBLrHZLPMd"><i class="fa fa-spotify" aria-hidden="true"></i></a>
        </div>
    </div>
</div>
