import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todo/list-todo.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;


  constructor(
    private service: TodoDataService,
    private route: ActivatedRoute  
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(1,'',false,new Date)
    this.service.updateTodoService("Ravi",this.id).subscribe(
      data => this.todo = data
    );
    
  }

  updateTodo(){
    console.log('update todo event fired');
  }

  
}
