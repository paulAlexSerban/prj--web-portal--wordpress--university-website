#!/bin/bash
THEME_BUILD_TARGET=$ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME
DISTRIBUTION_ASSEST_TO_WATCH=$ROOT_DIR/src/dist
REQUIRED_FILES=$ROOT_DIR/src/required
TEMPLATE_FILES=$ROOT_DIR/src/pages
COMPONENT_FILES=$ROOT_DIR/src/ux-ui/components

function copy_required-src-to-build () {
  rsync -rv --mkpath $REQUIRED_FILES/* $THEME_BUILD_TARGET/ --info=progress2
}

function copy_templates-src-to-build () {
  rsync -rv --mkpath $TEMPLATE_FILES/*/*.php $THEME_BUILD_TARGET --info=progress2
}

function copy-components-src-to-build () {
  rsync -rv --mkpath $COMPONENT_FILES/*/*/*.php $THEME_BUILD_TARGET --info=progress2
}

function copy_fe_assets-src-to-build () {
  rsync -rv --mkpath $DISTRIBUTION_ASSEST_TO_WATCH/*/* $THEME_BUILD_TARGET/assets --info=progress2
}

function copy_must-use-plugins-src-to-build () {
  rsync -rv --mkpath $ROOT_DIR/src/plugins/mu-plugins $ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME --info=progress2
}

function copy_plugins-src-to-build () {
  rsync -rv --mkpath $ROOT_DIR/src/plugins/vendor-plugins/* $ROOT_DIR/build/wordpress/wp-content/plugins/ --info=progress2
}

function copy_uploads-src-to-build () {
  rsync -rv --mkpath $ROOT_DIR/assets/uploads $ROOT_DIR/build/wordpress/wp-content --info=progress2
}



function copy_includes-src-to-build () {
  rsync -rv --mkpath $ROOT_DIR/src/includes $ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME --info=progress2
}

function cleaning-pre-intalled-plugins () {
  rm -rf $ROOT_DIR/build/wordpress/wp-content/plugins/*
}

function copy_src_files () {
  cleaning-pre-intalled-plugins

  copy_required-src-to-build
  copy_templates-src-to-build
  copy-components-src-to-build
  copy_fe_assets-src-to-build
  copy_must-use-plugins-src-to-build
  copy_plugins-src-to-build
  copy_uploads-src-to-build
  copy_includes-src-to-build
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


