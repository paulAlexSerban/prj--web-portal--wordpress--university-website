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
      <a class="metabox__parent-link" href="<?php echo get_permalink(getParent()); ?>">
        <i class="fa fa-home" aria-hidden="true"></i>
          Back to <?php echo get_the_title(getParent()); ?>
      </a> 
        <span class="metabox__main"><?php the_title() ?></span>
    </p>
  </div>
<?php }

function getChildrenOf() {
  if(getParent()) {
    return $findChildrenOf = getParent();
  } else {
    return $findChildrenOf = get_the_ID();
  }
}

function getPageLinks() { ?>
  <div class="page-links">
  <h2 class="page-links__title"><a href="#"><?php echo get_the_title(getParent()); ?></a></h2>
  <ul class="min-list">
    <?php 
      wp_list_pages(array(
        'title_li' => NULL,
        'child_of' => getChildrenOf(),
        'sort_column' => 'menu_order'
      ));
    ?>
  </ul>
</div>
<?php } ?>

<?php  get_header(); ?>

<?php 
  while(have_posts()) {
    the_post(); ?>
    
  <div class="page-banner">
    <div class="page-banner__bg-image" style="background-image: url(<?php echo get_theme_file_uri('../../uploads/2021/11/ocean.jpg') ?>);"></div>
    <div class="page-banner__content container container--narrow">
      <h1 class="page-banner__title"><?php the_title(); ?></h1>
      <div class="page-banner__intro">
        <p>DON'T FORGET TO REPLACE ME LATER</p>
      </div>
    </div>  
  </div>

  <div class="container container--narrow page-section">

    <?php
    if(getParent()) {
      getMetabox();
    } 

    $testArray = get_pages(array(
      // if current page has children, this will return a collection of an y and all children pages
      'child_of' => get_the_ID()
    ));

    if(getParent() || $testArray) {
      // test if you are on a child page of if you are on a parent page
      getPageLinks();
    }
    
    ?>

    <div class="generic-content">
      <?php the_content(); ?>
    </div>

  </div>
    
  <?php } ?>

<?php get_footer(); ?>