import { Component } from '@angular/core';

 @Component({
   selector: 'app-root',
  //  template: '<h1>Template in ts file',
      // template:`<h1>Template in ts file</h1>
      //           <p>Paragraph is written in app component ts file</p>`,
    templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
      // styles:['p{color:green}']
})
export class AppComponent {
  title = 'Angular Basic';
  idvalue="1";
  fontcolor="lightskyblue";
  message="Janu";

  greet(){
  alert(`Hi ${this.message} !!!`);
   }
  }
 