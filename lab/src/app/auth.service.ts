import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LabService } from './lab.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private data : LabService, private route : Router) { }

  getDetails() {
    let details = JSON.parse(localStorage.getItem('users'));
    if(details) {
      return details
    }
  }

  isLoggedin() {
    let details = this.getDetails()
    if(details) {
      return true
    } else {
      false
    }
  }

  isAdmin() {
    let details = this.getDetails()
    if(details.role === "admin") {
      return true
    } else {
      return false
    }
  }

  isUser() {
    let details= this.getDetails()
    if(details.role === "user") {
      return true
    } else {
      return false
    }
  }

  logout() {
    localStorage.clear();
    this.route.navigateByUrl(`/Login`)
  }

}
