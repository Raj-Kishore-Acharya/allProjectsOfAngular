import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(public http : HttpClient) { }

  getDetail() {
    return this.http.get<any>('http://localhost:3000/details')
  }

  putProduct (id: any,value: any) {
    return this.http.put<any>(`http://localhost:3000/details/${id}`,value)
  }

 
}
