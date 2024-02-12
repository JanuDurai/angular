import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  classes = {};
  styles = {};
  classActive1 = true;
  classActive2 = true;
  classActive3 = false;

  style1 = true;
  style2 = true;
  // style3=false;
  style3 = true;

  bindingproperty = "default"
  classActiveCondition = true;
  // classActiveCondition = false;
  classname1 = "bold"
  classname2 = "text"
  condition = true
  // condition = false

  constructor() {
    this.setClasses();
    this.setStyles();
  }

  setClasses() {
    this.classes = {
      class: this.classActive1,
      class2: this.classActive2,
      class3: this.classActive3,
    }
  }

  setStyles() {
    this.styles = {
      'font-weight': this.style1 ? "bold" : "normal",
      'font-size': this.style2 ? "larger" : "smaller",
      'color': this.style3 ? "blue" : "yellow",
    }
  }

  // changeToUppercase(event:any){
  //    this.bindingproperty =  event.target.value;
  // }


}
