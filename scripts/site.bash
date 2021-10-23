#!/bin/bash
DISTRIBUTION_ASSEST_TO_WATCH=$ROOT_DIR/src/dist
THEME_BUILD_TARGET=$ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME

function copy_fe_assets-src-to-build () {
  echo " "
  echo " COPY front-end assets files from ./src/dist/assets to ./build/*/themes/$PROJECT_NAME/assets "
  echo " "
  rsync -rv --mkpath $DISTRIBUTION_ASSEST_TO_WATCH/*/* $THEME_BUILD_TARGET/assets --info=progress2
}

function watch-dist-assets () {
  fswatch -o -l 5 $DISTRIBUTION_ASSEST_TO_WATCH/assets | while read num 
  do 
		copy_fe_assets-src-to-build
  done
}

REQUIRED_FILES=$ROOT_DIR/src/required
function copy_required-src-to-build () {
  echo " "
  echo " COPY required theme files from ./src/required/* to ./build/*/themes/$PROJECT_NAME "
  echo " "
  rsync -rv --mkpath $REQUIRED_FILES/* $THEME_BUILD_TARGET --info=progress2
}

function watch-required-files () {
  fswatch -o -l 5 $REQUIRED_FILES/* | while read num 
  do 
		copy_required-src-to-build
  done
}

function copy_includes-src-to-build () {
  echo " "
  echo " COPY includes files from ./src/includes to ./build/*/themes/$PROJECT_NAME "
  echo " "
  rsync -rv --mkpath $ROOT_DIR/src/includes $ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME --info=progress2
}

function watch-includes () {
  echo 'this should watch src/includes and keep it in sync with build/*/includes -<-<  to implement when needed'
  copy_includes-src-to-build
}

function copy_must-use-plugins-src-to-build () {
  rsync -rv --mkpath $ROOT_DIR/src/plugins/mu-plugins $ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME --info=progress2
}

function copy_plugins-src-to-build () {
  rsync -rv --mkpath $ROOT_DIR/src/plugins/vendor-plugins/* $ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME/plugins/ --info=progress2
}

function watch-plugins () {
  echo 'this should watch src/plugins and keep it in sync with build/*/plugins and build/*/mu-plugins -<-<  to implement when needed'
  copy_must-use-plugins-src-to-build
  copy_plugins-src-to-build
}

TEMPLATE_FILES=$ROOT_DIR/src/pages
function copy_templates-src-to-build () {
  rsync -rv --mkpath $TEMPLATE_FILES/*/*.php $THEME_BUILD_TARGET --info=progress2
}

function watch-template-files () {
  fswatch -o -l 5 $TEMPLATE_FILES/*/*.php | while read num 
  do 
		copy_templates-src-to-build
  done
}

function copy_uploads-src-to-build () {
  rsync -rv --mkpath $ROOT_DIR/assets/uploads $ROOT_DIR/build/wordpress/wp-content --info=progress2
}

COMPONENT_FILES=$ROOT_DIR/src/ux-ui/components
function copy-components-src-to-build () {
  rsync -rv --mkpath $COMPONENT_FILES/*/*/*.php $THEME_BUILD_TARGET --info=progress2
}

function watch-components () {
  fswatch -xrv -l 5 $COMPONENT_FILES/*/*/*.php | while read num 
  do 
		copy-components-src-to-build
  done
}

function copy_src_files () {
  copy_fe_assets-src-to-build
  copy_required-src-to-build
  copy_includes-src-to-build
  copy_must-use-plugins-src-to-build
  copy_plugins-src-to-build
  copy_templates-src-to-build
  copy_uploads-src-to-build
  copy-components-src-to-build

}

# not needed because rsync --mkpath solves the problem

# function copy-source-to-build-files () {
#   	if [ -d $ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME ]; then 
#     echo " <----> [ START ] <----> COPY $PROJECT_NAME theme required files"
#     echo " " 
# 		copy_src_files
#     echo " "
#     echo " <----> [ DONE ] <----> COPY $PROJECT_NAME theme required files"
# 	else 
# 		echo " <----> [CREATED new theme directory <---->]"
# 		mkdir -p $ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME
# 		copy_src_files
# 	fi \
# }

function uni-web-start-watchers () {
  watch-dist-assets | watch-template-files | watch-required-files | watch-components
} 

