import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Auth1Guard } from './auth1.guard';
import { EnterSampleComponent } from './enter-sample/enter-sample.component';
import { GlucometryComponent } from './glucometry/glucometry.component';
import { HaematologyComponent } from './haematology/haematology.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SampleComponent } from './sample/sample.component';
import { ThyroidComponent } from './thyroid/thyroid.component';

const routes: Routes = [
  {path: "", redirectTo : "LoginComponent", pathMatch : "full"},
  {path :"Login" , component:LoginComponent,canActivate : [Auth1Guard]},
  {path: "Register", component: RegisterComponent, data :{role : ["admin"]}, canActivate : [AuthGuard]},
  {path: "entersample", component : EnterSampleComponent, data :{role : ["admin"]}, canActivate : [AuthGuard]},
  {path : "sample", component: SampleComponent, data :{role : ["admin", "user"]}, canActivate : [AuthGuard]},
  {path : "gluco", component : GlucometryComponent, data :{role : ["admin", "user"]}, canActivate : [AuthGuard]},
  {path : "haemato", component : HaematologyComponent, data :{role : ["admin", "user"]}, canActivate : [AuthGuard]},
  {path : "thyroid", component : ThyroidComponent , data :{role : ["admin", "user"]}, canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
