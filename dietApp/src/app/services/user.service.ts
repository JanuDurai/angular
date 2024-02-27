import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

    url="http://localhost:3000/userDetails";
   

  constructor(private httpReq: HttpClient) { }

  addUserData(data:any){
    return this.httpReq.post(this.url,data);
 }

}
