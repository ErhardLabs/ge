<?php

function get_attributes( $atts ){
    if( $atts['free'] == "true" ) {

    }
}

function product_music( $num_products ) {

  $slider_num = 1;

  $args = array(
    'post_type' => 'product',
    'stock' => 1,
    'posts_per_page' => $num_products,
    'orderby' => 'date',
    'order' => 'DESC',
    'product_cat' => 'music'
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

  $args = array(
    'post_type' => 'product',
    'stock' => 1,
    'posts_per_page' => $num_products,
    'orderby' => 'meta_value_num',
    'meta_key' => '_price',
    'order' => 'DESC',
    'product_cat' => 'tabs'
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

function product_merch( $num_products ) {

  $slider_num = 3;

  $args = array(
    'post_type' => 'product',
    'stock' => 1,
    'posts_per_page' => $num_products,
    'orderby' => 'meta_value_num',
    'meta_key' => '_price',
    'order' => 'DESC',
    'product_cat' => 'merch'
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
                            the_title('<h3>', '</h3>');
                echo '</div>
                        <div class="ge-slider-product-price">';
                            echo '<h3>$' . $product->price . '</h3>' ;
                echo ' </div>
                    <div class="ge-slider-add-to-cart">';
                            woocommerce_template_loop_add_to_cart( $loop->post, $product ); ;
                    echo'</div>
                </div>
            </div>
            
          </div>
</li>';
}

function get_headline( $args ) {
  echo ' <h1>';
  if ( $args['product_cat'] == 'music' ) {
   echo'Newest Music';

  } elseif ( $args['product_cat'] == 'tabs' ) {

    echo 'Featured Tabs';

  } elseif ( $args['product_cat'] == 'merch' ) {

    echo 'Featured Merch';

  }

  echo '</h1>';

}

function get_product_image( $loop, $args ) {

  echo '<div class="ge-slider-product">';
    if ( has_post_thumbnail( $loop->post->ID ) ) {
        echo get_the_post_thumbnail($loop->post->ID, 'shop_catalog');
    }

  get_product_background_svg( $args );

  echo '</div>';

}

function get_product_background_svg( $args ) {

    if ( $args['product_cat'] == 'music' ){

      echo '<img class="product-background record" src="'. plugin_dir_url() . '/ge-custom-product-slider/assets/icons/recordIcon.svg" alt="Placeholder"/>';

    } elseif ( $args['product_cat'] == 'tabs' ) {

      echo '<img class="product-background tabs" src="'. plugin_dir_url() . '/ge-custom-product-slider/assets/icons/tabsIcon.svg" alt="Placeholder"/>';

    }

}

?>

<div class="ge-flexslider">
<div class="flexslider">
  <ul class="slides">
      <?php
      $classes = get_body_class();
      get_attributes( $atts );
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
