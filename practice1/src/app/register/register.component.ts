import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  onSubmit(data : NgForm) {

    let userDetails = JSON.parse(localStorage.getItem('Data'));
    if(userDetails) {
      let flag = false;
      userDetails.forEach((res)=> {
        if(data.value.name === res.name) {
          alert('User is already registered');
          flag = true;
          data.reset()
        }
      })
      if(!flag) {
        userDetails.push(data.value)
        localStorage.setItem('Data',JSON.stringify(userDetails))
        this.route.navigate(['login'])
      }
      }
     
     else {
      let newArray = [];
      newArray.push(data.value);
      localStorage.setItem('Data', JSON.stringify(newArray))
      this.route.navigate(['login'])
    }
  }

}
