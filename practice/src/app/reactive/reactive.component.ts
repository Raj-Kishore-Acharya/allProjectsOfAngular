import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  loginForm : FormGroup
  constructor(public fb : FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      name : ["", [Validators.required]],
      password : ["", []],
      email : ["" , []],
      number : ["", []],
      hobbies : this.fb.array([])
    })
 
  }

  get f() {
    return this.loginForm.controls
  }

  onSubmit() {
    console.log(this.loginForm.value);
    
  }

  onClick() {
    let control = this.fb.control("", [Validators.required]);
    (<FormArray>this.loginForm.get('hobbies')).push(control)
  }

  get allControl() {
    return (<FormArray>this.loginForm.get('hobbies')).controls
  }

}
