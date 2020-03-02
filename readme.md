### About This Application
- It has 
 - 1 Microservice todo-serivce (BootAngularApp Directory)
 - 1 Naming Server
 - 1 API Gateway Server
 - 1 Rest Client Server

### todo-service
- Connected with Oracle DB 19
- Port
  - 9001


### naming-server
- Port
  - 8761

### gateway-server
- Port
  - 8755

### rest-client-service
- Port
  - 8080

### Where to check Rabbit MQ Messages
- http://localhost:9411

# How to run
- Set up database
  - do ``` git clone https://github.com/UbaidurRehman1/database_docker_compose.git ```
  - set up oracle db as mention
    - After running ``` run.sh ``` execute all the commadns given below
  - wait till Oracle database comes to up
- Now execute ``` run.sh ``` 
- You can access application using 
  - http://localhost:4200