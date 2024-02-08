import { Component, OnChanges, OnDestroy, OnInit, Input } from '@angular/core';


@Component({
  // standalone:true,
  selector: 'app-hook-methods',
  templateUrl: './hook-methods.component.html',
  styleUrls: [`./hook-methods.component.css`],
})

export class HookMethodsComponent implements OnChanges, OnInit, OnDestroy {
  
  @Input() data:string | undefined;
  @Input() data2:string | undefined;
  @Input() destroy:boolean | undefined
  //  valueChangeCheck: string;
   initCount:number=0;
   changesCount:number=0;

   constructor(){
    // this.valueChangeCheck="value1";
    // this.valueChangeCheck="value2"// Onchanges for this variable is not updated.
    // this.data2=" In child class "
   }
  
 


  ngOnChanges(): void {
          this.changesCount++;
     }
  
  ngOnInit(): void {
       this.initCount++;

  }
  ngOnDestroy(): void {
    console.log("element destroyed");
    
  }

}
