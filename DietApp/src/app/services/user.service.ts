import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DietService } from './diet.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public url = 'http://localhost:3000/user';



  constructor(private service: HttpClient) {}

  addUser(data: any) {
    this.service.post(this.url, data).subscribe((d) => console.log(d));
  }
  
}
