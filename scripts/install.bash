#!/bin/bash

function uni-web-start-docker () {
  echo " ------- [ START ] <----> [ uni-web-start-docker ] -------- "
  echo " "
  echo " - build the images before starting docker containers"
  echo " - aggregates the output of each docker container in detach mode"
  echo " - starting the docker containers in the background and leaving them running"
  echo " "
  docker-compose --env-file $ROOT_DIR/.env -f $ROOT_DIR/config/docker/docker-compose.yml up -d --build
  echo " "
  echo " ------- [ DONE ] <----> [ uni-web-start-docker ] -------- "
}

function uni-web-install-docker-project () {
  uni-web-start-docker
  echo " ------- [ START ] <----> [ uni-web-install-docker-project ] -------- "
  echo " "
  echo " - start and run in a new container thw wordpress auto configuration docker container"
  echo " - the container gets removed after configuratoin is done"
  echo " "
  docker-compose --env-file $ROOT_DIR/.env -f $ROOT_DIR/config/docker/docker-compose.yml -f $ROOT_DIR/config/docker/wp-auto-config.yml run --rm wp-auto-config
  echo " "
  echo " ------- [ DONE ] <----> [ uni-web-install-docker-project ] -------- "
}

function install-fe-build () {
  echo " <----> [ START ] <----> [ install fe-build - npm dependencies ] -------"
  echo " "
  cd $ROOT_DIR/$SRC_DIR && npm install
  echo " "
  echo " <----> [ DONE ] <----> [ install fe-build - npm dependencies ] -------"
}

function uni-web-stop-docker ()  {
  echo " ------- [ START ] <----> [ uni-web-stop-docker ] -------- "
  echo " "
  echo " - stops containers and removes containers, networks, volumes, and images created by uni-web-start-docker"
  echo " - Remove named volumes declared in the `volumes` section of the Compose file and anonymous volumes attached to containers " 
  echo " "
  docker-compose --env-file $ROOT_DIR/.env -f $ROOT_DIR/config/docker/docker-compose.yml down -v 
  docker volume prune
  docker image prune -a
  echo " "
  echo " ------- [ DONE ] <----> [ uni-web-stop-docker ] -------- "
}