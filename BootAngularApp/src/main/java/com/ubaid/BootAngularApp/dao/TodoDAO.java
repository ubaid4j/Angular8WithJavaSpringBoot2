package com.ubaid.BootAngularApp.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.ubaid.BootAngularApp.entity.Todo;

@Repository
public class TodoDAO implements TDAO
{

	private static List<Todo> todos = new ArrayList<Todo>();
	private static int counter;
	static {
		todos.add(new Todo(++counter, "ubaid", "Go to Market", new Date(), false));
		todos.add(new Todo(++counter, "ubaid", "Go to Bazar", new Date(), false));
		todos.add(new Todo(++counter, "ubaid", "Go to School", new Date(), false));
		todos.add(new Todo(++counter, "ubaid", "Bring Items", new Date(), false));
		todos.add(new Todo(++counter, "ubaid", "Get Work done", new Date(), false));
		todos.add(new Todo(++counter, "ubaid", "Who are you", new Date(), false));
		todos.add(new Todo(++counter, "ubaid", "Angular", new Date(), false));
		todos.add(new Todo(++counter, "ubaid", "Drink water", new Date(), false));
		todos.add(new Todo(++counter, "ubaid", "Bring Chapstick", new Date(), false));
		todos.add(new Todo(++counter, "ubaid", "Take a shower", new Date(), false));

	}
	
	
	@Override
	public List<Todo> getAllTodos(String username)
	{
		return todos;
	}


	@Override
	public Todo deleteTodo(String username, int id)
	{
		Todo todo = getTodo(username, id);
		if(todos.remove(todo))
			return todo;
		return null;
	}


	@Override
	public Todo getTodo(String username, int id)
	{
		for(Todo todo : todos)
		{
			if(todo.getId() == id)
				return todo;
		}
		return null;
	}

	@Override
	public Todo save(String username, Todo todo)
	{
		if(todo.getId() == -1 || todo.getId() == 0)
		{
			//will add
			todo.setId(++counter);
			todo.setUserName(username);
			todos.add(todo);
			return todo;
		}
		else
		{
			//will update
			deleteTodo(username, todo.getId());
			todos.add(todo);
			return todo;
		}
	}	
}
