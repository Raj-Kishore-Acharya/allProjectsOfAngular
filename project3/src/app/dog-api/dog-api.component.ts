import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog-api',
  templateUrl: './dog-api.component.html',
  styleUrls: ['./dog-api.component.css']
})
export class DogApiComponent implements OnInit {
  dogs;
  names;
  images;
  constructor(private data : DogService) {   
  }
  @ViewChild('dogName') dogNames : ElementRef


  ngOnInit(): void {
    this.data.dogBreed().subscribe((res)=> {
      
      this.dogs = res.message
      console.log(this.dogs);
      
    })
  }

  search() {
   this.names= this.dogNames.nativeElement.value
   this.data.dogpic(this.names).subscribe((res)=> {
    this.images=res.message
   })
  }


}
