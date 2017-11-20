$=jQuery;

$(document).ready(function() {initializeSexyStyles();});



function initializeSexyStyles() {
  
     console.log('Sexy-Styles');

  if ( localized_sexy_config.sexy_woocheckout_link_color ) {
//     console.log('link-color '+ localized_sexy_config.sexy_woocheckout_link_color);
    
    if ( localized_sexy_config.sexy_woocheckout_link_color.charAt(0) === '#' ) {
//       console.log("hashtag");
    } 
       
  }
  
  if ( localized_sexy_config.sexy_woocheckout_text_color ) {
//     console.log('text-color '+ localized_sexy_config.sexy_woocheckout_text_color);
    
    if ( localized_sexy_config.sexy_woocheckout_text_color.charAt(0) === '#' ) {
//       console.log("hashtag");
    }
    
  }
  
  if ( localized_sexy_config.sexy_woocheckout_button_color ) { 
//     console.log('btn-color '+ localized_sexy_config.sexy_woocheckout_button_color);
    
    if ( localized_sexy_config.sexy_woocheckout_text_color.charAt(0) === '#' ) {
//       console.log("hashtag");
    }
    
  }
/*
  
  function getColor( key ) {
    
    console.log(localized_sexy_config.key);
    
  }
*/
  

}