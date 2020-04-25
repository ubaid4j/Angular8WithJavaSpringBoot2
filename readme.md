### About This Application
- It has
    - 1 Microservice todo-serivce (todo-service)
    - 1 Naming Server (naming-server)
    - 1 API Gateway Server (gateway-server)
    - 1 Rest Client Server (rest-client)
    - 1 Front End Application in Angular (todo)
- These all services and angular applications are containerized in docker

### todo-service
- Connected with mySQL [port:3307]
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
- Make sure you have Docker v19
- Execute ``` run.sh ``` 
- You can access application using 
  - http://localhost:4200