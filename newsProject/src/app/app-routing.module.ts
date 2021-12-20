import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsArticlesComponent } from './news-articles/news-articles.component';

const routes: Routes = [
  {path : 'newsArticles' , component : NewsArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
