<?php

function load_vendor_scripts () {
  wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
  wp_enqueue_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
}
add_action('wp_enqueue_scripts', 'load_vendor_scripts');

function university_files() {
  wp_enqueue_script('index', get_theme_file_uri('/assets/scripts/index.script.js'), array('jquery'), '1.0', true);
  wp_enqueue_style('index', get_theme_file_uri('/assets/styles/index.style.css'));
}
add_action('wp_enqueue_scripts', 'university_files');

function university_features () {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'university_features');

function university_navigation () {
  register_nav_menu('headerMenuLocation', 'Header Menu Location');
  register_nav_menu('footerLocationOne', 'Footer Location One');
  register_nav_menu('footerLocationTwo', 'Footer Location Two');
}
add_action('after_setup_theme', 'university_navigation');

/**
 * this function adds and extra class to list items in the navigation
 * IN `header.php` - look for `add_li_class`, the class that corresponds to it will be added to the navigation list item
 */
function add_additional_class_on_li($classes, $item, $args) {
  if(isset($args->add_li_class)) {
      $classes[] = $args->add_li_class;
  }
  return $classes;
}

add_filter('nav_menu_css_class', 'add_additional_class_on_li', 1, 3);