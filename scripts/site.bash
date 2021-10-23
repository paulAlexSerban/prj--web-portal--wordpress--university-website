function copy_required () {
  cp -rv $ROOT_DIR/src/required/* $ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME
}

function copy_includes () {
  cp -rv $ROOT_DIR/src/includes $ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME
}

function copy_must-use-plugins () {
  cp -rv $ROOT_DIR/src/mu-plugins $ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME
}

function copy_plugins () {
  cp -rv $ROOT_DIR/src/plugins $ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME
}

function copy_templates () {
  cp -rv $ROOT_DIR/src/templates/* $ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME
}

function copy_uploads () {
  cp -rv $ROOT_DIR/assets/uploads $ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME
}


function copy_files () {
  copy_required
  copy_includes
  copy_must-use-plugins
  copy_plugins
  copy_templates
  copy_uploads
}

function copy-source-to-build-files () {
  	if [ -d $ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME ]; then 
    echo " <----> [ START ] <----> COPY $PROJECT_NAME theme required files"
    echo " " 
		copy_files
    echo " "
    echo " <----> [ DONE ] <----> COPY $PROJECT_NAME theme required files"
	else 
		echo " <----> [CREATED new theme directory <---->]"
		mkdir -p $ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME
		copy_files
	fi \
}

function copy-test () {
  rsync -rv $TEMPLATE_FILES/*/* $THEME_BUILD_TARGET --info=progress2
  rsync -rv $COMPONENT_FILES/*/*/*.php $THEME_BUILD_TARGET --info=progress2
}

function pre-site () {
  echo "execute processes needed prior to the actual project site generation - clean dist and build/*/*/wordpress"
}

function site () {
  echo "generate the project's site - fe-build compilation to dist"
}

function post-site () {
  echo "execute processes needed to finalize the site generation, and to prepare for site deployment"
}

function site-deploy () {
  echo "deploy the generated site files to the build/*/*/wordpress"
}

