#!/bin/bash
source ~/Desktop/MY_projects/University-Website/.env

function install-fe-build () {
  echo " <----> [ START ] <----> INSTALLING npm dependencies"
  echo " "
  cd $ROOT_DIR/$SRC_DIR && npm install
  echo " "
  echo " <----> [ DONE ] <----> INSTALLED npm dependencies"
}

function delete-fe-build-modules () {
  echo " <----> [ START ] <----> DELETING npm dependencies"
  echo " "
  rm -rfv $ROOT_DIR/$SRC_DIR/node_modules
  echo " "
  echo " <----> [ DONE ] <----> DELETING npm dependencies"
}

function clean-project () {
  echo " <----> [ START ] <----> 💥  Removing related folders/files of $PROJECT_NAME theme required files "
  echo " "
	echo " Cleaning ./build/mysql directory of temporary files "
  echo " Cleaning ./build/wordpress directory of temporary files "
  echo " "
	rm -rfv $ROOT_DIR/build/mysql/* $ROOT_DIR/build/wordpress/*
  echo " "
  echo " <----> [ DONE ] <----> 💥  Removing related folders/files of $PROJECT_NAME theme required files"
}

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

function start-university-website-docker () {
  docker-compose --env-file $ROOT_DIR/.env -f $ROOT_DIR/config/docker/docker-compose.yml up -d --build 
}

function stop-university-website-docker ()  {
  docker-compose --env-file $ROOT_DIR/.env -f $ROOT_DIR/config/docker/docker-compose.yml down -v 
}

function install-university-website-docker-project () {
  start-university-website-docker
  docker-compose --env-file $ROOT_DIR/.env -f $ROOT_DIR/config/docker/docker-compose.yml -f $ROOT_DIR/config/docker/wp-auto-config.yml run --rm wp-auto-config
}

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


function copy-test () {
  rsync -rv $TEMPLATE_FILES/*/* $THEME_BUILD_TARGET --info=progress2
  rsync -rv $COMPONENT_FILES/*/*/*.php $THEME_BUILD_TARGET --info=progress2
}


