import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  // the service used gor authenticate the username and password and return the boolean value
  authenticate(username: string,password: string)
  {
    //console.log(this.isUserLoggedIn());
    if(username === 'Ravi' && password==='test')
    {
      sessionStorage.setItem('userauthenticated',username); // it storess the username in session storage of the browser location.
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('userauthenticated');
  
    return !(user === null);
    
  }
P
  loggoutUser()
  {
    sessionStorage.removeItem('userauthenticated'); // it removes the session storage of the user
  }

}


