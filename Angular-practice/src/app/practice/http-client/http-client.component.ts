import { Component, OnInit, inject } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { HttpClientService } from './http-client.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css'],
})
export class HttpClientComponent implements OnInit {
  getData;
  param = new HttpParams();
  params;
  username = 'janu';
  url = 'data.json';
  id = 1;
  userDetail = { id: "4" , first_name:"John", last_name:"Zedey", email:"johnzedey@gmail.com", gender:'Male'};
  

  constructor(private httpService: HttpClientService) {}

  ngOnInit(): void {
    // this.httpReq.get(this.url).subscribe((data) => console.log(data));
    this.httpService.getData().subscribe((d) => console.log(d));

    this.httpService.getUser(1).subscribe((d) => console.log(d));

    this.httpService.getUserData(2, 'Female').subscribe((d) => console.log(d));

    this.httpService.addUser(this.userDetail).subscribe((d)=>console.log(d));
    // this.httpService.getData().subscribe((d) => console.log(d));

    this.httpService.removeUser(2).subscribe(d=>console.log(d))

    this.param = this.param.set("first_name", "feddy");

    // this.httpService.updateUser(1,{"first_name": "Feddy",});

    this.httpService.updateUser(4,{
      "id": "1",
      "first_name": "feddy",
      "last_name": "Denning",
      "email": "idenning0@tmall.com",
      "gender": "Polygender"
    });



  }

  setParam() {
    //   const des = 'Jsonserverdata';
    //   this.param = this.param.set('pageno', 1);
    //   this.param = this.param.set('description', des);
    //   this.param = this.param.set('pageno', 2);
    //   this.param = this.param.set('sample', 'dummy');
    //   this.param = this.param.append('pageno', 4);
    //   //    this.param = this.param.append('pageno',5);
    //   console.log(this.param.toString());
    //   if (this.param.has('page')) console.log('param has page property');
    //   else console.log('param does not have page property');
    //   console.log(`get a first value of property:`, this.param.get('pageno'));
    //   console.log(`get a all value of property:`, this.param.getAll('pageno'));
    //   console.log(`keys in params`, this.param.keys());
    //   this.param = this.param.delete('pageno', '4');
    //   this.param = this.param.delete('pageno');
    //   this.param = this.param.delete(' ');
    //   console.log(`param`, this.param.toString());
    //   console.log(
    //     '.............',
    //     this.httpReq.get(this.url).subscribe((data) => console.log(data))
    //   );
    //   this.params = new HttpParams({
    //     fromString: 'Pageno=' + 1 + '&Title=' + 'Queryparams',
    //   });
    //   console.log(`Query params: `, this.params.toString());
    //   this.params = new HttpParams({
    //     fromObject: { pageNo: 1, title: 'stringparams' },
    //   });
    //   console.log(`Query params: `, this.params.toString());
  }
}
