import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css'],
})
export class HttpClientComponent implements OnInit{

  constructor(private http:HttpClient){}
  postId;
 
  ngOnInit(): void {
     const body={property: "updated property"};
        
       this.http.get("https://run.mocky.io/v3/6f239562-1ad9-4de8-99b8-3cff7fc4b644").subscribe(data => console.log(data));


       this.http.post<any> ('https://jsonplaceholder.typicode.com/posts/1', body).subscribe(data=> console.log(data));

       this.http.put<any> ('https://jsonplaceholder.typicode.com/posts/1', body).subscribe(data=> this.postId=data.id);

        this.http.delete('https://jsonplaceholder.typicode.com/posts/1').subscribe(() => console.log('Delete successful'));
    
  }

}

