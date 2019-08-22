package com.ubaid.BootAngularApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ubaid.BootAngularApp.dao.TDAO;
import com.ubaid.BootAngularApp.entity.Todo;

@Service
public class TodoService implements TService
{
	@Autowired
	TDAO todoDAO;
	
	@Override
	public List<Todo> getAllTodos(String userName)
	{
		return todoDAO.getAllTodos(userName);
	}
}
