# University-Website

## Install - Deploy - Build
> Build automation tool - "Make" configured with "Makefile"

### Commands
* `make install-build`
    - install the Front End build system and its dependencies
    - this command needs to be run every time a fresh copy of the project is instantiated

* `make build-dev` OR `make build-prod`
    - run the build tasks for the desired purpose
    - NOTE - the production build takes more time

* `make install-project`
    - builds and starts development containers, and if there is any database it will save the backup in case of issues and then restore inject it into you project

* make clean-project
    - creates a backup of the database
    - makes a backup of the projects edits such as installed plugins and uploads
    - stops the containers
    - removes al volumes
    - deletes dist files 

## Git Strategy
> this project is using *Git Submodules* as it has been spit in multiple projects
* to clone it run `git clone --recurse-submodules https://...`
* to push the changes run `git push --recurse-submodules=on-demand`
    - this command will push all changes including submodules

### DEV Notes
* if using linux as development enviorment
* install `inotofywait` with `sudo apt install inotify-tools`