import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  // we can hold the single data using object.
  // todo = {
  //   id : 1 , description : 'Learning Angular js1'
  // };
  // we can hold more values using array of objects
  todos = [
    {id : 1 , description : 'Learning Angular js1'},
    {id : 2 , description : 'Learning Angular js script2'},
    {id : 3 , description : 'Learning Angular js script3'},
    {id : 4 , description : 'Learning Angular js script4'}
  ];
  constructor() { }

  ngOnInit(): void {

  }

}
