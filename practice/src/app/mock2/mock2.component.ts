import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mock2',
  templateUrl: './mock2.component.html',
  styleUrls: ['./mock2.component.css']
})
export class Mock2Component implements OnInit {
  receiveData: any;

  constructor(private data : DataService) { 
    this.data.formData.subscribe((res)=> {
      this.receiveData = res
      console.log(this.receiveData);
      
    })
  }

  ngOnInit(): void {
    // this.receiveData = this.data.getData
  }

}
