import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private httpReq: HttpClient) {}

  public url = 'http://localhost:3000/detail';

  getData() {
    return this.httpReq.get(this.url);
  }

  getUser(id: number) {
      return this.httpReq.get(this.url +"?id=" + id);
      
  }

  getUserData(id:number,gender:string){
     return this.httpReq.get(this.url+ "?id=" + id + "&gender=" + gender );
  }

  //post
  addUser(){

  }

  //put
  updateUser(){}

  //delete
  removeUser(){}
}
