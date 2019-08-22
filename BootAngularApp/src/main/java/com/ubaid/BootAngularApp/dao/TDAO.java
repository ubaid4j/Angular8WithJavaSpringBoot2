package com.ubaid.BootAngularApp.dao;

import java.util.List;

import com.ubaid.BootAngularApp.entity.Todo;

public interface TDAO
{
	public List<Todo> getAllTodos(String username);
}
