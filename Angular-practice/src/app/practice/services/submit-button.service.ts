import { Injectable } from '@angular/core';

import { MaxOfNumService } from "./max-of-num.service";

@Injectable({
  providedIn: 'root'
})
export class SubmitButtonService {


constructor(private maxservice:MaxOfNumService){
}   
  alertmessage(filename) {
    alert(filename + " - Thank you submitting the form");
  }
  Max(number1:number,number2:number):number{
    let multiplenumber1= this.maxservice.Square(number1);
    let multiplenumber2 = this.maxservice.Square(number2);
        return Math.max(multiplenumber1,multiplenumber2);
    }

}
