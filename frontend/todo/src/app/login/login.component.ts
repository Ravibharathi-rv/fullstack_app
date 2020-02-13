import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router'; // imported for Router.

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Member variables. this variables tie with login.component.html values.

  username: string;
  password: string;
  errorMsg: string = ' Invalid username/password';
  invalidCred: boolean= false;

  // dependency injection. route is Router type variable it injected to the login component for Routing, 
  // constructor make this member variable also.
  // private blocks the route in outside scope
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  handleLogin() : void
  { // this function invoked when login button clicked
   if(this.username === 'Ravi' && this.password ==='test')
   {
      this.invalidCred = false;

      // route to another page using navigate
      this.route.navigate(['welcome',this.username]);  //  navigate method only accepts array of values. array contains redirecting component names.
      // the above username forward to welcome page as a router parameter value.

   }else{
     this.invalidCred = true;
   }
   
  }

}
