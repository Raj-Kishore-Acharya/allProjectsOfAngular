import { Directive, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { SampleComponent } from './sample/sample.component';
import { DirectiveComponent } from './directive/directive.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { Query1Component } from './query1/query1.component';
import { Query2Component } from './query2/query2.component';
import { PlaceComponent } from './place/place.component';
import { AssignComponent } from './assign/assign.component';

let routes : Routes = [
  {path:"directives", component: DirectiveComponent},
  {path:"parent", component: ParentComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SampleComponent,
    DirectiveComponent,
    ChildComponent,
    ParentComponent,
    FirstComponent,
    SecondComponent,
    HeaderComponent,
    Query1Component,
    Query2Component,
    PlaceComponent,
    AssignComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
