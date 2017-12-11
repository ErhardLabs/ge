<?php

// SETTINGS & DEFAULTS
(isset(get_option('wc_sexy_woocheckout_dark_theme'))) ? $darkTheme = get_option('wc_sexy_woocheckout_dark_theme') : $darkTheme = false;
(isset(get_option('wc_sexy_woocheckout_slide_out_screen_perc'))) ? $slideOutScreenPX = get_option('wc_sexy_woocheckout_slide_out_screen_perc') : $slideOutScreenPX = '420';
(isset(get_option('wc_sexy_woocheckout_link_color'))) ? $linkColor = get_option('wc_sexy_woocheckout_link_color') : $linkColor = 'inherit';
(isset(get_option('wc_sexy_woocheckout_text_color'))) ? $textColor = get_option('wc_sexy_woocheckout_text_color') : $textColor = 'inherit';
(isset(get_option('wc_sexy_woocheckout_button_color'))) ? $btnColor = get_option('wc_sexy_woocheckout_button_color') : $btnColor = 'inherit';

$darkBG = 'rgba(34,32,32,.98)';
$lightGB = 'rgba(255,255,255,.98)';

if ($darkTheme === 'yes') {
  $backgroundColor = $darkBG;
} else {
  $backgroundColor = $lightGB;
}