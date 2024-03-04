import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userData:any;
  public url = 'http://localhost:3000/user';
  loginusername!:any;
  loginvalid:boolean=false;

 
  constructor(private httpreq:HttpClient){ }

  loginDetails = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  })


checkPassword(){
       this.httpreq.get(this.url +"?userusername=" + this.loginDetails.value.username).subscribe({next:(value)=>{
        this.userData = value;    
        if(this.loginDetails.value.password === this.userData[0].userpassword){
          this.loginusername = this.loginDetails.value.username;
          sessionStorage.setItem("username",this.loginusername);

          // console.log(sessionStorage.getItem("username"));
          this.loginvalid = false;
        }
          else{
          this.loginvalid = true;
        }
       }
   })
  }


}

       
  