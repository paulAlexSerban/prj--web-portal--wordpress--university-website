<?php get_header();
      pageBanner(array(
        'title' => 'Our Campuses',
        'subtitle' => 'We have several conveniently located campuses'
      )); ?>

<div class="container container--narrow page-section">

  <div class="acf-map" data-js-component="google-map">

    <?php 
    while(have_posts()) {
      the_post(); 
      $mapLocation = get_field('map_location')?>
      <div class="marker" data-lat="<?php echo $mapLocation['lat'];?>" data-lng="<?php echo $mapLocation['lng'];?>">

      </div>
    <?php } ?>

  </div>

  <?php echo paginate_links(); ?>

</div>

<?php get_footer(); ?>