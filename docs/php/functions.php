<?php

	// Add options for header/footer ACF
	if( function_exists('acf_add_options_page') ) {
		acf_add_options_page(array(
			'page_title' 	=> 'Общие',
			'menu_title'	=> 'Общие',
			'menu_slug' 	=> 'acf-options',
			'capability'	=> 'edit_posts',
			'redirect'		=> false
		));
	}

	// Define shorter paths
	define("B_THEME_ROOT", get_template_directory_uri());
	define("B_FONTS_DIR", B_THEME_ROOT . "/fonts");
	define("B_CSS_DIR", B_THEME_ROOT . "/css");
	define("B_JS_DIR", B_THEME_ROOT . "/js");
	define("B_IMG_DIR", B_THEME_ROOT . "/img");

	function theme_setup() {
		add_action( 'wp_enqueue_scripts', 'register_styles' );
		add_action( 'wp_enqueue_scripts', 'register_scripts' );
	}
?>