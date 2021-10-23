function uni-web-start-docker () {
  docker-compose --env-file $ROOT_DIR/.env -f $ROOT_DIR/config/docker/docker-compose.yml up -d --build 
}

function uni-web-stop-docker ()  {
  docker-compose --env-file $ROOT_DIR/.env -f $ROOT_DIR/config/docker/docker-compose.yml down -v 
}

function uni-web-install-docker-project () {
  uni-web-start-docker
  docker-compose --env-file $ROOT_DIR/.env -f $ROOT_DIR/config/docker/docker-compose.yml -f $ROOT_DIR/config/docker/wp-auto-config.yml run --rm wp-auto-config
}

function install-fe-build () {
  echo " <----> [ START ] <----> INSTALLING npm dependencies"
  echo " "
  cd $ROOT_DIR/$SRC_DIR && npm install
  echo " "
  echo " <----> [ DONE ] <----> INSTALLED npm dependencies"
}

function install () {
  echo "install the package into the local repository, for use as a dependency in other projects locally."
}

function build () {
  echo "preapare package before deploy"
}

function deploy () {
  echo "done in an integration or release environment, copies the final package to the remote repository for sharing with other developers and projects."
}