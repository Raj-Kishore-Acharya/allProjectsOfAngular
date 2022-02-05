import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products;
  value;
  constructor(public data : ProductService, private route : Router) {
    this.data.geteData().subscribe((res)=> {
      this.products= res;
      console.log(this.products);
      
    });
    this.data.addedData().subscribe(res=> {
      this.value = res;
     });
   }

  ngOnInit(): void {
  }

  onClick(product) {
   this.value.forEach(res=> {
     if(res.image == product.image) {
       alert('product already exists')
     } else {
       this.data.addData(product).subscribe(()=> {
         alert('Product added to Cart')
       })
     }
   })
   
  }


}
