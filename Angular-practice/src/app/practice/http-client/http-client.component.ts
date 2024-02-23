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
  url = '../assets/data.json';
 

  constructor(private httpService: HttpClientService) {}

  ngOnInit(): void {
    // this.httpReq.get(this.url).subscribe((data) => console.log(data));
      this.httpService.getData(this.url).subscribe((d)=>console.log(d));
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
