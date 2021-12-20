import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  yourName;
  yourAge;
  details = false;

  constructor() { }

  ngOnInit(): void {
  }

  // pubPass() {
  //   if(this.yourAge>=21) {
  //     return "Green";
  //   } else {
  //     return "Red";
  //   }
  // }
  // poolPass() {
  //   if(this.yourAge>=10) {
  //     return "green";
  //   } else {
  //     return "red";
  //   }
  // }

  pubPass() {
    if(this.yourAge>=21) {
      return "success";
    } else {
      return "failure";
    }
  }
  poolPass() {
    if(this.yourAge>=10) {
      return "success";
    } else {
      return "failure";
    }
  }

  verify() {
    if(this.yourAge==null) {
      this.details=false;
    } else {
      this.details=true;
    }
  }


  empDetails= [
    {
      empName :"Raj Kishore",
      empId : 402,
      empDesignation : 'CEO'

    },
    {
      empName :"Situ",
      empId : 405,
      empDesignation : 'Manager'
    },
    {
      empName :"Chinu",
      empId : 420,
      empDesignation : 'Clerck'
    }
  ]

}
