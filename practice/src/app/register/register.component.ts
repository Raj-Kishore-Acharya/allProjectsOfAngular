import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register : FormGroup
  message;
  constructor(private fb : FormBuilder, public http : DetailService, private router : Router ) {}

  ngOnInit(): void {
    this.register= this.fb.group({
      userName : ["",[Validators.required,Validators.minLength(5)]],
      email : ["", [Validators.required]],
      password : ["",[Validators.required,Validators.minLength(5)]],
      phone : ["", []]
    })
  }

  onSubmit() {
    this.http.addData(this.register.value).subscribe((ele)=> {
      alert('Successfully Registered');
      this.register.reset();
      this.router.navigate(['login'])
    },err => {
      alert('Something went wrong')
      this.message= err;
    })
  }

}








