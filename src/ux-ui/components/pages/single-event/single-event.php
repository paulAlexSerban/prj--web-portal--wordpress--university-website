<?php 

function getMetabox() { ?>
  <div class="metabox metabox--position-up metabox--with-home-link">
    <p class="metabox__content">
      <a class="metabox__parent-link" href="<?php echo get_post_type_archive_link('event'); ?>">
        <i class="fa fa-home" aria-hidden="true"></i>
          Events Home
      </a> 
        <span class="metabox__main"><? the_title();?></span>
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

      <div class="generic-content"> <?php the_content();?> </div>

      <?php $relatedPrograms = get_field('related_programs'); 
        if($relatedPrograms) { ?>
          <hr class="section-break">
          <h2 class="headline headline--medium">Related programs</h2>
          <ul class="link-list min-list">
            <?php foreach($relatedPrograms as $program) { ?>
              <li>
                <a href="<?php echo get_the_permalink($program)?>"><?php echo get_the_title($program)?></a>
              </li>
            <?php } ?>
          </ul>
        <?php } ?>

    </div
  <?php } 
  
  get_footer(); ?>