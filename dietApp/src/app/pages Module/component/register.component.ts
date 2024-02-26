import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

   Data= new FormGroup({
      userfirstname:new FormControl(''),
      userlastname:  new FormControl(''),
      userage: new FormControl(''),
      userheight: new FormControl(''),
      userweight:new FormControl(''),
      usertargetweight: new FormControl(''),
      userchoice: new FormControl(''),
      userdaystoachieve: new FormControl(''),
      userusername: new FormControl(''),
      userpassword: new FormControl(''),
      userconfirmpassword: new FormControl('')
   });

 DataTransfer(){
     
 }

}
