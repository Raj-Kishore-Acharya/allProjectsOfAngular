import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register;
  constructor(private data : ProductService, private route : Router) {
    this.data.registeredData().subscribe(res=> {
      this.register=res;
    })
   }

  ngOnInit(): void {
  }

  onSubmit(form) {
  this.register.forEach((res)=> {
    if(res.name == form.value.name  && res.email == form.value.email) {
      alert('user already registered!!!')
    } else {
      this.data.register(form.value).subscribe(()=> {
        alert('User registered Successfully')
        this.route.navigate(['login'])
      })
    }
  })
    
  }

}
