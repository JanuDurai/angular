import { Component } from '@angular/core';
import { SubmitButtonService } from '../../services/submit-button.service';


@Component({
  selector: 'app-file1',
  templateUrl: './file1.component.html',
  styleUrls: ['./file1.component.css'],
  providers:[SubmitButtonService]
   
})

export class File1Component {
result:number;
  constructor(private subservice:SubmitButtonService){
  }
  
  // private subservice=inject(SubmitButtonService);

alertmessage(){
  // alert("File1 -  Thank you submitting the form");

  // let subservice= new SubmitButtonService;
  // subservice.alertmessage("File1");
  
  this.subservice.alertmessage("File 1");

}
GetNumbers(num1,num2):void{
  this.result = this.subservice.Max(num1,num2)
  }

}
