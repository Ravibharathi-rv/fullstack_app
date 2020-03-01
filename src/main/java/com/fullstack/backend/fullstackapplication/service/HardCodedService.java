package com.fullstack.backend.fullstackapplication.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.fullstack.backend.fullstackapplication.todobean.Todo;

@Service
public class HardCodedService {

	private static List<Todo> todos = new ArrayList<Todo>();
	private static int count = 0;
	static {
		todos.add(new Todo(++count, "Ravibharathi", "Learning fullstack application", new Date(), false));
		todos.add(new Todo(++count, "Ravi", "Learning Angular application", new Date(), true));
		todos.add(new Todo(++count, "bharathi", "Learning fullstack application in udemy", new Date(), false));
		todos.add(new Todo(++count, "Rv", "Learning fullstack application", new Date(), true));
		todos.add(new Todo(++count, "Suriya", "in28Minutes teaching full stack application", new Date(), false));
	}

	public List<Todo> findAll(@PathVariable String username) {
		return todos;
	}

	public Todo deleteById(@PathVariable long id) {

		Todo todo = findById(id);
		
		if(todo == null) return null;
		
		if(todos.remove(todo))
		{
			return todo;
		}
		
		return null;

	}

	public Todo findById(long id) {
		for (Todo todo : todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
	
	//update / create
	public Todo update(Todo todo) {
		
		if(todo.getId() == -1 || todo.getId() == 0)
		{
			todo.setId(++count);
			todos.add(todo);
		}
		else
		{
			deleteById(todo.getId());
			todos.add(todo);
		}
		
		return todo;
	}
}
