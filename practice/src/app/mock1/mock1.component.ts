import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mock1',
  templateUrl: './mock1.component.html',
  styleUrls: ['./mock1.component.css']
})
export class Mock1Component implements OnInit {

  loginForm : FormGroup
  constructor(public data : DataService , public fb : FormBuilder, private router : Router) { }
  formData;
  allData;
  ngOnInit(): void {

    this.loginForm = this.fb.group({
      name : ["", [Validators.required]],
      password : ["", []],
      email : ["" , []],
      number : ["", []],
    })
  }

  // onSubmit() {
  //  this.data.array1(this.loginForm.value);
  //   this.router.navigate(['mock2'])
  // }

  onSubmit() {
    this.data.formData.next(this.loginForm.value);
    this.router.navigate(['mock2'])
  }

  

}
