#!/bin/bash
source ~/Desktop/MY_projects/University-Website/.env
UPDATED_PLUGINS=$ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME/plugins
UPDATED_UPLOADS=$ROOT_DIR/build/wordpress/wp-content/themes/$PROJECT_NAME/uploads
SRC_PLUGINS=$ROOT_DIR/src/plugins/vendor-plugins
ASSETS_DIR=$ROOT_DIR/assets

function backup-plugins-and-uploads () {
  echo " ------- [ START ] <----> [ backup-plugins-and-uploads ] -------- "
  echo " "
  rsync -rv $UPDATED_PLUGINS/* $SRC_PLUGINS --info=progress2
  echo " START BACKUP Plugins"
	rsync -rv $UPDATED_UPLOADS $ASSETS_DIR --info=progress2
  echo " START BACKUP Assets"
  echo " "
  echo " ------- [ DONE ] <----> [ backup-plugins-and-uploads ] -------- "
}

function copy-db-bkp-to-build () {
  	rsync -rv $ROOT_DIR/db/main/main.backup.sql $ROOT_DIR/build/mysql/ --info=progress2
}

function save-fail-safe-bkp () {
    echo " ------- [ START ] <----> [ save-fail-safe-bkp ] -------- "
    echo " "
    echo " - creaticg Database fail-safe-backup "
    echo " "
  	if [ -f $ROOT_DIR/db/main/main.backup.sql ]; then 
		echo 'SAVING database backup'; 
		rsync -rv $ROOT_DIR/db/main/main.backup.sql $ROOT_DIR/db/backup/saved.backup.`date +%Y-%m-%d---%T`.sql --info=progress2; 
		echo 'SAVED database backup';
	else 
		echo 'NO database backup to save'; 
	fi \
}

function backup-db () {
  save-fail-safe-bkp
	docker exec ${COMPOSE_PROJECT_NAME}_mysql /usr/bin/mysqldump -u root --password=${DATABASE_PASSWORD} ${COMPOSE_PROJECT_NAME} > $ROOT_DIR/db/main/main.backup.sql
}

function restore-db-from-backup () {
  	if [ -f $ROOT_DIR/db/main/main.backup.sql ]; then 
		echo 'RESTORING database'; 
		copy-db-bkp-to-build;
		docker exec -it ${COMPOSE_PROJECT_NAME}_mysql bash -c "mysql -u root --password=${MYSQL_ROOT_PASSWORD} ${COMPOSE_PROJECT_NAME} < /var/lib/mysql/main.backup.sql"; 
		echo 'RESTORED database'; 
	else \
		echo 'NO database to restore'; \
	fi \
}

