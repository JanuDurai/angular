import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodPlanComponent } from './food-plan.component';

const routes: Routes = [{path:'Diet', component:FoodPlanComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DietRoutingModule { }
