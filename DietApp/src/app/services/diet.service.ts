import { Injectable, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DietService {
  userData: any;
  BMR!: number;
  MaintanenceCalorie!: number;
  DailyCalorie!: number;
  // username='SumekaArasakumar';
  username = 'Janu';
  // username = 'VinuDhar';
  // username='Ram';

  weightLossWeight!: number;

  reduceWeight!: number;

  CalorieReduceInWeek!: number;
  breakfastCalorie!: number;
  lunchCalorie!: number;
  dinnerCalorie!: number;

  constructor(private userservice: UserService) {}

  calculateDailyCalorie() {
    this.userservice
      .getData(this.username)

      .subscribe({
        next: (value: any) => {
          this.userData = value;

          this.weightLossWeight = 0.75;

          this.CalorieReduceInWeek = 7700 * this.weightLossWeight;

          if (this.userData[0].usergender === 'Male') {
            this.BMR =
              66.473 +
              13.7516 * this.userData[0].userweight +
              5.0033 * this.userData[0].userheight -
              6.755 * this.userData[0].userage;
          } else if (this.userData[0].usergender === 'Female') {
            this.BMR =
              655.1 +
              9.563 * this.userData[0].userweight +
              1.85 * this.userData[0].userheight -
              4.676 * this.userData[0].userage;
          }
          this.MaintanenceCalorie = this.BMR * 1.55;
          this.reduceWeight = this.CalorieReduceInWeek / 7;
          if (this.userData[0].userchoice === 'Weight Loss')
            this.reduceWeight = this.MaintanenceCalorie - this.reduceWeight;
          else if (this.userData[0].userchoice === 'Weight Gain')
            this.reduceWeight = this.MaintanenceCalorie + this.reduceWeight;
          else this.reduceWeight = this.MaintanenceCalorie;
          
          console.log(`reduce calorie`, this.reduceWeight);
   
          this.breakfastCalorie =(this.reduceWeight * 30) / 100;
          this.dinnerCalorie = (this.reduceWeight * 30) / 100;
          this.lunchCalorie = (this.reduceWeight * 40 )/ 100;

         
          console.log(`lunchcalorie`,this.lunchCalorie);
          console.log(`breakfastcalorie`,this.breakfastCalorie);
          console.log(`dinnercalorie`,this.dinnerCalorie);



          this.userservice.getDataOnCategory("breakfast",this.breakfastCalorie);
          
          this.userservice.getDataOnCategory("lunch", this.lunchCalorie);

          this.userservice.getDataOnCategory("dinner",this.dinnerCalorie);

          

        },
      });
  }
}
