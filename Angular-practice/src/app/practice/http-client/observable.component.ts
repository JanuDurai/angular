import { Component } from "@angular/core";
import { of } from "rxjs";

@Component({
    selector: "app-observable",
    template: ``,
    styles:[],
})

export class ObservableComponent{
     serverResponse$=of({});
     constructor(){
           this.serverResponse$.subscribe();
           this.serverResponse$.subscribe(data => console.log(data));

           this.serverResponse$.subscribe({next: value =>console.log(`next value: `,value),
                                           error: err => console.log(`observable error`, err),
                                           complete:() => console.log(`observable status: completed`)});
     }


}