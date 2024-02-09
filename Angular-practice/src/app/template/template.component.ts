import { Component } from '@angular/core';

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


  functionInterpolation() {
    return "function interpolated";
  }

  Max(num1: number, num2: number) {
    return Math.max(num1, num2)
  }

  studentDetails: (number | string)[] = [];

  array:number[] = [10, 20];
  valueChange=false;
  arrayChange=false;
  Arraypush() {
    this.array.push(30);
    this.arrayChange=true;
  }

  inputDisplay(stuname: any, stustd: any) {
    this.studentDetails.push(stuname);
    this.studentDetails.push(stustd);
    this.valueChange=true;
  }
  value:string="value not updated";

  valchange(){
   setTimeout(()=> this.value="value updated",3000)
  }

  employeeDetails=[{firstname:"janu",lastname:"shree", dept:"eee"},
  {firstname:"vinu",lastname:"dharshini", dept:"cse"},
  {firstname:"sume",lastname:"ka", dept:"it"}];


}

