#!bin/bash 
. config.dev.env

function load_database () {
	cp -rfv backend/database/mysql/source/university_website.sql backend/database/mysql/dist;
	docker exec -it ${COMPOSE_PROJECT_NAME}_mysql bash -c "mysql -u root --password=${MYSQL_ROOT_PASSWORD} ${COMPOSE_PROJECT_NAME} < /var/lib/mysql/university_website.sql"; 
}

function save_database () {
	if docker container ls -a | grep -Fq ${COMPOSE_PROJECT_NAME}_mysql 1>/dev/null; 
	then \
		cp -rfv backend/database/mysql/source/university_website.sql backend/database/mysql/backup/university_website.backup.`date +%Y-%m-%d--%T`.sql;
  	docker exec ${COMPOSE_PROJECT_NAME}_mysql /usr/bin/mysqldump -u root --password=${DATABASE_PASSWORD} ${COMPOSE_PROJECT_NAME} > backend/database/mysql/source/university_website.sql;
	else \
		echo "Could not found container ${COMPOSE_PROJECT_NAME}_mysql ..."
	fi \
}

$1

