import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlacesComponent } from './places/places.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ColorDirective } from './color.directive';
import { BindingComponent } from './binding/binding.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MockComponent } from './mock/mock.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { Mock1Component } from './mock1/mock1.component';
import { Mock2Component } from './mock2/mock2.component'
import { FeatureModule } from './feature/feature.module';
import { Feature1Component } from './feature/feature1/feature1.component';
import { InterceptorInterceptor } from './interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParentComponent,
    ChildComponent,
    PlacesComponent,
    ReactiveComponent,
    TemplateFormComponent,
    ColorDirective,
    BindingComponent,
    RegisterComponent,
    LoginComponent,
    MockComponent,
    Parent1Component,
    Child1Component,
    Parent2Component,
    Child2Component,
    Mock1Component,
    Mock2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS ,useClass :InterceptorInterceptor , multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
