import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(public data : HttpClient) { }

  getData() {
   return this.data.get<any>('http://localhost:3000/details')
  }

  addData(value){
    return this.data.post<any>('http://localhost:3000/details',value)
  }


  details = [
    {
      name : 'Raj Kishore Acharya',
      age : 25 ,
      gender : 'Male',
      email : 'raj@gmail.com'
    },
    {
      name : 'Sudhansu Sekhar',
      age : 25 ,
      gender : 'Male',
      email : 'situ@gmail.com'
    },
    {
      name : 'Chinmaya',
      age : 25 ,
      gender : 'Male',
      email : 'chinu@gmail.com'
    }
  ]
}
