import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabService } from '../lab.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private data: LabService, private data1 : Router) { }

  ngOnInit(): void {
  }

  onRegister(form) {
    this.data.storeUser(form.value).subscribe((res)=> {
      prompt("User Registered Successfuly")
      this.data1.navigate(['/sample'])
    })
  }

}
