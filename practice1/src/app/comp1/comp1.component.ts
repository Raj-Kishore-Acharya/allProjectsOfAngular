import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  signInForm : FormGroup

  constructor(private walk : DataService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      name : ["",[Validators.required]],
      email : ["",[Validators.required]],
      pwd : ["",[Validators.required]],
      cnfpwd : ["", [Validators.required]]
    },{
      validators : this.MustMatch('pwd','cnfpwd')
    })
  }

  MustMatch(controlName,matchingControlName) {
    return(formGroup : FormGroup)=> {
      const control = formGroup.controls[controlName];
      const matchControl = formGroup.controls[matchingControlName]
      if(matchControl.errors && matchControl.errors.MustMatch ) {
        return
      }
      if(control.value !== matchControl.value) {
        matchControl.setErrors({MustMatch:true})
      }
      else 
      {
        matchControl.setErrors(null);
      }
    }
  }

  get f() {
    return this.signInForm.controls
  }

  onSubmit() {
    console.log(this.signInForm.value);
    
  }

 

}
