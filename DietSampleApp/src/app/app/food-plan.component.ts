import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { DietService } from './services/diet.service';

@Component({
  selector: 'app-food-plan',
  templateUrl: './food-plan.component.html',
  styleUrls: ['./food-plan.component.scss'],
})
export class FoodPlanComponent{
  constructor(private dietService: DietService) {
    this.dietService.calculateDailyCalorie();
    console.log(`,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,`, this.dietService.DailyCalorie); 
  }

}
