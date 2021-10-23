#!/bin/bash

function delete-fe-build-modules () {
  echo " <----> [ START ] <----> [ delete-fe-build-modules ] ----------"
  echo " "
  echo " - remove `node-modules` from ./src"
  echo " "
  rm -rfv $ROOT_DIR/src/node_modules
  echo " "
  echo " <----> [ DONE ] <----> [ delete-fe-build-modules ] ----------"
}

function detele-build-files () {
  echo " <----> [ START ] <----> 💥💥💥  Removing build files from ./build 💥💥💥"
  echo " "
	echo " Cleaning ./build/mysql directory of temporary files "
  echo " Cleaning ./build/wordpress directory of temporary files "
  rm -Rfv $ROOT_DIR/build/mysql/*
  rm -Rfv $ROOT_DIR/build/wordpress/*
  echo " "
  echo " <----> [ DONE ] <----> 💥💥💥  Removing build files from ./build 💥💥💥"
}