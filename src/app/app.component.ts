import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
