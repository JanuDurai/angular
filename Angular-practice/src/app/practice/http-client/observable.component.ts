import { Component } from "@angular/core";
import {of } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Component({
    selector: "app-observable",
    templateUrl:'./observable.component.html' ,
    styles:[],
})

export class ObservableComponent{
     serverResponse$=of(1,2,3,4,5,6)

     constructor(private httpReq:HttpClient){
           this.serverResponse$.subscribe();
           this.serverResponse$.subscribe(data => console.log(data));

           this.serverResponse$.subscribe({next: value =>console.log(`next value: `,value),
                                           error: err => console.log(`observable error`, err),
                                           complete:() => console.log(`observable status: completed`)});

     }
    
  
}