#!/bin/bash
. config/config.dev.env
echo -e " ${GREEN} ACCESSED assets/module.bash ${NC}"

function install () {
  echo -e "${BLUE} --> [ INSTALL ] uploads/assets"
  echo -e "${BLUE} --> [ BACKUP ] uploads ${GREEN} "
  rsync -rv --mkpath $ASSETS_DIR/uploads $WORDPRESS_WP_CONTENT --info=progress2
  echo -e " ${GREEN} --> BACKUP uploads ${NC}"
}

function uninstall () {
  echo -e "${BLUE} --> [ UNINSTALL ] uploads/assets"
  echo -e "${BLUE} --> [ BACKUP ] uploads"
  rsync -rv --mkpath $WORDPRESS_WP_CONTENT/uploads $ASSETS_DIR --info=progress2
  echo -e " ${GREEN} --> [ BACKUP ] uploads"
}

$1