import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // injected for Router parameter
//import {AppComponent} from '../app.component'; // importing another component

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name1: string;
  // route is a ActivateRoute type means that current router type of the component.
  constructor(private route : ActivatedRoute) { }
  
    
  ngOnInit(): void {

    console.log(this.route.snapshot.params['name']); 

    //  this.route.snapshot.params['name'];   // access the welcome component with. 
    // we can get the value from the above parameter through member varible only like below.
    this.name1 = this.route.snapshot.params['name']; // it bind to the html page using interpolation.

  }

}
