import { Component} from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { checkemail } from './customvalidator';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  firstname = new FormControl('');

  lastname = '';

  color = new FormControl('');

  age: number;

  submitted = false;
  addressSubmitted = false;
  formbuilder = false;
  input;
  name;

  constructor(private form: FormBuilder) {}


  colorChange() {
    this.color.setValue('Red');
  }
  valueChange() {
    this.age = 20;
  }

  UserProfileData = new FormGroup({
    userfirstname: new FormControl(''),
    userlastname: new FormControl(''),
    userage: new FormControl(''),
    useremail: new FormControl(''),
  });

  ProfileDataAddress = new FormGroup({
    user1firstname: new FormControl(''),
    user1lastname: new FormControl(''),
    user1age: new FormControl(''),
    user1email: new FormControl(''),
    userAddress: new FormGroup({
      Doorno: new FormControl(''),
      Streetname: new FormControl(''),
      Landmark: new FormControl(''),
      City: new FormControl(''),
    }),
  });

  dataDisplay() {
    this.submitted = !this.submitted;
  }

  AddressDataDisplay() {
    this.addressSubmitted = !this.addressSubmitted;
  }

  ProfileDataArray = new FormGroup({
    user2name: new FormControl(''),
    user2dept: new FormControl(''),
    address: new FormArray([
      new FormControl('Door No'),
      new FormControl('Street Name'),
      new FormControl('City Name'),
    ]),
  });

  formBuilderData = this.form.group({
     user3name: [''],
     user3dept:[''],
    //  user3address: this.form.group({
    //     user3doorno:[''],
    //     user3city:[''],
    //  })
  });

  formBuilderDataDisplay(){
      this.formbuilder=!this.formbuilder;
  }
  
   validateForm= new FormGroup({
     validateName: new FormControl('',[Validators.required, Validators.minLength(4)]),
     validatedept: new FormControl('', [Validators.required, Validators.minLength(3)])
   })

   customValidateGroup = this.form.group({
     customemail: ['',[Validators.required,checkemail]]
   })

}
