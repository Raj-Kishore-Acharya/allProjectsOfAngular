import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData =[]

  constructor() { }

  place =[
    {
      PName : 'Ganjam',
      distance : '900Km',
      weather : 'Tropical'
    },
    {
      PName : 'Puri',
      distance : '800Km',
      weather : 'Rainy'
    },
    {
      PName : 'Daringbadi',
      distance : '1200Km',
      weather : 'Cold'
    }
  ]

  array=[10,30,20,40,50]

  observable = new Observable((ele)=> {
    ele.next(this.array)
    
  })

  array1(value) {
    this.getData.push(value)
  }

  formData = new Subject()
  
}
