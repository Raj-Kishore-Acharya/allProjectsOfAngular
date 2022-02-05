import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private data : ProductService) {}
  canActivate() {
    let value = JSON.parse(localStorage.getItem('Data'))
    if(value) {
      return true
    } else {
      return false
    }
  }
  
  
}
