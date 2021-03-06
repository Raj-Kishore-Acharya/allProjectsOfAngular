import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news;
  onRequest(value) {
    this.news =value;
  }

  constructor(private http : HttpClient) { }

  getNews() {
    return this.http.get<any>
    (`https://newsapi.org/v2/everything?q=${this.news}&from=2021-11-20&sortBy=publishedAt&apiKey=242dcb5790264a21ad4bdda63274f36e`)
  }
}
