import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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

  onRequest(data) {
    console.log(`hello ${data}`);
    
  }

  callingFromHtml() {
    console.log("the method is called from html");
    
  }
  
}
