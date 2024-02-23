import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpReq:HttpClient) { }

    getData(url){
            return this.httpReq.get(url);
    }
}
