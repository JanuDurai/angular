import { Component } from "@angular/core";
import { of } from "rxjs";

@Component({
    selector: "app-observable",
    template: ``,
    styles:[],
})

export class ObservableComponent{
     serverResponse$=of(1,2,3,4,5,6);
     constructor(){
           this.serverResponse$.subscribe();
           this.serverResponse$.subscribe(data => console.log(data));

           this.serverResponse$.subscribe({next: value =>console.log(`next value: `,value) })
     }


}