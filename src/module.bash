#!bin/bash 
. config/config.dev.env




function copy_required-src-to-build () {
  rsync -rv --mkpath $REQUIRED_FILES/* $WORDPRESS_THEME_TARGET/ --info=progress2
}

function copy_templates-src-to-build () {
  rsync -rv --mkpath $TEMPLATE_FILES/*/*.php $WORDPRESS_THEME_TARGET --info=progress2
}

function copy-components-src-to-build () {
  rsync -rv --mkpath $COMPONENT_FILES/*/*/*.php $WORDPRESS_THEME_TARGET --info=progress2
}

function copy_fe_assets-src-to-build () {
  rsync -rv --mkpath $DISTRIBUTION_ASSEST_TO_WATCH/*/* $WORDPRESS_THEME_TARGET/assets --info=progress2
}

function copy_must-use-plugins-src-to-build () {
  rsync -rv --mkpath $ROOT_DIR/src/plugins/mu-plugins $ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME --info=progress2
}

function copy_plugins-src-to-build () {
  rsync -rv --mkpath $ROOT_DIR/src/plugins/vendor-plugins/* $ROOT_DIR/build/wordpress/wp-content/plugins/ --info=progress2
}

function copy_includes-src-to-build () {
  rsync -rv --mkpath $ROOT_DIR/src/includes $ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME --info=progress2
}

function cleaning-pre-intalled-plugins () {
  rm -rf $ROOT_DIR/build/wordpress/wp-content/plugins/*
}

function copy_src_files () {
  copy_required-src-to-build
  copy_templates-src-to-build
  copy-components-src-to-build
  copy_fe_assets-src-to-build
  copy_must-use-plugins-src-to-build
  copy_plugins-src-to-build
  copy_uploads-src-to-build
  copy_includes-src-to-build
}

function install () {
  npm install --prefix $SRC_DIR
  cleaning-pre-intalled-plugins
  copy_required-src-to-build
}

function uninstall () {
  echo " - backup updated plugins from ./build to ./src"
  rsync -rv --mkpath $WORDPRESS_PLUGINS/* $SRC_VENDOR_PLUGINS --info=progress2

  echo " - remove 'node-modules' from ./src"
  rm -rfv $SRC_DIR/node_modules
}

$1

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