<?php get_header(); ?>

<h1><?php bloginfo('name'); ?></h1>

<?php

while(have_posts()) {
  the_post(); ?>
  <a href="<?php the_permalink(); ?>"><h2><?php the_title();?></h2></a>
  <?php the_content();?>
  <hr>
<?php } ?>

<?php get_footer(); ?>
 test