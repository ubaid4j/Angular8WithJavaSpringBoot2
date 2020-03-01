package com.ubaid.restclient.service;

import com.ubaid.restclient.entity.Todo;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface TodoService {
    public Todo getTodo(String username, int id);
    public List<Todo> getAllTodo(String username);
   public ResponseEntity<Void> deleteTodo(String username, int id);
   public ResponseEntity<Todo> updateTodo(String username, Todo todo);
   public ResponseEntity<Todo> addTodo(String username, Todo todo);
}
