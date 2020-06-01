import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token';
export const USERAUTH = 'userauthenticated';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }
  // the service used for authenticate the username and password and return the boolean value
 
  // authenticate(username: string, password: string) {
  //   //console.log(this.isUserLoggedIn());
  //   if (username === 'Ravi' && password === 'test') {
  //     sessionStorage.setItem('userauthenticated', username); // it storess the username in session storage of the browser location.
  //     return true;
  //   }
  //   return false;
  // }

  basicAuthenticLogin(username: string, password: string) {
    let basicAuth = 'Basic '+window.btoa(username+':'+password);
    console.log(basicAuth);

    let headers = new HttpHeaders({
      Auhorization: basicAuth
    })
    console.log(headers.get(basicAuth));
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
    {headers}).
    pipe( // we telling to compiler if the request got successfull then do the pipe propecess like.
      map(// if successfull data come it map will store the username in session storage and it returns the successfull data.
        data => {
          console.log('inside the map pipe');
          sessionStorage.setItem(USERAUTH,username);
          sessionStorage.setItem(TOKEN,basicAuth);
          console.log(data);
          return data;
        }
      )
    )
    
  }

  getAuthenticated() {
    return sessionStorage.getItem(USERAUTH);  // it checks the user authenticated or not

  }

  getAuthenticatedToken() {
    if(this.getAuthenticated())
      return sessionStorage.getItem(TOKEN);  // it checks the user authenticated or not

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(USERAUTH);

    return !(user === null);

  }

  loggoutUser() {
    sessionStorage.removeItem(USERAUTH); // it removes the session storage of the user
    sessionStorage.removeItem(TOKEN);
  }

}

export class AuthenticationBean {
  constructor(public message: string) {}
}


