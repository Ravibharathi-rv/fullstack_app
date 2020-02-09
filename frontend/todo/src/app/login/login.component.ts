import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Member variables. this variables tie with login.component.html values.

  username: string 
  password : string
  errorMsg : string ='Invalid username/password'
  invalidCred : boolean= false;
  constructor() { }

  ngOnInit(): void {
  }

  handleLogin() : void{ // this function invoked when login button clicked
   if(this.username === 'Ravi' && this.password ==='test')
   {
      this.invalidCred = false;
   }else{
     this.invalidCred = true;
   }
   
  }

}
