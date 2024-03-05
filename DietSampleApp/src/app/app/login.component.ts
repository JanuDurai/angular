import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userData: any;
  public url = 'http://localhost:3000/user';
  loginusername!: any;
  loginvalid: boolean = false;

  route: Router = inject(Router);

  constructor(private httpreq: HttpClient) {}

  loginDetails = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  checkPassword() {
    this.httpreq
      .get(this.url + '?userusername=' + this.loginDetails.value.username)
      .subscribe({
        next: (value) => {
          this.userData = value;
          this.loginvalid = false;
          if (
            this.loginDetails.value.password === this.userData[0].userpassword
          ) {
            this.loginusername = this.loginDetails.value.username;
            sessionStorage.setItem('username', this.loginusername);
            this.route.navigate(['Profile']);
          } else {
            this.loginvalid = true;
          }
        },
      });
  }
}
