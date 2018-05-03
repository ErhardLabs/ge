<?php

function product_music( $num_products ) {

  $slider_num = 1;

  $args = array(
    'post_type' => 'product',
    'stock' => 1,
    'posts_per_page' => $num_products,
    'orderby' => 'date',
    'order' => 'DESC',
    'product_cat' => 'music',
    'post_status' => 'publish'
  );

  $loop = new WP_Query( $args );

  while ( $loop->have_posts() ) {

    $loop->the_post();

    $_product = new WC_Product( get_the_ID() );

    get_slider_left( $loop, $args, $slider_num );

    get_slider_right( $loop, $args, $_product );

  }
  wp_reset_query();
}

function product_tabs( $num_products ) {

  $slider_num = 2;

  $meta_query  = WC()->query->get_meta_query();
  $tax_query   = WC()->query->get_tax_query();
  $tax_query[] = array(
      'taxonomy' => 'product_visibility',
      'field'    => 'name',
      'terms'    => 'featured',
      'operator' => 'IN',
  );

  $args = array(
      'post_type'           => 'product',
      'post_status'         => 'publish',
      'ignore_sticky_posts' => 1,
      'product_cat' => 'tabs',
      'stock'       =>  1,
      'showposts'   =>  $num_products,
      'orderby'     =>  'date',
      'order'       =>  'DESC',
      'meta_query'          => $meta_query,
      'tax_query'           => $tax_query,
  );

  $loop = new WP_Query( $args );

  while ( $loop->have_posts() ) {

    $loop->the_post();

    $_product = new WC_Product( get_the_ID() );

    get_slider_left($loop, $args, $slider_num);
    get_slider_right($loop, $args, $_product);

  }
  wp_reset_query();
}

function product_merch( $num_products ) {

  $slider_num = 3;

  $meta_query  = WC()->query->get_meta_query();
  $tax_query   = WC()->query->get_tax_query();
  $tax_query[] = array(
      'taxonomy' => 'product_visibility',
      'field'    => 'name',
      'terms'    => 'featured',
      'operator' => 'IN',
  );

  $args = array(
      'post_type'           => 'product',
      'post_status'         => 'publish',
      'ignore_sticky_posts' => 1,
      'product_cat' => 'merch',
      'stock'       =>  1,
      'showposts'   =>  $num_products,
      'orderby'     =>  'date',
      'order'       =>  'DESC',
      'meta_query'          => $meta_query,
      'tax_query'           => $tax_query,
  );

  $loop = new WP_Query( $args );

  while ( $loop->have_posts() ) {

    $loop->the_post();

    $_product = wc_get_product( get_the_ID() );

    get_slider_left( $loop, $args, $slider_num, $_product );
    get_slider_right( $loop, $args, $_product );

  }
  wp_reset_query();
}

function get_slider_left( $loop, $args, $slider_num ) {
  echo '<li class="ge-slide">';
       echo '<div class="ge-slider ge-slider-'. $slider_num . '">';
           echo '<div class="ge-slider-left">
                <div class="ge-slider-product-headline mobile">';
            get_headline( $args );
            echo '</div>';
                get_product_image( $loop, $args );
    echo '</div>';

}

function get_slider_right( $loop, $args, $product ) {
    echo '<div class="ge-slider-right">
                    <div class="ge-slider-product-meta">
                        <div class="ge-slider-product-headline desktop">';

                            get_headline( $args );

                       echo '</div>                
                        <div class="ge-slider-product-title">';
                            the_title('<h4><a href="' . get_permalink($product->get_id()) . '">', '</a></h4>');

                echo '</div>
                        <div class="ge-slider-product-price">';
                            echo '<h4>$' . $product->price . '</h4>' ;
                echo ' </div>
                    <div class="ge-slider-add-to-cart">';

                            woocommerce_template_loop_add_to_cart( $loop->post, $product );

                    echo'</div>
                </div>
            </div>
            
          </div>
</li>';
}

function get_headline( $args ) {
  echo ' <h3>';
  if ( $args['product_cat'] == 'music' ) {

    if (is_front_page()) {
      echo 'Latest Release';
    } else {
      echo 'Latest';
    }

  } elseif ( $args['product_cat'] == 'tabs' ) {

    if (is_front_page()) {
      echo 'New Tabs';
    } else {
      echo 'Featured';
    }

  } elseif ( $args['product_cat'] == 'merch' ) {

    if (is_front_page()) {
      echo 'New Merch';
    } else {
      echo 'Featured';
    }

  }

  echo '</h3>';

}

function get_product_image( $loop, $args ) {

  echo '<div class="ge-slider-product">';
    if ( has_post_thumbnail( $loop->post->ID ) ) {
      echo '<a href="'.get_permalink($loop->post->ID).'">'; //start product link
      echo get_the_post_thumbnail($loop->post->ID, array( 400, 400 ));
      echo '</a>'; // close product link

    }

  get_product_background_svg( $args );

  echo '</div>';

}

function get_product_background_svg( $args ) {

    if ( $args['product_cat'] == 'music' ){

      echo '<img class="product-background record" src="wp-content/plugins/ge-custom-product-slider/assets/icons/recordIcon.svg" alt="Placeholder"/>';

    } elseif ( $args['product_cat'] == 'tabs' ) {

      echo '<img class="product-background tabs" src="wp-content/plugins/ge-custom-product-slider/assets/icons/tabsIcon.svg" alt="Placeholder"/>';

    }

}

?>

<div class="ge-flexslider">
<div class="flexslider">
  <ul class="slides">
      <?php
      $classes = get_body_class();
      if ( in_array('home',$classes ) ) {
        product_music( 1 );
        product_tabs( 1 );
        product_merch( 1 );
      } elseif ( in_array( 'term-music', $classes) && in_array( 'tax-product_cat', $classes) ) {
        product_music( 3 );
      } elseif ( in_array( 'term-tabs', $classes) && in_array( 'tax-product_cat', $classes) ) {
        product_tabs( 3 );
      } elseif ( in_array( 'term-merch', $classes) && in_array( 'tax-product_cat', $classes) ) {
        product_merch( 3 );
      } elseif ( in_array( 'post-type-archive-product', $classes) && in_array( 'woocommerce', $classes) ) {
        product_music( 1 );
        product_tabs( 1 );
        product_merch( 1 );
      }
      ?>
  </ul>
</div>
</div>
