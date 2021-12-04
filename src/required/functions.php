<?php

function pageBanner($args = null) {
  if(!$args['title']) { $args['title'] = get_the_title(); }
  if(!$args['subtitle']) { $args['subtitle'] = get_field('page_banner_subtitle'); }
  if(!$args['photo']) {
    if(get_field('page_banner_background_image') && !is_archive() && !is_home()) {
      $args['photo'] = get_field('page_banner_background_image')['sizes']['pageBanner'];
    } else {
      $args['photo'] = get_theme_file_uri('../../uploads/2021/11/ocean.jpg');
    }
  }
  ?>
  <div class="page-banner">
    <div  class="page-banner__bg-image" style="background-image: url(<?php echo $args['photo']; ?>);">
    </div>
    <div class="page-banner__content container container--narrow">
      <h1 class="page-banner__title"><?php echo $args['title']; ?></h1>
      <div class="page-banner__intro">
        <p><?php echo $args['subtitle']; ?></p>
      </div>
    </div>  
  </div>
  <?php
}

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
  add_image_size('professorLandscape', 400, 260, true);
  add_image_size('professorPortrait', 480, 650, true);
  add_image_size('pageBanner', 1500, 350, true);
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

function university_adjust_queries($query) {
  if(!is_admin() && $query->is_main_query() ) {
    if(is_post_type_archive('event') ) {
      $today = date('Ymd');
      $query->set('meta_key', 'event_date');
      $query->set('orderby', 'meta_value_num');
      $query->set('order', 'ASC');
      $query->set('meta_query', array(
        array(
          'key' => 'event_date',
          'compare' => '>=',
          'value' => $today,
          'type' => 'numeric'
        ),
      ));
    } else if(is_post_type_archive('program')) {
      $query->set('orderby', 'title');
      $query->set('order', 'ASC');
      $query->set('posts_per_page', -1);
    }
  }
}

add_action('pre_get_posts', 'university_adjust_queries');

function university_map_key($api) {
  $api['key'] = 'paste in here the google maps api key ;)';
  return $api;
}

add_filter('acf/fields/google_map/api', 'university_map_key');
