import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl ,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  username:any;
  userDetails:any;
  url="http://localhost:3000/user";
  Data:any;
  // user:any;
  id!:number;

  constructor(private httpReq:HttpClient){
     this.username=sessionStorage.getItem("username");
    //  console.log(this.username);
    httpReq.get(this.url + "?userusername=" + this.username).subscribe({next:(value)=>{
      this.userDetails = value;
      
      // console.log(this.userDetails[0].userfirstname);
  this.Data= new FormGroup({
    userfirstname:new FormControl(this.userDetails[0].userfirstname),
    userlastname:  new FormControl(this.userDetails[0].userlastname),
    userage: new FormControl(this.userDetails[0].userage),
    usergender:new FormControl(this.userDetails[0].usergender),
    userheight: new FormControl(this.userDetails[0].userheight),
    userweight:new FormControl(this.userDetails[0].userweight),
    usertargetweight: new FormControl(this.userDetails[0].usertargetweight),
    userchoice: new FormControl(this.userDetails[0].userchoice),
    userusername: new FormControl(this.userDetails[0].userusername),
    userpassword: new FormControl(this.userDetails[0].userpassword),
    userconfirmpassword: new FormControl(this.userDetails[0].userconfirmpassword)
  })
   
   console.log(this.Data.value);
   console.log(this.url + '?userusername='+this.username);

   this.id=this.userDetails[0].id;

   console.log(this.url + '/'+this.id);
   
   
  
}})
    
  }


  UpdateChanges(){
    this.httpReq.put(this.url + '/'+this.id , this.Data.value).subscribe(()=>this.userDetails.push(this.Data.value));
  }

}
