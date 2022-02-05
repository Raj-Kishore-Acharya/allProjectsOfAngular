import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BindingComponent } from './binding/binding.component';
import { ChildComponent } from './child/child.component';
import { Feature1Component } from './feature/feature1/feature1.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MockComponent } from './mock/mock.component';
import { Mock1Component } from './mock1/mock1.component';
import { Mock2Component } from './mock2/mock2.component';
import { ParentComponent } from './parent/parent.component';
import { Parent1Component } from './parent1/parent1.component';
import { Parent2Component } from './parent2/parent2.component';
import { PlacesComponent } from './places/places.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { RegisterComponent } from './register/register.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {path : '' , redirectTo : 'form' , pathMatch : 'full'},
  {path : 'parent' , component : ParentComponent},
  {path : 'child' , component : ChildComponent},
  {path : 'places', component : PlacesComponent},
  {path : 'form' , component : ReactiveComponent},
  {path : 'Template', component : TemplateFormComponent},
  {path : 'binding', component : BindingComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'login' , component :LoginComponent},
  {path : 'mock' , component : MockComponent},
  {path : 'parent1' , component: Parent1Component , canActivate : [AuthGuard]},
  {path : 'parent2' , component : Parent2Component},
  {path : 'mock1'  , children : [
    {path : '' , component : Mock1Component},
    {path : 'login' , component :LoginComponent},
    {path : 'Template', component : TemplateFormComponent}
  ]},
  {path : 'mock2' , component : Mock2Component},
  { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
  {path : 'feature1' , component : Feature1Component},
  {path : '**' , component : RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
