package com.fullstack.backend.fullstackapplication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

import com.fullstack.backend.fullstackapplication.service.HardCodedService;
import com.fullstack.backend.fullstackapplication.todobean.Todo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoController {

	@Autowired
	private HardCodedService todoHService;

	// GetTodos list
	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username) {
		
		return todoHService.findAll(username);
	}

	// GetTodo
	@GetMapping("/users/{username}/todos/{id}")
	public Todo getAllTodos(@PathVariable String username, @PathVariable long id) {
		return (Todo)todoHService.findById(id);
	}

	// DELETE /users/{user_name}/todo/{id}
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable String username, @PathVariable long id) {
		Todo todo = todoHService.deleteById(id);

		if (todo == null) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.noContent().build();
	}
	
	// Update(PUT) /users/{user_name}/todo/{id}
		@PutMapping("/users/{username}/todos/{id}")
		public ResponseEntity<Todo> update(@PathVariable String username, 
				@PathVariable long id,@RequestBody Todo todo) {
			Todo updateTodo = todoHService.update(todo);

			return new ResponseEntity<Todo>(updateTodo,HttpStatus.OK);
		}
		
		// create (POST) /users/{user_name}/todo/{id}
				@PostMapping("/users/{username}/todos")
				public ResponseEntity<Void> create(@PathVariable String username, 
						@RequestBody Todo todo) {
					Todo createdTodo = todoHService.update(todo);
					
					URI uri = ServletUriComponentsBuilder.fromCurrentRequest().
							path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

					return ResponseEntity.created(uri).build();
				}

}
