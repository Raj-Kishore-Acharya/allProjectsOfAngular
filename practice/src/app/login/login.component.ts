import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm : FormGroup
  message;

  constructor(private fb : FormBuilder, private data : DetailService, private router : Router) { }

  ngOnInit(): void {
    this.logInForm = this.fb.group({
     email : ["",[Validators.required]] ,
     password : ["", [Validators.required]]
    })
  }

  onSubmit() {
    this.data.getData().subscribe((res)=> {
      let value = res.find((a)=> {
        return a.email === this.logInForm.value.email && a.password === this.logInForm.value.password
      })
      if(value) {
        alert('Login is Successful');
        this.logInForm.reset();
        this.router.navigate(['child'])
      } else {
        alert('User not found')
        this.router.navigate(['register'])
      }
    }, err => {
      alert('Something Error')
      this.message= err;
    })
   
  }

}
