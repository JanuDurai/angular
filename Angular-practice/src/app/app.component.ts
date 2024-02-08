import { Component, DestroyRef, OnDestroy, inject ,InputDecorator, OnChanges, SimpleChanges} from '@angular/core';
import { HookMethodsComponent } from './hook-methods/hook-methods.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
// import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports:[HookMethodsComponent,EncapsulationComponent]

})

export class AppComponent  {
  
  title = 'Angular-practice';
  dynamicMessage: string = "Dynamically updated a value";
  contentUpdate = false;
  disabledPropertyValue = "disabled";
  buttonDynamicValue = "Click";
  condition = false; //false;
  listofItems = ["item1", "item2", "item3", "item4", "item5"];
  onchangeData="initial initialisation";
  onchangecheckdata="In parent classs";
   destroy:boolean=true;

  updateContent(Message: string) {
    this.dynamicMessage = Message;
  }
  isContentUpdated() {
    this.contentUpdate = true;
  }
  isbuttonClicked() {
    this.buttonDynamicValue = "button Clicked";
  }
   constructor(){
        setTimeout(()=> this.onchangeData="Final value updated",5000);
        // this.onchangecheckdata="In parent classs constructor value changed"
    }

     isDestroy(){
      this.destroy=! this.destroy;
     }

}