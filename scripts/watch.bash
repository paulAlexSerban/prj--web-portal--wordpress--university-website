#!/bin/bash
DISTRIBUTION_ASSEST_TO_WATCH=$ROOT_DIR/src/dist/assets
THEME_BUILD_TARGET=$ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME
REQUIRED_FILES=$ROOT_DIR/src/required
TEMPLATE_FILES=$ROOT_DIR/src/pages
COMPONENT_FILES=$ROOT_DIR/src/ux-ui/components

function watch-required-files () {
  fswatch -xnr -l 2 $REQUIRED_FILES/* | while read num event
  do 
    rsync -rv --mkpath $num $THEME_BUILD_TARGET/ --info=progress2
  done
}

function watch-template-files () {
  fswatch -xnr -l 2 $TEMPLATE_FILES/*/*.php | while read num event
  do 
    rsync -rv --mkpath $num $THEME_BUILD_TARGET/ --info=progress2
  done
}

function watch-components () {
  fswatch -xrv -l 2 $COMPONENT_FILES/*/*/*.php | while read num event 
  do 
    rsync -rv --mkpath $num $THEME_BUILD_TARGET --info=progress2
  done
}

function watch-dist-assets () {
  fswatch -xnr -l 2 $DISTRIBUTION_ASSEST_TO_WATCH | while read num event
  do 
    rsync -rv --mkpath $num $THEME_BUILD_TARGET/assets --info=progress2
  done
}


function watch-includes () {
  
}

function watch-plugins () {
  # copy_must-use-plugins-src-to-build
  # copy_plugins-src-to-build
}

function uni-web-start-watchers () {
  # add watchers as you get developing
  # for example the first steps developin a new theme needs only the required files
  watch-required-files & watch-template-files & watch-components & watch-dist-assets
} 

function uni-web-stop-warchers () {
  ps ax | grep fswatch
  killall fswatch
}











