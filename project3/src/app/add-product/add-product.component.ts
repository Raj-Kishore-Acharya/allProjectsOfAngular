import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private data : ProductService, private route : Router) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm) {
    this.data.addAllData(loginForm.value).subscribe((res)=> {
      loginForm.reset();
      this.route.navigate(['products'])
    })
  }

}
