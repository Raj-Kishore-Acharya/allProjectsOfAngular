import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient, private route : Router) { }

  geteData() {
    return this.http.get<any>('http://localhost:3000/products')
  }

  addAllData(data) {
    return this.http.post<any>('http://localhost:3000/products',data)
  }

  addData(data) {
    return this.http.post<any>('http://localhost:3000/addedProducts',data)
  }

  addedData() {
    return this.http.get<any>('http://localhost:3000/addedProducts')
  }


  register(data) {
    return this.http.post<any>('http://localhost:3000/register',data)
  }
  registeredData() {
    return this.http.get<any>('http://localhost:3000/register')
  }

  deleteData(id) {
    return this.http.delete<any>(`http://localhost:3000/addedProducts/${id}`)
  }

  onLogin() {
    let value = JSON.parse(localStorage.getItem('Data'))
    if(value) {
      return true;
    } else {
      return false;
    }
  }

  onLogout() {
    localStorage.clear();
    this.route.navigate(['products'])
  }
}
