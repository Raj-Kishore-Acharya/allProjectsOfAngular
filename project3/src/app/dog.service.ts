import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogService {


  constructor(private dogs : HttpClient) { }

  dogBreed() {
    return this.dogs.get<any>(`https://dog.ceo/api/breeds/list`)
  }

  dogpic(img) {
    return this.dogs.get<any>(`https://dog.ceo/api/breed/${img}/images`)
  }
}
