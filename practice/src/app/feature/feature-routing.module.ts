import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';
import { Feature1Component } from './feature1/feature1.component';

const routes: Routes = [{ path: '', component: FeatureComponent },
{path : 'feature1' , component : Feature1Component}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
