import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';


export class Todo{

    // class created and constructor parameter is passed. all parameters are act also member variable
  constructor (
    public id: number, 
    public description: string, 
    public done: boolean, 
    public targetDate: Date
    )
    {

  }
}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  deleteMessage: string;
  // we can hold the single data using object.
  // todo = {
  //   id : 1 , description : 'Learning Angular js1'
  // };
  // we can hold more values using array of objects . 
  
  todos: Todo[]

  /*[   this is test data hardcoded values.
    new Todo(1,"Descrition 1",false, new Date()),        
    new Todo(2,"Description 2 ", false, new Date()),
    new Todo(3,"Description 3", false, new Date()),
    new Todo(4,"Description 4", false, new Date())

    // {id : 1 , description : 'Learning Angular js1'},
    // {id : 2 , description : 'Learning Angular js script2'},
    // {id : 3 , description : 'Learning Angular js script3'},
    // {id : 4 , description : 'Learning Angular js script4'}
  ];*/
  constructor(
    private todoDataService: TodoDataService, // injecting todoData service object
    private router: Router

  ) { 

  }

  ngOnInit(): void {
    this.refreshTodo();
  }

  deleteTodo(id){
    console.log(`todo ivoked ${id}`);

    this.todoDataService.deleteTodoService("Ravi",id).subscribe(
        response => {
          this.deleteMessage = `todo of ${id} deleted successfully`;
          this.refreshTodo();
        }              
    );

  }

  updateTodo(id: number){
    console.log(`todo ivoked ${id}`);
    this.router.navigate(['update',id]);
  }

  addTodo(){
    
    this.router.navigate(['update',-1]);
  }

  refreshTodo(){
    // retriving the all todos data from spring boot 
    this.todoDataService.retriveAllTodosData("Ravi").subscribe(     // it also used for refresh method once the data deleted.
      response => {                                                 // it invokes every time component load from ngOnInit()
        this.todos = response;
      }
   );
  }

}
