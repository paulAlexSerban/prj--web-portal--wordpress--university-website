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

* make start
* make stop
* make clean

## Git Strategy
> this project is using *Git Submodules* as it has been spit in multiple projects
* to clone it run `git clone --recurse-submodules https://...`