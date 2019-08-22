package com.ubaid.BootAngularApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ubaid.BootAngularApp.entity.Todo;
import com.ubaid.BootAngularApp.service.TService;

@RestController
@RequestMapping("users")
public class TodoController
{
	@Autowired
	TService todoService;
	
	@RequestMapping("{userName}/todos")
	public List<Todo> getAllTodos(@PathVariable String userName)
	{
		return todoService.getAllTodos(userName);
	}
}
