import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  constructor( private http : HttpClient) { }

  storeUser(data) {
   return this.http.post<any>(`http://localhost:3000/userDetails`,data)
  }
  getUser() {
    return this.http.get<any>(`http://localhost:3000/userDetails`)
  }

  glucoReport() {
    return this.http.get<any>('http://localhost:3000/gluco')
  }

  glucoReport1(data) {
    return this.http.post<any>('http://localhost:3000/gluco',data)
  }

  haematoReoprt() {
    return this.http.get<any>('http://localhost:3000/haematology')
  }

  haematoReoprt1(data) {
    return this.http.post<any>('http://localhost:3000/haematology',data)
  }

  thyroReport() {
    return this.http.get<any>('http://localhost:3000/thyroid')
  }

  thyroReport1(data) {
    return this.http.post<any>('http://localhost:3000/thyroid',data)
  }
}
