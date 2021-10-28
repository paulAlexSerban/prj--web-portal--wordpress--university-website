#!bin/bash 
. config/config.dev.env
echo "ACCESSED assets/module.bash"

MAIN_BACKUP_FILE=$DATABASE_DIR/main/main.backup.sql

# generate database backup directly to db/main
function generate_database () {
  docker exec ${COMPOSE_PROJECT_NAME}_mysql /usr/bin/mysqldump -u root --password=${DATABASE_PASSWORD} ${COMPOSE_PROJECT_NAME} > $MAIN_BACKUP_FILE
}

# save database backup
function save-fail-safe-bkp () {
    echo " ------- [ START ] <----> [ save-fail-safe-bkp ] -------- "
    echo " "
    echo " - creaticg Database fail-safe-backup "
    echo " "
  	if [ -f $MAIN_BACKUP_FILE ]; then 
		echo 'SAVING database backup'; 
		rsync -rv $MAIN_BACKUP_FILE $DATABASE_DIR/backup/saved.backup.`date +%Y-%m-%d---%T`.sql --info=progress2; 
		echo 'SAVED database backup';
	else 
		echo 'NO database backup to save'; 
	fi \
}

# backup database 
function backup-db () {
  save-fail-safe-bkp
}

# copy database to install to build
function copy-db-bkp-to-build () {
  	rsync -rv $MAIN_BACKUP_FILE $MYSQL_DIR/ --info=progress2
}

# install database
# restore-db-from-backup
function install () {
  	if [ -f $MAIN_BACKUP_FILE ]; then 
		echo 'RESTORING database'; 
		copy-db-bkp-to-build;
		docker exec -it ${COMPOSE_PROJECT_NAME}_mysql bash -c "mysql -u root --password=${MYSQL_ROOT_PASSWORD} ${COMPOSE_PROJECT_NAME} < /var/lib/mysql/main.backup.sql"; 
		echo 'RESTORED database'; 
	else \
		echo 'NO database to restore'; \
	fi \
}

$1