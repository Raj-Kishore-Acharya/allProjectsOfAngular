import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  addedProduct;

  constructor(private data : ProductService, private route :Router) {
    
   }

  ngOnInit(): void {
    this.data.addedData().subscribe((res)=> {
      this.addedProduct= res
    })
  }
  onClick() {
    this.route.navigate(['payment'])
  }

  delete(product) {
    this.data.deleteData(product.id).subscribe((res)=> {
      this.addedProduct.splice(this.addedProduct.indexOf(product),1)  
    })
  }


}
