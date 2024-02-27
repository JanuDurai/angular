import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  // constructor(private userDetails:UserService){}
  //   Data= new FormGroup({
  //     userfirstname:new FormControl('',[Validators.pattern("^(?=.*[A-Z]) (?=.*[a-z]).{2,20}$"),Validators.required]),
  //     userlastname:  new FormControl('',[Validators.pattern("^(?=.*[A-Z]) (?=.*[a-z]).{2,20}$"),Validators.required]),
  //     userage: new FormControl('',[Validators.min(18), Validators.max(60),Validators.required]),
  //     userheight: new FormControl('',[Validators.required]),
  //     userweight:new FormControl('',[Validators.required]),
  //     usertargetweight: new FormControl('',[Validators.required]),
  //     userchoice: new FormControl('',[Validators.required]),
  //     userdaystoachieve: new FormControl('',[Validators.required]),
  //     userusername: new FormControl('',[Validators.minLength(4),Validators.maxLength(15),Validators.required]),
  //     userpassword: new FormControl('',[Validators.pattern("^(?=.* [A-Z]) (?=.*[a-z]) (?=.*\d) (?=.*[!@#$%^&*]) (?=.*[A-Z a-z \d !@#$%^&*]).{8,}$"),Validators.required]),
  //     userconfirmpassword: new FormControl('',[Validators.pattern("^(?=.* [A-Z]) (?=.*[a-z]) (?=.*\d) (?=.*[!@#$%^&*]) (?=.*[A-Z a-z \d !@#$%^&*]).{8,}$"),Validators.required])
  //  });
  
  //  sampledata={name:"janu"}
   
  DataTransfer(){
        // this.userDetails.addUserData(this.Data).subscribe(d =>console.log(d));   
        // this.userDetails.addUserData(this.userDetails)
       
  }


   userDetails= new FormGroup({
       firstName: new FormControl(''),
       lastName: new FormControl(),
       Age: new FormControl(),
       Height: new FormControl(),
       Weight: new FormControl(),
       Targetweight : new FormControl(), 
       choice: new FormControl(),
       daystoachieve: new FormControl(),
       username: new FormControl(),
       password: new FormControl(),
       confirmpassword: new FormControl()
   })


}
