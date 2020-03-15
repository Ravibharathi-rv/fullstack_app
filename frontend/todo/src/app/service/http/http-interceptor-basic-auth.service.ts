import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// A new Service created for HttpBasic authentication for Api request.
export class HttpInterceptorBasicAuthService  implements HttpInterceptor{   // this service class should impl the HttpInerceptor

  constructor() { }

 intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let userName = 'Ravi';
    let password = 'test';

    let basicAuthHeaderString = 'Basic' + window.btoa(userName + ':' + password);
    console.log("Inside the basic auth service");
    request = request.clone({ // the clone method property used for restricting modify the request header.
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    });
   //console.log(request);
   //console.log(next.handle(request);
   return next.handle(request);
 }
}
