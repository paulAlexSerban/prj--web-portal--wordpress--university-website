<?php 
function getMetabox() { ?>
  <div class="metabox metabox--position-up metabox--with-home-link">
    <p class="metabox__content">
      <a class="metabox__parent-link" href="<?php echo get_post_type_archive_link('program'); ?>">
        <i class="fa fa-home" aria-hidden="true"></i>
          All Programs
      </a> 
        <span class="metabox__main"><? the_title();?></span>
    </p>
  </div>
<?php 
} 

function getPageBanner() { ?>
  <div class="page-banner">
    <div class="page-banner__bg-image" style="background-image: url(<?php echo get_theme_file_uri('../../uploads/2021/11/ocean.jpg') ?>);"></div>
    <div class="page-banner__content container container--narrow">
      <h1 class="page-banner__title"><?php the_title(); ?></h1>
      <div class="page-banner__intro">
        <p>DON'T FORGET TO REPLACE ME LATER</p>
      </div>
    </div>  
  </div>
<?php 
}

?>

<?php get_header();
while(have_posts()) {
  the_post(); 
  getPageBanner();?>

  <div class="container container--narrow page-section">
    <?php getMetabox();?>

    <div class="generic-content">
      <?php the_content();?>
    </div>

    <?php 
    $relatedProfessors = new WP_Query(array(
      'posts_per_page' => -1,
      'post_type' => 'professor',
      'orderby' => 'title',
      'order' => 'ASC',
      'meta_query' => array(
        array(
          'key' => 'related_programs',
          'compare' => 'LIKE',
          'value' => '"'.get_the_id().'"'
        )
      ),
    ));
        
    if($relatedProfessors->have_posts()) { ?>
      <hr class="section-break">
      <h2 class="headline headline--medium">Related <?php echo get_the_title()?> Events</h2>
      <ul class="link-list min-list">
        <?php
        while($relatedProfessors->have_posts()) {
          $relatedProfessors->the_post(); ?>
          <li>
            <a href="<?php the_permalink();?>"><?php the_title();?></a>
          </li>
          <?php 
        }
        ?>
      </ul>
    <?php } wp_reset_postdata(); 
    
    $today = date('Ymd');
    $homepageEvents = new WP_Query(array(
      'posts_per_page' => 2,
      'post_type' => 'event',
      'meta_key' => 'event_date',
      'orderby' => 'meta_value_num',
      'order' => 'ASC',
      'meta_query' => array(
        array(
          'key' => 'event_date',
          'compare' => '>=',
          'value' => $today,
          'type' => 'numeric'
        ),
        array(
          'key' => 'related_programs',
          'compare' => 'LIKE',
          'value' => '"'.get_the_id().'"'
        )
      ),
    ));
    
    if($homepageEvents->have_posts()) { ?>
      <hr class="section-break">
      <h2 class="headline headline--medium">Related <?php echo get_the_title()?> Events</h2>
      <?php
      while($homepageEvents->have_posts()) {
        $homepageEvents->the_post(); 
        $eventDate = new DateTime(get_field('event_date')); ?>

        <div class="event-summary">
          <a class="event-summary__date t-center" href="<?php the_permalink(); ?>">
            <span class="event-summary__month"><?php echo $eventDate->format('M'); ?></span>
            <span class="event-summary__day"><?php echo $eventDate->format('d'); ?></span>
          </a>
          <div class="event-summary__content">
            <h5 class="event-summary__title headline headline--tiny"><a href="<?php the_permalink(); ?>"><?php the_title();?></a></h5>
            <p>
              <?php 
              if(has_excerpt()) {
                echo get_the_excerpt();
                  } else {
                    echo wp_trim_words(get_the_content(), 18);
                  }
              ?>
            
            <a href="<?php the_permalink(); ?>" class="nu gray">Learn more</a></p>
          </div>
        </div>
        
        <?php 
      }
    } wp_reset_postdata(); ?>

  </div>
  
<?php 
} get_footer(); ?>