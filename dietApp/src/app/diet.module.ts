import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DietRoutingModule } from './diet-routing.module';
import { FoodplanComponent } from './foodplan.component';
import { WorkOutplanComponent } from './work-outplan.component';


@NgModule({
  declarations: [
    FoodplanComponent,
    WorkOutplanComponent
  ],
  imports: [
    CommonModule,
    DietRoutingModule
  ],
  exports:[FoodplanComponent,WorkOutplanComponent],
})
export class DietModule { }
