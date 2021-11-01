<?php

function university_files() {
  wp_enqueue_script('index', get_theme_file_uri('/assets/scripts/index.script.js'), array('jquery'), '1.0', true);

  wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
  wp_enqueue_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
  wp_enqueue_style('index', get_theme_file_uri('/assets/styles/index.style.css'));
}

add_action('wp_enqueue_scripts', 'university_files');

function university_features () {
  add_theme_support('title-tag');
  register_nav_menu('headerMenuLocation', 'Header Menu Location');
  register_nav_menu('footerLocationOne', 'Footer Location One');
  register_nav_menu('footerLocationTwo', 'Footer Location Two');
}

add_action('after_setup_theme', 'university_features');

function add_additional_class_on_li($classes, $item, $args) {
  if(isset($args->add_li_class)) {
      $classes[] = $args->add_li_class;
  }
  return $classes;
}
add_filter('nav_menu_css_class', 'add_additional_class_on_li', 1, 3);
