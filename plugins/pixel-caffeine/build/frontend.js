!function(e){function t(a){if(n[a])return n[a].exports;var c=n[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";jQuery(document).ready(function(e){var t=e(document.body),n=function(e){return aepc_extend_args(e)},a=function(e,t){t?setTimeout(e,1e3*t):e()};aepc_pixel_events.standard_events&&e.each(aepc_pixel_events.standard_events,function(t,c){e.each(c,function(e,c){a(function(){c.params?fbq("track",t,n(c.params)):fbq("track",t)},c.delay)})}),void 0!==aepc_pixel_events.custom_events&&e.each(aepc_pixel_events.custom_events,function(t,c){e.each(c,function(e,c){a(function(){fbq("trackCustom",t,n(c.params))},c.delay)})}),void 0!==aepc_pixel_events.css_events&&e.each(aepc_pixel_events.css_events,function(t,a){e.each(a,function(a,c){e(t).on("click",function(){fbq(c.trackType,c.trackName,n(c.trackParams))})})}),void 0!==aepc_pixel_events.link_clicks&&e.each(aepc_pixel_events.link_clicks,function(t,a){t=t.replace(/\*/g,"[^/]+"),e("a").filter(function(){var n=e(this).attr("href");return void 0!==n&&n.match(new RegExp(t))}).on("click",function(t){e.each(a,function(e,t){fbq(t.trackType,t.trackName,n(t.trackParams))})})}),t.hasClass("woocommerce-page")&&(e("ul.products").on("click",".ajax_add_to_cart",function(t){if("no"===aepc_pixel.enable_addtocart)return t;var a=e(this),c=a.closest("li.product"),o=a.data("product_sku")?a.data("product_sku"):a.data("product_id");fbq("track","AddToCart",n({content_ids:[o],content_type:"product",content_name:c.find("h3").text(),content_category:c.find("span[data-content_category]").data("content_category"),value:parseFloat(c.find("span.amount").clone().children().remove().end().text()),currency:woocommerce_params.currency}))}).on("click",".add_to_wishlist, .wl-add-to",function(t){if("no"===aepc_pixel.enable_wishlist)return t;var a=e(this),c=a.closest("li.product"),o=a.data("product_sku")?a.data("product_sku"):a.data("product_id");fbq("track","AddToWishlist",n({content_ids:[o],content_type:"product",content_name:c.find("h3").text(),content_category:c.find("span[data-content_category]").data("content_category"),value:parseFloat(c.find("span.amount").clone().children().remove().end().text()),currency:woocommerce_params.currency}))}),e("div.product").on("click",".single_add_to_cart_button",function(e){"yes"===aepc_pixel.enable_addtocart&&"yes"===wc_add_to_cart_params.cart_redirect_after_add&&fbq("track","AddToCart",n(aepc_pixel_events.ViewContent))}).on("click",".add_to_wishlist, .wl-add-to",function(e){if("no"===aepc_pixel.enable_wishlist)return e;fbq("track","AddToWishlist",n(aepc_pixel_events.ViewContent))}),e("form.checkout").on("checkout_place_order",function(e){return"no"===aepc_pixel.enable_addpaymentinfo?e:(fbq("track","AddPaymentInfo",n({content_type:aepc_pixel_events.standard_events.InitiateCheckout[0].content_type,content_ids:aepc_pixel_events.standard_events.InitiateCheckout[0].content_ids,value:aepc_pixel_events.standard_events.InitiateCheckout[0].value,currency:aepc_pixel_events.standard_events.InitiateCheckout[0].currency})),!0)})),t.hasClass("edd-page")&&(e(".edd_download_purchase_form").on("click",".edd-add-to-cart",function(t){if("no"===aepc_pixel.enable_addtocart)return t;var a=e(this),c=a.closest("div.edd_download, article.type-download"),o=a.data("download-sku")?a.data("download-sku"):a.data("download-id"),r=c.find('meta[itemprop="priceCurrency"]').attr("content"),i=a.data("price");if("yes"===a.data("variable-price")){var d=e(".edd_price_options"),s=d.find('input[type="radio"]:checked'),_=s.closest("li");i=_.find('meta[itemprop="price"]').attr("content"),r=_.find('meta[itemprop="priceCurrency"]').attr("content")}fbq("track","AddToCart",n({content_ids:[o],content_type:"product",content_name:c.find('[itemprop="name"]').first().text(),content_category:a.data("download-categories"),value:parseFloat(i),currency:r}))}),e(".edd-checkout").on("click",'form#edd_purchase_form input[type="submit"]',function(e){return"no"===aepc_pixel.enable_addpaymentinfo?e:(fbq("track","AddPaymentInfo",n({content_type:aepc_pixel_events.standard_events.InitiateCheckout[0].content_type,content_ids:aepc_pixel_events.standard_events.InitiateCheckout[0].content_ids,value:aepc_pixel_events.standard_events.InitiateCheckout[0].value,currency:aepc_pixel_events.standard_events.InitiateCheckout[0].currency})),!0)}))})}]);