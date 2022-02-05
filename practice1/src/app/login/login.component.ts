import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  onSubmit(data : NgForm) {
    let formData = data.value
    
    let allData = JSON.parse(localStorage.getItem('Data'))
    let flag = false;
    
    allData.forEach((res)=> {
      if(formData.email === res.email && formData.password === res.password) {
        this.route.navigate(['comp1'])
        flag=true;
        localStorage.setItem('new',JSON.stringify(res))
      } 
    })
    if(!flag) {
      alert('please register')
      this.route.navigate(['register'])
    }
  }

}
