import { Component} from '@angular/core';
import { DietService } from './services/diet.service';

@Component({
  selector: 'app-food-plan',
  templateUrl: './food-plan.component.html',
  styleUrls: ['./food-plan.component.scss'],
})
export class FoodPlanComponent {

  //  username='SumekaArasakumar';
  //  username = 'Janu';
  //  username = 'VinuDhar';
   // username='Ram';
  
  constructor(private dietService: DietService) {}
  DietDisplay() {
    this.dietService.calculateDailyCalorie();
  }


}
