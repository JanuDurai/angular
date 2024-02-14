import { Component } from '@angular/core';
// import { CustompipePipe } from '../custompipe.pipe';
// import { Pipe } from '@angular/core';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  title = "Interpolation";
  imgUrl = "../assets/cat.jpg";
  topic = "Interpolation";
  content = "Interpolation binds the expression with values";
  property = "color";
  color = "green";
  classname = "paratag"
  center = "center"
  bold = "bold";
  eventcontent = "";
  birthday = new Date(2001, 9, 23);
  text: string = 'Default   ';
  twowaybinding = "Default value";
  todaydatetime = Date.now();
  lowercasetext = 'text transfered to uppercase';
  uppercasetext = "TEXT TRANSFERED TO LOWERCASE";
  currencyvalue = 0.3567;
  number=3.34564789;
  sampleString="Vannila"

  string1="string1 displayed in uppercase";
  string2="string2 displayed in uppercase";
  feet=4.578;
  url="";
  // url="../assets/cat.jpg";

  stringArray=["this ","is","string","array"];

  classActive=true;
  // classActive =false;

  anotherclassActive=true;
  // anotherclassActive=false;
  backgroundcolor="purple";
  displayinline="inline";


  functionInterpolation() {
    return "function interpolated";
  }

  Max(num1: number, num2: number) {
    return Math.max(num1, num2)
  }

  studentDetails: (number | string)[] = [];

  array: number[] = [10, 20];
  valueChange = false;
  arrayChange = false;
  Arraypush() {
    this.array.push(30);
    this.arrayChange = true;
  }

  inputDisplay(stuname: any, stustd: any) {
    this.studentDetails.push(stuname);
    this.studentDetails.push(stustd);
    this.valueChange = true;
  }
  value: string = "value not updated";

  valchange() {
    setTimeout(() => this.value = "value updated", 3000)
  }

  employeeDetails = [{ firstname: "janu", lastname: "shree", dept: "eee" },
  { firstname: "vinu", lastname: "dharshini", dept: "cse" },
  { firstname: "sume", lastname: "ka", dept: "it" }];

  changecolor() {
    this.eventcontent = "when button clicked paragraph is displayed";
    this.color = "purple";
  }

  oneWayBinding(text: any) {

    this.text = text;

  }

  onchangeText(event: any) {
    this.twowaybinding = event.target.text;
  }

 

}

