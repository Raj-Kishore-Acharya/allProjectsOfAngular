import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private route : Router) { }

  logIn() {
    let userDetails = JSON.parse(localStorage.getItem('new'));
    if(userDetails) {
      return true
    } else {
      return false
    }
  }

  
  logOut() {
    localStorage.removeItem('new');
    this.route.navigateByUrl('login')
  }

}
