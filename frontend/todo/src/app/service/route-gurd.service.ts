
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGurdService implements CanActivate {

  constructor(private hardcodedAuthenticationSerivce: HardcodedAuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { // it checks the user logged in or not for every url firing. if not logged in this url not accessible.
    if (this.hardcodedAuthenticationSerivce.isUserLoggedIn())
      return true;

    this.router.navigate(['login']); // it redirect the login page if user is not logged in.
    
    return false;

  }

}

