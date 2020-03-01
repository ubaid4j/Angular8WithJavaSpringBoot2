package com.ubaid.BootAngularApp.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ubaid.BootAngularApp.dao.TodoJPARepository;
import com.ubaid.BootAngularApp.entity.Todo;

@Service
public class TodoJPAService implements TService
{

	@Autowired
	private TodoJPARepository repo;
	
	@Override
	public List<Todo> getAllTodos(String username)
	{
		return repo.findAllByUserName(username);
	}

	@Override
	@Transactional
	public Todo deleteTodo(String username, int id)
	{
		Todo todo = repo.getOne(id);
		int result = repo.delete(id, username);
		if(result > 0)
			return todo;
		return null;
	}

	@Override
	public Todo getTodo(String username, int id)
	{
		return repo.getTodo(id, username);
	}

	@Override
	@Transactional
	public Todo save(String username, Todo todo)
	{
		System.out.println("[INFO]: " + todo);
		todo.setUserName(username);
		if(todo.getId() == 0)
		{
			return repo.save(todo);
		}
		else
		{
			repo.update(todo.getDescription(), todo.isDone(), todo.getTargetDate(), todo.getId(), todo.getUserName());
			return todo;
		}
	}

}
