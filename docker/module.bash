#!bin/bash 
. config/config.dev.env
echo "ACCESSED docker/module.bash"

function start () {
  echo " ------- [ START ] <----> [ uni-web-start-docker ] -------- "
  echo " "
  echo " - build the images before starting docker containers"
  echo " - aggregates the output of each docker container in detach mode"
  echo " - starting the docker containers in the background and leaving them running"
  echo " "
  docker-compose --env-file $ROOT_DIR/config/config.dev.env -f $ROOT_DIR/docker/docker-compose.yml up -d --build
  echo " "
  echo " ------- [ DONE ] <----> [ uni-web-start-docker ] -------- "
}

function configure-wp () {
  echo " ------- [ START ] <----> [ uni-web-install-docker-project ] -------- "
  echo " "
  echo " - start and run in a new container the wordpress auto configuration docker container"
  echo " - the container gets removed after configuratoin is done"
  echo " "
  docker-compose --env-file $ROOT_DIR/config/config.dev.env -f $ROOT_DIR/docker/docker-compose.yml -f $ROOT_DIR/docker/wp-auto-config.yml run --rm wp-auto-config
  echo " "
  echo " ------- [ DONE ] <----> [ uni-web-install-docker-project ] -------- "
}

function stop-docker ()  {
  echo " ------- [ START ] <----> [ uni-web-stop-docker ] -------- "
  echo " "
  echo " - stops containers and removes containers, networks, volumes, and images created by uni-web-start-docker"
  echo " - Remove named volumes declared in the `volumes` section of the Compose file and anonymous volumes attached to containers " 
  echo " "
  docker-compose --env-file $ROOT_DIR/config/config.dev.env -f $ROOT_DIR/docker/docker-compose.yml down -v 
  echo " "
  echo " ------- [ DONE ] <----> [ uni-web-stop-docker ] -------- "
}

function remove-docker-volumes () {
  echo "remove all unused docker volumes"
  docker volume prune -f
}

function remove-docker-iamges () {
  echo "remove all images"
  docker image prune -af
}

function install () {
  start
  configure-wp
}

function uninstall () {
  stop-docker
  remove-docker-volumes
  remove-docker-iamges
}

$1