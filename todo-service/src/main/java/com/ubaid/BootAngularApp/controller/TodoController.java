package com.ubaid.BootAngularApp.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ubaid.BootAngularApp.entity.Todo;
import com.ubaid.BootAngularApp.service.TService;

@RestController
@RequestMapping("users")
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController
{
	
	@Autowired
	@Qualifier("todoJPAService")
	TService newService;

	
	//get all
	@GetMapping("{userName}/todos")
	public List<Todo> getAllTodos(@PathVariable String userName)
	{
		return newService.getAllTodos(userName);
	}
	
	//delete one
	@DeleteMapping("{username}/todos/{id}")
	public Todo deleteTodo(@PathVariable String username, @PathVariable int id)
	{
		return newService.deleteTodo(username, id);
	}
	
	//get one
	@GetMapping("{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable int id)
	{
		Todo todo = newService.getTodo(username, id);
		System.out.println(todo);
		return todo;
	}
	
	//add
	@PostMapping("{username}/todos")
	public Todo addTodo(@PathVariable String username, @RequestBody Todo todo)
	{
		return newService.save(username, todo);
	}
	
	//update
	@PutMapping("{username}/todos")
	public Todo updateTodo(@PathVariable String username, @RequestBody Todo todo)
	{
		return newService.save(username, todo);
	}
	
}
