import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // injected for Router parameter
import { WelcomeDataService } from '../service/data/welcome-data.service';
//import {AppComponent} from '../app.component'; // importing another component


export class HelloWorldBean {
  constructor(public message) { }
}
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name1: string;
  HelloWorldFromService: string;

  // route is a ActivateRoute type means that current router type of the component.
  // injected from WelcomeDataService.
  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }


  ngOnInit(): void {

    console.log(this.route.snapshot.params['name']);

    //  this.route.snapshot.params['name'];   // access the welcome component with. 
    // we can get the value from the above parameter through member varible only like below.
    this.name1 = this.route.snapshot.params['name']; // it bind to the html page using interpolation.

  }

  getWelcomeMessage() {
    console.log("Get welcome message");

    console.log(this.service.executeWelcomeDataService());
    //this.service.executeWelcomeDataService().subscribe(); // only it invoke the http client if the request has subscribed().
    // when we using subscribe()/synchronize call, we should define what should it do when getting successfull response.
    this.service.executeWelcomeDataService().subscribe(
      response => this.successfullResponse(response),
      error => this.errorHanleResponse(error)
    );

    console.log("getWelcomeMessage last line"); // it execute the other statements whenever subscribe() got response, whther it invoke inside method or not. asynchrous call type.
  }

  successfullResponse(response) {
    this.HelloWorldFromService = response.message;
  }

  errorHanleResponse(error){
    this.HelloWorldFromService = error.error.message;
  }

}
