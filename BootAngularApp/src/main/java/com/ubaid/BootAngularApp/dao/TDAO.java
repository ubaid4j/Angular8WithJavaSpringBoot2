package com.ubaid.BootAngularApp.dao;

import java.util.List;

import com.ubaid.BootAngularApp.entity.Todo;

public interface TDAO
{
	public List<Todo> getAllTodos(String username);
	public Todo deleteTodo(String username, int id);
	public Todo getTodo(String username, int id);

}
