import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-articles',
  templateUrl: './news-articles.component.html',
  styleUrls: ['./news-articles.component.css']
})
export class NewsArticlesComponent implements OnInit {
  products;
  searchItem;
  newsArt= true ;
  isLoading = true;

  constructor(private art  : NewsService ) { }

  ngOnInit(): void {
    this.getAllNews();
  }

getAllNews() {
  // if(this.searchItem = " ") {
  //   this.newsArt = false;
  // }
    this.art.getNews().subscribe((res) => {
      this.isLoading=false
      this.products = res.articles
      console.log(this.products);
      
      
    })
  
}
}
