<?php 

// functions
/**
 * getParent() returns 0 if it is called for on a parent page or the id of the parent page
 */
function getParent() {
  $theParent = wp_get_post_parent_id(get_the_id());
  return $theParent;
}

function getMetabox() { ?>
  <div class="metabox metabox--position-up metabox--with-home-link">
    <p class="metabox__content">
      <a class="metabox__parent-link" href="<?php echo site_url('/blog'); ?>">
        <i class="fa fa-home" aria-hidden="true"></i>
          Blog Home
      </a> 
        <span class="metabox__main">Posted by <?php the_author_posts_link()?> on <?php the_time('j.n.y'); ?> in <?php echo get_the_category_list(', '); ?></span>
    </p>
  </div>
<?php }

?>

<?php
  
  get_header();

  while(have_posts()) {
    the_post();
    pageBanner(); ?>
    <div class="container container--narrow page-section">
      <?php getMetabox();?>

      <div class="generic-content">
        <?php the_content();?>
      </div>
    </div
    
  <?php }

  get_footer();

?>