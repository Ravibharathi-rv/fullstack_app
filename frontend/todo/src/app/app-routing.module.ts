import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';

//Routes are used to route between two pages or multiple pages. we need to declare the path and component 
// inside the Routes=[] array side with {} for multiple routes.
const routes: Routes = [
  {path: '', component:LoginComponent}, // when path not given it consider this component is the home page or default page.
  {path:'login', component:LoginComponent}, // route path and component name for LoginComponent 
  {path: 'welcome', component:WelcomeComponent}, // route path and component name for WelcomeComponent 
  {path:'**', component: ErrorComponent} //if any undefined url access, this component invoked
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
