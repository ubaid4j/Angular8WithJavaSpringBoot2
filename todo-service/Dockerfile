FROM maven:3.6.3-jdk-14 as target
WORKDIR /opt/service/
COPY pom.xml .
RUN mvn dependency:go-offline

COPY src/ /opt/service/src
RUN mvn package -DskipTests

FROM openjdk:14-jdk-buster
LABEL maintainer="urehman.bese16seecs@seecs.edu.pk"
VOLUME /tmp
EXPOSE 9001
COPY --from=target /opt/service/target/todo-service-0.0.1-SNAPSHOT.jar service.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","service.jar"]


#FROM openjdk:13-alpine
#LABEL maintainer="urehman.bese16seecs@seecs.edu.pk"
#VOLUME /tmp
#EXPOSE 9001
#ARG JAR_FILE=target/todo-service-0.0.1-SNAPSHOT.jar
#ADD ${JAR_FILE} service.jar
#ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","service.jar"]