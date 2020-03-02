##-----------------------Adding network-------------------------##
docker network create dbnet
docker network connect dbnet oracledb_db_1
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