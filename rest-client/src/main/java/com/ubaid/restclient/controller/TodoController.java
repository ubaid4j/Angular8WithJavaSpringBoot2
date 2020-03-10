package com.ubaid.restclient.controller;

import com.ubaid.restclient.entity.Todo;
import com.ubaid.restclient.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("users")
@CrossOrigin(origins = "*")
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
        Todo todo = service.deleteTodo(username, id);

        if(todo != null)
            return ResponseEntity.ok().build();
        return ResponseEntity.notFound().build();
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
        todo = service.addTodo(username, todo);

        if(todo != null)
		{
			URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(todo.getId()).toUri();
			System.out.println(todo);
			return ResponseEntity.created(uri).build();
		}
		return ResponseEntity.unprocessableEntity().build();
    }

    //update
    @PutMapping("{username}/todos")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @RequestBody Todo todo)
    {
        todo = service.updateTodo(username, todo);
        if (todo != null)
		{
			System.out.println(todo);
			return ResponseEntity.ok(todo);
		}
		return ResponseEntity.notFound().build();

    }
}
