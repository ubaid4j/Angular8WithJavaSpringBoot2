package com.ubaid.BootAngularApp.service;

import java.util.List;

import com.ubaid.BootAngularApp.entity.Todo;

public interface TService
{
	public List<Todo> getAllTodos(String username);
}
