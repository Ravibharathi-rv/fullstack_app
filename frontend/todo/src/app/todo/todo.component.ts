import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date)

    if (this.id != -1) {
      this.service.retriveTodoService("Ravi", this.id).subscribe(
        data => this.todo = data
      );
    }
    else{
      this.service.createTodoService("Ravi",this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(["list-todo"]);
        }
      );
    }
  }

  updateDataTodo() {
    this.service.updateTodoService("Ravi", this.id, this.todo).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['list-todo']) // redirect to todos page when successfully updated.
      }
    );
  }


}
