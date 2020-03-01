import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGurdService } from './service/route-gurd.service';
import { TodoComponent } from './todo/todo.component';

// Routes are used to route between two pages or multiple pages. we need to declare the path and component
// inside the Routes=[] array side with {} for multiple routes.
const routes: Routes = [
  { path :  '', component : LoginComponent }, // when path not given it consider this component is the home page or default page.
  { path : 'login', component : LoginComponent }, // route path and component name for LoginComponent
  { path : 'welcome/:name', component : WelcomeComponent, canActivate: [RouteGurdService] }, // route path and component name for WelcomeComponent
  { path : 'list-todo', component : ListTodoComponent, canActivate: [RouteGurdService] }, // list-todo path and component inserted
  { path : 'logout' , component : LogoutComponent, canActivate: [RouteGurdService]}, // logout component path included
  { path : 'update/:id' , component : TodoComponent, canActivate: [RouteGurdService]},
  { path : '**', component : ErrorComponent } // if any undefined url access, this component invoked
];
// order of routing component is more importatnt. ** path should be last of order. this is very important.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
