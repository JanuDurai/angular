import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DietService } from './diet.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public url = 'http://localhost:3000/user';

  public dieturl = 'http://localhost:3000/diet';
  userData:any;
  StartCalorie!:number;
  FinalCalorie!:number;

  constructor(private service: HttpClient) {}

  addUser(data: any) {
    this.service.post(this.url, data).subscribe((d) => console.log(d));
  }

  getData(username: string) {
    return this.service.get(this.url + '?userusername=' + username);
  }

  getDataOnCategory(category: string,calorie:number) {
    this.service
      .get(this.dieturl + '?category=' + category)
      .subscribe({ next: (value) => {
        this.userData = value;    
        this.StartCalorie=1; 
          for(let item of this.userData){     
            if(item.calorie < calorie && item.calorie > this.StartCalorie)
                this.StartCalorie = item.calorie;            
          }

        // console.log(`start calorie`,this.StartCalorie);

        this.service.get(this.dieturl + '?calorie=' + this.StartCalorie).subscribe({next : (value)=> console.log(value)}
        )
        }
    })

  }
}
