import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service ';

@Injectable({
  providedIn: 'root'
})

// A new Service created for HttpBasic authentication for Api request.
export class HttpInterceptorBasicAuthService implements HttpInterceptor {   // this service class should impl the HttpInerceptor

  constructor(private basicAuth: BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let userName = 'Ravi';
    let password = 'test';

    let basicAuthHeaderString = 'Basic ' + window.btoa(userName + ':' + password);

    //  let basicAuthHeaderString = this.basicAuth.getAuthenticatedToken();
    //  console.log(basicAuthHeaderString);

    //  let basicAuthUser = this.basicAuth.getAuthenticated();
    // console.log(basicAuthUser);

  //  if (basicAuthHeaderString && basicAuthUser) {
      request = request.clone({ // the clone method property used for restricting modify the request header.
        setHeaders: {
          Authorization: basicAuthHeaderString,
        }
      });
   // }
    return next.handle(request);
  }
}
