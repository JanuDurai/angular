import { Component, DestroyRef, OnDestroy, inject } from '@angular/core';
// import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports:[NgOptimizedImage]
  // standalone:true
})

export class AppComponent {
  title = 'Angular-practice';

  dynamicMessage: string = "Dynamically updated a value";
  contentUpdate = false;
  disabledPropertyValue = "disabled";
  buttonDynamicValue = "Click";
  condition = true; //false;
  listofItems = ["item1", "item2", "item3", "item4", "item5"];

  updateContent(Message: string) {
    this.dynamicMessage = Message;
  }
  isContentUpdated() {
    this.contentUpdate = true;
  }
  isbuttonClicked() {
    this.buttonDynamicValue = "button Clicked";
  }

 

}

export class counter{
      count=0;
    constructor(){
      const id=setInterval(()=> this.count++,1000);
      const destroyRef= inject(DestroyRef)
      const destroyInterval = destroyRef.onDestroy(()=> clearInterval(id));  
      destroyInterval(); 
      }
}



