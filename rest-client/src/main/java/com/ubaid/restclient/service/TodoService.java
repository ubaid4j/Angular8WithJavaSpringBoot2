package com.ubaid.restclient.service;

import com.ubaid.restclient.entity.Todo;

import java.util.List;

public interface TodoService {
    public Todo getTodo(String username, int id);
    public List<Todo> getAllTodo(String username);
    public Todo deleteTodo(String username, int id);
    public Todo updateTodo(String username, Todo todo);
    public Todo addTodo(String username, Todo todo);
}
