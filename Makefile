include .env
# in this file the commands to START the development containars, BUILD the project and COPY source files to the containers

install-build:
	cd ${SRC_DIR} && sudo npm install

build-dev:
	cd ${SRC_DIR} && sudo npm run build-dev

build-prod:
	cs ${SRC_DIR} && sudo npm run build-prod

start: copy-src
	sudo docker-compose -f ./${DEV_DIR}/config/docker/docker-compose.yml up -d --build

install-project: start
	sudo docker-compose -f ./${DEV_DIR}/config/docker/docker-compose.yml -f ${DEV_DIR}/config/docker/wp-auto-config.yml run --rm wp-auto-config && make restore-db

stop: backup-edits
	docker-compose -f ./${DEV_DIR}/config/docker/docker-compose.yml down -v 

clean-project: backup-db stop
	echo "💥 Removing related folders/files..."
	@sudo rm -rf ./${DEV_DIR}/dist/mysql/* ./${DEV_DIR}/dist/wordpress/*

copy-src:
	if [ -d ${DEV_DIR}/dist/wordpress/wp-content/themes/${PROJECT_NAME} ]; then \
		echo 'Copy required files'; \
		sudo make copy_files; \
	else \
		echo "Creating theme directory";\
		sudo mkdir -p ./${DEV_DIR}/dist/wordpress/wp-content/themes/${PROJECT_NAME}; \
		sudo make copy_files; \
	fi \

backup-edits:
	cp -rv ./${WP_CONTENT}/themes/${PROJECT_NAME}/plugins ./${SRC_DIR}
	cp -rv ./${WP_CONTENT}/themes/${PROJECT_NAME}/uploads ./${SRC_DIR}

#################### LOCAL VAIABLES
WP_CONTENT=${DEV_DIR}/dist/wordpress/wp-content

####################  FUNCTIONS
copy_files:
	cp -rv ./${SRC_DIR}/required/* ./${WP_CONTENT}/themes/${PROJECT_NAME}
	cp -rv ./${SRC_DIR}/templates/* ./${WP_CONTENT}/themes/${PROJECT_NAME}
	cp -rv ./${SRC_DIR}/mu-plugins ./${WP_CONTENT}/themes/${PROJECT_NAME}
	cp -rv ./${SRC_DIR}/includes ./${WP_CONTENT}/themes/${PROJECT_NAME}
	cp -rv ./${SRC_DIR}/plugins ./${WP_CONTENT}/themes/${PROJECT_NAME}
	cp -rv ./${SRC_DIR}/uploads ./${WP_CONTENT}/themes/${PROJECT_NAME}

backup-db: save-bkp
	docker exec ${COMPOSE_PROJECT_NAME}_mysql /usr/bin/mysqldump -u root --password=${DATABASE_PASSWORD} ${COMPOSE_PROJECT_NAME} > ${SRC_DIR}/db/main.backup.sql

copy-db-bkp:
	sudo cp -rv ./${SRC_DIR}/db/main.backup.sql ./${DEV_DIR}/dist/mysql/

restore-db: 
	@if [ -f ${SRC_DIR}/db/main.backup.sql ]; then \
		echo 'RESTORING database'; \
		sudo make copy-db-bkp; \
		docker exec -it ${COMPOSE_PROJECT_NAME}_mysql bash -c 'mysql -u root --password=${DATABASE_PASSWORD} ${COMPOSE_PROJECT_NAME} < /var/lib/mysql/backup.sql'; \
		echo 'RESTORED database'; \
	else \
		echo 'NO database to restore'; \
	fi \

save-bkp:
	@if [ -f ${SRC_DIR}/db/main.backup.sql ]; then \
		echo 'SAVING database backup'; \
		sudo cp -rv ${SRC_DIR}/db/main.backup.sql ${SRC_DIR}/db/saved.backup.`date +%Y-%m-%d---%T`.sql; \
		echo 'SAVED database backup';\
	else \
		echo 'NO database backup to save'; \
	fi \