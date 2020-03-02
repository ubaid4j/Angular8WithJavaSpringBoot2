##-----------------------Adding network-------------------------##
## -> Creating a network 
## -> then adding oracledb_db_1 in this network
docker network create dbnet
docker network connect --alias db dbnet oracledb_db_1
##----------------------Ending Adding network-------------------##

cd gateway-server
mvn clean package -DskipTests
cd ..
cd naming-server
mvn clean package -DskipTests
cd ..
cd rest-client
mvn clean package -DskipTests
cd ..
cd todo-service
mvn clean package -DskipTests
cd ..
docker-compose up --build