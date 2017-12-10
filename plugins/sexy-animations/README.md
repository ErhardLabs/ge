# sexy-animations
Developer-friendly WordPress Plugin for creating animations

Using these libraries Waypoints.js + Animate.css

  -Dynamically add Waypoint animation point-

   How to use:

   To animate an element, include the following two classes
   in either the HTML markup or add a Recipe in recipe.js:

   .wp-animation
   .wp-{animationName} (e.g. .wp-fadeInUp)
   .wp-delay-{numberOfSeconds} (e.g. .wp-delay-3)
   
   Adding a Recipe:
   Create your animation recipes by using these HTML classes:
      .wp-animation
      .wp-{animationName}
      .wp-delay-{numberOfSeconds}
   Example -fadeIn animation with 1 second delay:
       $('.className').addClass('wp-animation').addClass('wp-fadeIn').addClass('wp-delay-1');