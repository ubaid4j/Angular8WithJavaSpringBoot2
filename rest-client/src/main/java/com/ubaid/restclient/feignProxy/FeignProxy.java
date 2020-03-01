package com.ubaid.restclient.feignProxy;

import com.ubaid.restclient.entity.Todo;
import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "gateway-server")
@RibbonClient(name = "todo-service")
public interface FeignProxy {
    @GetMapping("todo-service/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable("username") String username);

    @GetMapping("todo-service/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable("username") String username, @PathVariable("id") int id);

    @PostMapping("todo-service/users/{username}/todos")
    public ResponseEntity<Todo> addTodo(@PathVariable("username") String username, @RequestBody Todo todo);

    @PutMapping("todo-service/users/{username}/todos")
    public ResponseEntity<Todo> updateTodo(@PathVariable("username") String username, @RequestBody Todo todo);

    @DeleteMapping("todo-service/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable("username") String usernname, @PathVariable("id") int id);
}
