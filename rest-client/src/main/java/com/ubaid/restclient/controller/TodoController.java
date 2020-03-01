package com.ubaid.restclient.controller;

import com.ubaid.restclient.entity.Todo;
import com.ubaid.restclient.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("users")
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {
    @Autowired
    TodoService service;
    //get all
    @GetMapping("{userName}/todos")
    public List<Todo> getAllTodos(@PathVariable String userName)
    {
        return service.getAllTodo(userName);
    }


    //delete one
    @DeleteMapping("{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable int id)
    {
        return service.deleteTodo(username, id);
    }

    //get one
    @GetMapping("{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable int id)
    {
        return service.getTodo(username, id);
    }

    //add
    @PostMapping("{username}/todos")
    public ResponseEntity<Todo> addTodo(@PathVariable String username, @RequestBody Todo todo)
    {
        return service.addTodo(username, todo);
    }

    //update
    @PutMapping("{username}/todos")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @RequestBody Todo todo)
    {
        return service.updateTodo(username, todo);
    }
}
