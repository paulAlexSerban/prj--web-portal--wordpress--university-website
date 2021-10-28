#!bin/bash
. config/config.dev.env
echo -e "${BLUE}ACCESSED project.bash ${NC}"

function start () {
  bash scripts/install.bash start-docker
}

function install () {
  for t in ${INSTALL_PROJECT_MODULES[@]}; do
    bash $t/module.bash install
  done
}

function uninstall () {
  for t in ${UNINSTALL_PROJECT_MODULES[@]}; do
    bash $t/module.bash uninstall
  done
}

$1