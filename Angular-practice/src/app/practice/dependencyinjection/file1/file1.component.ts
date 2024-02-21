import { Component } from '@angular/core';
import { SubmitButtonService } from '../../services/submit-button.service';
// import { Inject } from '@angular/core';


@Component({
  selector: 'app-file1',
  templateUrl: './file1.component.html',
  styleUrls: ['./file1.component.css'],   
})

export class File1Component {

result:number;
  constructor(private subservice:SubmitButtonService){
  }
  
  // private subservice=Inject(SubmitButtonService);

alertmessage(){

  // alert("File1 -  Thank you submitting the form");

  this.subservice.alertmessage("File1");  
  
  // this.subservice.alertmessage("File 1");

}
GetNumbers(num1,num2):void{
  this.result = this.subservice.Max(num1,num2)
  }

}
