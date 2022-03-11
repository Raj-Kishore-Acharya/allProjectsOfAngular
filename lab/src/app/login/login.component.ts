import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabService } from '../lab.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  patients;

  constructor(private data : LabService, private route : Router) { }

  ngOnInit(): void {
    this.data.getUser().subscribe((res)=> {
      this.patients = res
    })
  }

  onSubmit(data) {
   let flag = false
   this.patients.forEach((res)=> {
    if(res.Email == data.value.Email && res.pwd == data.value.pwd) {
      alert("User Logged In Successfully")
      localStorage.setItem("users",JSON.stringify(res))
      flag = true;
      data.reset()
      this.route.navigate(['sample']) 
    } 
  })
  if(!flag) {
    alert("Please Register");
    this.route.navigate(['Register'])
  }

  }

}

