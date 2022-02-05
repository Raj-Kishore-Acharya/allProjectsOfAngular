import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  checkOut;
  price =0;
  arr = [];
  constructor(private data : ProductService, private route : Router) { 
    this.data.addedData().subscribe((res)=> {
      this.checkOut = res   
      res.forEach((ele)=> {
        this.price +=parseInt(ele.price)
        this.arr.push(ele.id)
      })
          
    })
  }
  
  ngOnInit(): void {
  
  }

  onClick() {
    // this.data.addedData().subscribe((res)=> {
    //   // res.splice(0,res.length)
    //   // this.route.navigate(['products'])
    //   console.log(res);
      
    // })
  //  this.checkOut.splice(0,this.checkOut.length);
 
    this.route.navigate(['products'])
    
  
  }
}
