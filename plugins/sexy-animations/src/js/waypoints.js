$=jQuery;

/*
  Waypoints.js + Animate.css helper function
  -Dynamically add Waypoint animation point-

   How to use:

   To animate an element, include the following two classes
   in either the HTML markup or add a Recipe in recipe.js:

   .wp-animation
   .wp-{animationName} (e.g. .wp-fadeInUp)
   .wp-delay-{numberOfSeconds} (e.g. .wp-delay-3)

   Based on:
   http://www.oxygenna.com/tutorials/scroll-animations-using-waypoints-js-animate-css

 */

$( document ).ready(function() {

  function onScrollInit( items, trigger ) {
    items.each( function() {
      var wpElement = $(this),
        wpAnimationClass = wpElement.attr('data-wp-animation');
        wpAnimationDelay = wpElement.attr('data-wp-animation-delay');

      wpElement.css({
        '-webkit-animation-delay':  wpAnimationDelay,
        '-moz-animation-delay':     wpAnimationDelay,
        'animation-delay':          wpAnimationDelay
      });

      var wpTrigger = ( trigger ) ? trigger : wpElement;

      wpTrigger.waypoint(function() {
        wpElement.addClass('animated').addClass(wpAnimationClass);
      },{
        triggerOnce: false,
        offset: '90%'
      });
    });
  }

  onScrollInit( $('.wp-animation') );
  onScrollInit( $('.wp-staggered-animation'), $('.wp-staggered-animation-container') );

});

