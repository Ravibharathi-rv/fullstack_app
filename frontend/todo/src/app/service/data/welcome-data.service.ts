import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelloWorldBean } from 'src/app/welcome/welcome.component';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

    // injected HttpClient and it should be import into app.module
  constructor(private http: HttpClient) { }

  executeWelcomeDataService(){
    // without generic type : return this.http.get("http://localhost:8080/hbean/pathvari/Suriya"); // api url

    return this.http.get<HelloWorldBean>("http://localhost:8080/hbean/pathvari/Ravibharathi"); // it returns HelloWorld bean type object from service generic type like java
    //console.log("Welcome data service invoked");
  }
}
