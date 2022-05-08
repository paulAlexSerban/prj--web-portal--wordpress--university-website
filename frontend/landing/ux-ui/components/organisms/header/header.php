<?php
  $pageType = '';

  if(is_front_page()) {
    $pageType = 'index';
  } else {
    $pageType = 'index';
  }
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?> data-js-page="<?php echo $pageType; ?>">
    <header class="site-header" data-js-component="mobile-menu">
      <div class="container">
        <h1 class="school-logo-text float-left">
          <a href="<?php echo site_url('/');?>"><strong>Fictional</strong> University</a>
        </h1>
        <span class="js-search-trigger site-header__search-trigger" data-js-component="search"><i class="fa fa-search" aria-hidden="true"></i></span>
        <i class="site-header__menu-trigger fa fa-bars" aria-hidden="true"></i>
        <div class="site-header__menu group">
          <nav class="main-navigation">
            <?php 
              wp_nav_menu(array(
                'theme_location' => 'headerMenuLocation',
                'menu_class' => 'main-navigation__menu-list',
                'add_li_class'  => 'main-navigation__menu-item'
              ));
            ?>
          </nav>
          <div class="site-header__util">
            <a href="#" class="btn btn--small btn--orange float-left push-right">Login</a>
            <a href="#" class="btn btn--small btn--dark-orange float-left">Sign Up</a>
            <span class="search-trigger js-search-trigger"><i class="fa fa-search" aria-hidden="true"></i></span>
          </div>
        </div>
      </div>
    </header>