import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HelloWorldBean } from 'src/app/welcome/welcome.component';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  // injected HttpClient and it should be import into app.module
  constructor(private http: HttpClient) { }

  executeWelcomeDataService() {
    // without generic type : return this.http.get("http://localhost:8080/hbean/pathvari/Suriya"); // api url

    return this.http.get<HelloWorldBean>("http://localhost:4201/hbean/pathvari/Ravibharathi"); // it returns HelloWorld bean type object from service generic type like java
    //console.log("Welcome data service invoked");
  }

  executeWelcomeDataServiceWithPathVariable(name) {

    let authenticationHeaders = this.basicAuthenticationHeaders(); // it return the hardecoded encoded authentication values

    let headers = new HttpHeaders({
      Authorization: authenticationHeaders   // adding objeccts to httpheaders
    });


    //here we use tic operator. if tic(`) operator used, you should use ${} for declare the parameter.
    //it considers the parameter as member variable.this variable act like dynamic value
    return this.http.get<HelloWorldBean>(`http://localhost:4201/hbean/pathvari/${name}`, { headers }); // adding second parameters for authorization
    // it returns HelloWorld bean type object from service generic type like java
    //console.log("Welcome data service invoked");
  }

  basicAuthenticationHeaders() { // it returns the hardecoded user cred values for authorization

    let username = 'Ravi';
    let password = 'test';

    let authenticationHeaders = 'Basic ' + window.btoa(username + ':' + password);
    console.log(authenticationHeaders);
    return authenticationHeaders;

  }
}
