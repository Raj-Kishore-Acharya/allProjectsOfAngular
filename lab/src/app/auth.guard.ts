import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {

  constructor( private data : AuthService , private route : Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    let roles= route.data.role as Array<string>
    let details = this.data.getDetails()
    if(details && roles.includes(details.role)) {
      return true;
    } else {
      this.route.navigate(['login']);
      return false;
    }
    
  }
  
}
