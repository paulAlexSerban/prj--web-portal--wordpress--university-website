#!bin/bash 
. config/config.dev.env
echo "ACCESSED assets/module.bash"

function install () {
  echo -e "${RED} NO install script for the build module so far"
}

function uninstall () {
  echo -e "${RED} <----> [ START ] <----> 💥💥💥  Removing build files from ./build 💥💥💥"
  echo " "
	echo " Cleaning ./build/mysql directory of temporary files "
  echo " Cleaning ./build/wordpress directory of temporary files "
  rm -Rfv $ROOT_DIR/build/mysql/*
  rm -Rfv $ROOT_DIR/build/wordpress/*
  echo " "
  echo " <----> [ DONE ] <----> 💥💥💥  Removing build files from ./build 💥💥💥"
}

$1