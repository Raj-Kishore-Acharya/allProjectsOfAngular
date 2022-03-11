import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class Auth1Guard implements CanActivate {
  constructor(private data : AuthService) {}
  canActivate() {
    let details = this.data.getDetails()
    if(details) {
      return false;
    } else {
      return true
    }
  }
  
}
