package com.ubaid.BootAngularApp.service;

import java.util.List;

import com.ubaid.BootAngularApp.entity.Todo;

public interface TService
{
	public List<Todo> getAllTodos(String username);
	public Todo deleteTodo(String username, int id);
	public Todo getTodo(String username, int id);
	public Todo save(String username, Todo todo);
}
