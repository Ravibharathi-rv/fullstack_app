import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todo/list-todo.component';
import { HttpClient, HttpHeaders  } from '@angular/common/http';




// this service retirves the requested users all todo datas from spring boot.
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }


 retriveAllTodosData(username: string){

    // without generic type : return this.http.get("http://localhost:8080/hbean/pathvari/Suriya"); // api url

    return this.http.get<Todo[]>(`http://localhost:4201/users/${username}/todos`); // it returns HelloWorld bean type object from service generic type like java
    //console.log("Welcome data service invoked");
  }


  deleteTodoService(username: string,id: number){
    // without generic type : return this.http.get("http://localhost:8080/hbean/pathvari/Suriya"); // api url

    return this.http.delete(`http://localhost:4201/users/${username}/todos/${id}`); // it returns deleted Response entity type object from service generic type like java    
  }

  retriveTodoService(username: string,id: number){
    return this.http.get<Todo>(`http://localhost:4201/users/${username}/todos/${id}`);
  }

  updateTodoService(username: string,id: number,todo: Todo){
    return this.http.put(`http://localhost:4201/users/${username}/todos/${id}`,todo);
  }

  createTodoService(username: string,todo: Todo){
    return this.http.put(`http://localhost:4201/users/${username}/todos/`,todo);
  }

}
