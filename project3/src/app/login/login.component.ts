import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registered;

  constructor(private data : ProductService, private route : Router) { 
    this.data.registeredData().subscribe(res=> {
      this.registered = res;
    })
  }

  ngOnInit(): void {
  }

  onSubmit(Form) {
   localStorage.setItem('Data',JSON.stringify(Form.value));
   this.route.navigate(['products'])
  }

}
