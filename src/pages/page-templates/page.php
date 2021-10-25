<?php
/**
 * This is the default page template for displaying all pages
 * If a specialized template that includes the page’s ID is not found, WordPress looks for and uses the theme’s default page template.
 */
?>

<?php get_header(); ?>

<?php
while(have_posts()) {
  the_post(); ?>
  <h2><?php the_title();?></h2>
  <?php the_content();?>
  <hr>
<?php } ?>

<?php get_footer(); ?>