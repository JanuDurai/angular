import { Injectable, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DietService {
  userData: any;
  DietData: any;
  BMR!: number;
  MaintanenceCalorie!: number;
  DailyCalorie!: number;
  categoryItems: any;
  itemquantity: any;
  sidedishquantity:any;
  randnumber:any;
  username!:any;
  returnArray=[];

  weightLossWeight!: number;
  reduceWeight!: number;
  breakfastCalorie!: number;
  lunchCalorie!: number;
  dinnerCalorie!: number;
  public url = 'http://localhost:3000/user';
  public dieturl = 'http://localhost:3000/diet';
  
  constructor(private userservice: UserService, private service: HttpClient) {}

  calculateDailyCalorie() {

     this.username =sessionStorage.getItem("username");
    this.service
      .get(this.url + '?userusername=' + this.username)

      .subscribe({
        next: (value: any) => {
          this.userData = value;

          console.log(`..............`,this.userData);
          
          this.weightLossWeight = this.userData[0].usertargetweight;
          

          this.reduceWeight = 1100 * this.weightLossWeight;

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

          if (this.userData[0].userchoice === 'Weight Loss')
            this.reduceWeight = this.MaintanenceCalorie - this.reduceWeight;
          else if (this.userData[0].userchoice === 'Weight Gain')
            this.reduceWeight = this.MaintanenceCalorie + this.reduceWeight;
          else this.reduceWeight = this.MaintanenceCalorie;

          console.log(`reduce calorie`, this.reduceWeight);

          this.breakfastCalorie = (this.reduceWeight * 30) / 100;
          this.dinnerCalorie = (this.reduceWeight * 30) / 100;
          this.lunchCalorie = (this.reduceWeight * 40) / 100;

          console.log(`breakfastcalorie`, this.breakfastCalorie);
          console.log(`lunchcalorie`, this.lunchCalorie);
          console.log(`dinnercalorie`, this.dinnerCalorie);

          // const data = this.getDataOnCategory('breakfast', this.breakfastCalorie)

          // data = {
          //   breakfast:{},
          //   luncg:{},
          //   dinner:{}
          // }
          
          console.log(`..................,,,,,,,,,,,,,,,`, this.getDataOnCategory('breakfast', this.breakfastCalorie));

          this.getDataOnCategory('lunch', this.lunchCalorie);

          this.getDataOnCategory('dinner', this.dinnerCalorie);
        },
      });
      // this.userData = {reduceCalorie: this.reduceWeight, breakfastcalorie: this.breakfastCalorie, lunchcalorie:this.lunchCalorie, dinnercalorie:this.dinnerCalorie}
  }

  getDataOnCategory(category: string, calorie: number) {
    this.service.get(this.dieturl).subscribe({
      next: (value: any) => {
        this.DietData = value;

        this.categoryItems = this.DietData.filter((object: any) => {
          for (let item of object.category) {
            if (item === category) return object;
          }
        });
        
        this.randnumber = (Math.random() * (this.categoryItems.length-1 - 0)).toFixed(0);
        console.log(this.randnumber);
        
      this.categoryItems = this.categoryItems[this.randnumber];
      console.log(this.categoryItems);


       this.itemquantity = calorie/this.categoryItems.calorie;
       if(this.categoryItems.foodunit=="g"){
               this.itemquantity = (this.categoryItems.quantity * this.itemquantity).toFixed(0);
       }
       else{
        this.itemquantity = (this.itemquantity).toFixed(0);
       }

      //  console.log(`item quantity`,this.itemquantity);

       this.sidedishquantity =calorie/this.categoryItems.calorie;       

       if(this.categoryItems.sidedishunit=="g" || this.categoryItems.sidedishunit=="ml" ){
        this.sidedishquantity = (this.categoryItems.sidedishquantity * this.sidedishquantity).toFixed(0);
       }
      else if(this.categoryItems.sidedishunit=="piece"){
        this.sidedishquantity = (this.sidedishquantity).toFixed(0);
      } 

      // console.log(`sidedish quantity`,this.sidedishquantity);


     console.log(`Food: `, this.categoryItems.food, `Food Quantity: `, this.itemquantity, `SideDish: `,this.categoryItems.sidedish,
     `SideDish Quantity: `,this.sidedishquantity);

     this.DietData=  {food: this.categoryItems, foodquantity:this.itemquantity, sidedishquantity : this.sidedishquantity,category}


     return  this.DietData;
      },
    });
  }
}
