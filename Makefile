# in this file the commands to START the development containars, BUILD the project and COPY source files to the containers

# copy source files from SRC to DEV
copy-src:
	@sudo bash ./DEV---University-Website/config/shell/copy-src.sh

backup-edits:
	@sudo bash ./DEV---University-Website/config/shell/backup-author-updates.sh

backup-mysql:


fe-install:
	npm install --prefix ./SRC--University-Website

fe-build-dev:
	npm run build-dev --prefix ./SRC--University-Website

fe-build-prod:
	npm run build-prod --prefix ./SRC--University-Website

start: copy-src
	@sudo docker-compose -f ./DEV---University-Website/config/docker/docker-compose.yml up -d --build

install: start
	@sudo docker-compose -f ./DEV---University-Website/config/docker/docker-compose.yml -f DEV---University-Website/config/docker/wp-auto-config.yml run --rm wp-auto-config

build:

stop: backup-edits
	docker-compose -f ./DEV---University-Website/config/docker/docker-compose.yml down -v 

clean: stop
	@echo "💥 Removing related folders/files..."
	@sudo rm -rf  ./DEV---University-Website/dist/mysql/* ./DEV---University-Website/dist/wordpress/*