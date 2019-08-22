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

	
	
}
