<?php
/**
 * Genesis Framework.
 *
 * WARNING: This file is part of the core Genesis Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package StudioPress\Genesis
 * @author  StudioPress
 * @license GPL-2.0+
 * @link    http://my.studiopress.com/themes/genesis/
 */

$people = require GENESIS_CONFIG_DIR . '/contributors.php';
$genesis_contributors = new Genesis_Contributors( $people );
$genesis_allowed_code = array(
		'code' => array(),
);
?>
<div class="wrap about-wrap">

<img src="<?php echo esc_attr( get_template_directory_uri() . '/lib/admin/images/whats-new.png' ); ?>" class="alignright whats-new" />

<h1><?php echo esc_html( get_admin_page_title() ); ?></h1>

<p class="about-text"><?php _e( 'Genesis 2.5 focuses largely on the integrity, organization, and testability of code, along with other improvements for broad compatibility.' , 'genesis' ); ?></p>

<div class="changelog">
	<div class="feature-section">

	<h2 class="screen-reader-text"><?php _e( 'Changes', 'genesis' ); ?></h2>

	<h3><?php esc_html_e( 'Added', 'genesis' ); ?></h3>
	<ul>
		<li><?php esc_html_e( 'Add instances of markup API use in several locations where it was previously not used.', 'genesis' ); ?></li>
		<li><?php esc_html_e( 'Add any missed XHTML markup to the XHTML markup filter.', 'genesis' ); ?></li>
		<li><?php echo wp_kses( __( 'Add <code>Genesis_Contributors</code> and <code>Genesis_Contributor</code> classes.', 'genesis' ), $genesis_allowed_code ); ?></li>
		<li><?php echo wp_kses( __( 'Add <code>views</code> directory and extracted output to organized view files.', 'genesis' ), $genesis_allowed_code ); ?></li>
		<li><?php esc_html_e( 'Add full support for WordPress\'s new title tag.', 'genesis' ); ?></li>
		<li><?php esc_html_e( 'Add slashing for user script input fields.', 'genesis' ); ?></li>
		<li><?php esc_html_e( 'Add primary category support when Yoast SEO is on, but breadcrumb feature is off.', 'genesis' ); ?></li>
		<li><?php esc_html_e( 'Add support for multiple layout types depending on context.', 'genesis' ); ?></li>
		<li><?php esc_html_e( 'Add script loader class.', 'genesis' ); ?></li>
		<li><?php esc_html_e( 'Add ability to specify location of entry scripts via a second option.', 'genesis' ); ?></li>
		<li><?php esc_html_e( 'Add filter for capability required to use CPT archive settings.', 'genesis' ); ?></li>
		<li><?php esc_html_e( 'Add filter to disable layout settings on CPT archive settings page.', 'genesis' ); ?></li>
		<li><?php esc_html_e( 'Add sanitizer for layout settings on CPT archive settings page.', 'genesis' ); ?></li>
		<li><?php echo wp_kses( __( 'Add a posts page check to <code>genesis_do_blog_template_heading()</code>.', 'genesis' ), $genesis_allowed_code ); ?></li>
		<li><?php esc_html_e( 'Add filter for entry content display options in the customizer.', 'genesis' ); ?></li>
		<li><?php esc_html_e( 'Add terms back to terms array in our terms filter.', 'genesis' ); ?></li>
		<li><?php echo wp_kses( __( 'Add <code>genesis_strip_p_tags()</code> function.', 'genesis' ), $genesis_allowed_code ); ?></li>
		<li><?php esc_html_e( 'Add center alignment option to featured image alignment setting.', 'genesis' ); ?></li>
		<li><?php esc_html_e( 'Add more filters to breadcrumb class.', 'genesis' ); ?></li>
	</ul>

	<h3><?php esc_html_e( 'Changed', 'genesis' ); ?></h3>
	<ul>
		<li><?php esc_html_e( 'Split featured post and page widget entry header markup, gave markup API context for each.', 'genesis' ); ?></li>
		<li><?php echo wp_kses( __( 'Restored adding <code>tabindex</code> via JavaScript when <code>genesis-accessibility</code> is supported.', 'genesis' ), $genesis_allowed_code ); ?></li>
		<li><?php esc_html_e( 'Prevent smushed offscreen accessible text.', 'genesis' ); ?></li>
		<li><?php echo wp_kses( __( 'Reorganized <code>init.php</code>.', 'genesis' ), $genesis_allowed_code ); ?></li>
		<li><?php esc_html_e( 'Strip paragraph tags from filtered credits text to avoid paragraph nesting.', 'genesis' ); ?></li>
		<li><?php esc_html_e( 'Standardize the context naming in widget markup.', 'genesis' ); ?></li>
		<li><?php echo wp_kses( __( 'Flag entry markup as <code>is_widget</code> via the params array so it can be modified without affecting other entries.', 'genesis' ), $genesis_allowed_code ); ?></li>
		<li><?php esc_html_e( 'Restored new line between admin screen buttons.', 'genesis' ); ?></li>
		<li><?php esc_html_e( 'Improvements to composer, PHPCS, and unit tests.', 'genesis' ); ?></li>
		<li><?php echo wp_kses( __( 'Switch all schema.org URLs to <code>https</code>.', 'genesis' ), $genesis_allowed_code ); ?></li>
		<li><?php echo wp_kses( __( 'Formally deprecate <code>genesis_get_additional_image_sizes()</code>.', 'genesis' ), $genesis_allowed_code ); ?></li>
		<li><?php echo wp_kses( __( 'Formally deprecate <code>genesis_conributors()</code>.', 'genesis' ), $genesis_allowed_code ); ?></li>
		<li><?php echo wp_kses( __( 'Formally deprecate <code>genesis_register_scripts()</code>.', 'genesis' ), $genesis_allowed_code ); ?></li>
		<li><?php echo wp_kses( __( 'Formally deprecate <code>genesis_load_scripts()</code>.', 'genesis' ), $genesis_allowed_code ); ?></li>
		<li><?php echo wp_kses( __( 'Formally deprecate <code>genesis_load_admin_scripts()</code>.', 'genesis' ), $genesis_allowed_code ); ?></li>
		<li><?php echo wp_kses( __( 'Formally deprecate <code>genesis_load_admin_js()</code>.', 'genesis' ), $genesis_allowed_code ); ?></li>
		<li><?php esc_html_e( 'CSS improvements.', 'genesis' ); ?></li>
		<li><?php esc_html_e( 'Code optimization and documentation improvements.', 'genesis' ); ?></li>
		<li><?php esc_html_e( 'Ensure skip links filter returns an array.', 'genesis' ); ?></li>
		<li><?php esc_html_e( 'Improve randomness of search form ID.', 'genesis' ); ?></li>
		<li><?php esc_html_e( 'Fix potential issue with footer scripts filter.', 'genesis' ); ?></li>
		<li><?php echo wp_kses( __( 'Move <code>aria-label</code> to the anchor element so screen readers will announce it.', 'genesis' ), $genesis_allowed_code ); ?></li>
		<li><?php esc_html_e( 'Add capability check to CPT archive settings link in the toolbar.', 'genesis' ); ?></li>
		<li><?php esc_html_e( 'Refactor and improve archive headings.', 'genesis' ); ?></li>
		<li><?php esc_html_e( 'Fix typo in comments feed setting.', 'genesis' ); ?></li>
	</ul>

	<h3><?php esc_html_e( 'Removed', 'genesis' ); ?></h3>
	<ul>
		<li><?php esc_html_e( 'Remove semantic headings SEO option, with fallback for backward compatibility.', 'genesis' ); ?></li>
		<li><?php esc_html_e( 'Disable <code>backtotop</code> output if HTML5 is on.', 'genesis' ); ?></li>
		<li><?php esc_html_e( 'Remove output buffering on search form.', 'genesis' ); ?></li>
		<li><?php esc_html_e( 'Remove unnecessary heading on skip links.', 'genesis' ); ?></li>
	</ul>

	</div>
</div>

<div class="project-leads">

	<h2><?php _e( 'Project Leads', 'genesis' ); ?></h2>

	<ul class="wp-people-group " id="wp-people-group-project-leaders">
		<?php
		$lead_developers = $genesis_contributors->find_by_role( 'lead-developer' );
		array_walk( $lead_developers, function( Genesis_Contributor $person ) {
			printf(
				'<li class="wp-person">' .
				'<a href="%1$s"><img src="%2$s" alt="%3$s" class="gravatar" /></a><a class="web" href="%1$s">%4$s</a>' .
				'<span class="title">%5$s</span>' .
				'</li>' . "\n",
				esc_url( $person->get_profile_url() ),
				esc_url( $person->get_avatar_url() ),
				esc_attr( $person->get_name() ),
				esc_html( $person->get_name() ),
				esc_html( $person->get_named_role() )
			);
		});
		?>
	</ul>

</div>

<div class="contributors">

	<h2><?php _e( 'Contributors', 'genesis' ); ?></h2>

	<ul class="wp-people-group" id="wp-people-group-contributing-developers">
		<?php
		$contributors = $genesis_contributors->find_contributors();
		array_walk( $contributors, function( Genesis_Contributor $person ) {
			printf(
				'<li class="wp-person">' .
				'<a href="%1$s"><img src="%2$s" alt="%3$s" class="gravatar" /></a><a class="web" href="%1$s">%4$s</a>' .
				'<span class="title">%5$s</span>' .
				'</li>' . "\n",
				esc_url( $person->get_profile_url() ),
				esc_url( $person->get_avatar_url() ),
				esc_attr( $person->get_name() ),
				esc_html( $person->get_name() ),
				esc_html( $person->get_named_role() )
			);
		});
		?>
	</ul>

</div>

<div class="return-to-dashboard">
	<p><a href="<?php echo esc_url( menu_page_url( 'genesis', 0 ) ); ?>"><?php _e( 'Go to Theme Settings &rarr;', 'genesis' ); ?></a></p>
	<?php if ( ! genesis_seo_disabled() ) : ?>
	<p><a href="<?php echo esc_url( menu_page_url( 'seo-settings', 0 ) ); ?>"><?php _e( 'Go to SEO Settings &rarr;', 'genesis' ); ?></a></p>
	<?php endif; ?>

</div>

</div>
