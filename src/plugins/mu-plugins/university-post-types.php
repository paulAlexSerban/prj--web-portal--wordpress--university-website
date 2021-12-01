<?php
/**
 * Creates custom post types
 */
function university_post_types() {
  // Events post types
  register_post_type('event', array(
    'supports' => array('title', 'editor', 'excerpt'),
    'rewrite' => array(
      'slug' => 'events'
    ),
    'has_archive' => true,
    'public' => true,
    'show_in_rest' => true,
    'labels' => array(
      'name' => 'Events',
      'add_new_item' => 'Add New Event',
      'edit_item' => 'Edit Event',
      'all_items' => 'All Events',
      'singular_name' => 'Event'
    ), 
    'menu_icon' => 'dashicons-calendar'
  ));

  // Programmes post types

  // Professors post types
  register_post_type('professor', array(
    'supports' => array('title', 'editor', 'thumbnail'),
    'public' => true,
    'show_in_rest' => true,
    'labels' => array(
      'name' => 'Professors',
      'add_new_item' => 'Add New Professor',
      'edit_item' => 'Edit Professor',
      'all_items' => 'All Professors',
      'singular_name' => 'Professors'
    ), 
    'menu_icon' => 'dashicons-welcome-learn-more'
  ));
}

add_filter('init', 'university_post_types');