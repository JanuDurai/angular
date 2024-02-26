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
    return this.httpReq.get(this.url + '?id=' + id);
  }

  getUserData(id: number, gender: string) {
    return this.httpReq.get(this.url + '?id=' + id + '&gender=' + gender);
  }

  //post
  addUser(userDetail) {
    return this.httpReq.post(this.url, userDetail);
  }

  //put
  updateUser(id,userDetails) {
    this.httpReq.put(`${this.url} /${id}`,userDetails);
    // this.url+'/'+id,userDetails

  }

  //delete
  removeUser(id) {
    return this.httpReq.delete(this.url + '?id=' + id);
  }
}
