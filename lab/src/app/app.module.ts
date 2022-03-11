import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SampleComponent } from './sample/sample.component';
import { EnterSampleComponent } from './enter-sample/enter-sample.component';
import { HaematologyComponent } from './haematology/haematology.component';
import { GlucometryComponent } from './glucometry/glucometry.component';
import { ThyroidComponent } from './thyroid/thyroid.component';
import { HttpClientModule } from '@angular/common/http';
import { PipePipe } from './pipe.pipe'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SampleComponent,
    EnterSampleComponent,
    HaematologyComponent,
    GlucometryComponent,
    ThyroidComponent,
    PipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
