import { Component } from '@angular/core';
import { SubmitButtonService } from '../../services/submit-button.service';

@Component({
  selector: 'app-file2',
  templateUrl: './file2.component.html',
  styleUrls: ['./file2.component.css'],
  // providers:[SubmitButtonService]
})
export class File2Component {


 constructor(private subservice:SubmitButtonService){
 }
 
  alertmessage(){
    // alert("file2  - Thank you submitting the form");
    //  let subservice = new SubmitButtonService();
    // subservice.alertmessage("File2");
   this.subservice.alertmessage("File 2");
  }
    

}
