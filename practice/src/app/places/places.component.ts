import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  places;
array;
  componentPlace
  num1;
  num2;
  number;
  formData=[];
  allData;
  constructor(public data : DataService) { }

  ngOnInit(): void {
    this.places=this.data.place;
     this.data.observable.subscribe((res)=> {
      this.array= res
      
    })

  }

  sum() {
    this.number = parseInt(this.num1)+parseInt(this.num2)
  }

  sub() {
    this.number = parseInt(this.num1)-parseInt(this.num2)
  }
  div() {
    this.number = parseInt(this.num1)/parseInt(this.num2)
  }
  multi() {
    this.number = parseInt(this.num1)*parseInt(this.num2)
  }

  onSubmit(data : NgForm) {
    this.formData.push(data.value)
    data.reset();
  }

  

}
