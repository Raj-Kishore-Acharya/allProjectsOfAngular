import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{ path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
{path : 'comp1' , component : Comp1Component, canActivate : [AuthGuard]},
{path : 'comp2' , component : Comp2Component , canActivate : [AuthGuard]},
{path : 'comp3' , component : Comp3Component, canActivate : [AuthGuard]},
{path : 'login', component : LoginComponent},
{path : 'register', component : RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
