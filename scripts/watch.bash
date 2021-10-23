DISTRIBUTION_TO_WATCH=$ROOT_DIR/src/dist
THEME_BUILD_TARGET=$ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME
function watch-dist () {
  fswatch -xrv -l 5 $DISTRIBUTION_TO_WATCH | while read num 
  do 
		rsync -r $DISTRIBUTION_TO_WATCH/* $THEME_BUILD_TARGET --info=progress2
  done
}

TEMPLATE_FILES=$ROOT_DIR/src/pages
function watch-template-files () {
  fswatch -xrv -l 5 $TEMPLATE_FILES | while read num 
  do 
		rsync -rv $TEMPLATE_FILES/*/* $THEME_BUILD_TARGET --info=progress2
  done
}

function watch-includes () {
  echo 'this should watch src/includes and keep it in sync with build/*/includes -<-<  to implement when needed'
}

function watch-plugins () {
  echo 'this should watch src/plugins and keep it in sync with build/*/plugins and build/*/mu-plugins -<-<  to implement when needed'
}

REQUIRED_FILES=$ROOT_DIR/src/required
function watch-required-files () {
  fswatch -xrv -l 5 $REQUIRED_FILES | while read num 
  do 
		rsync -rv $REQUIRED_FILES/* $THEME_BUILD_TARGET --info=progress2
  done
}

COMPONENT_FILES=$ROOT_DIR/src/ux-ui/components
function watch-components () {
  fswatch -xrv -l 5 $COMPONENT_FILES/*/*/*.php | while read num 
  do 
		rsync -rv $COMPONENT_FILES/*/*/*.php $THEME_BUILD_TARGET --info=progress2
  done
}

function multiple-watchers () {
  watch-dist | watch-template-files | watch-required-files | watch-components
} 