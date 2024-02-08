import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

  @Input() childvalue:string | undefined;
  @Input()
    name1:string = "";
  set name(name:string){
    this.name1=name;
  }
  get name():string{
    return this.name1.trim();
  }   
  message="value interface from child to parent component";


  @Output() NewItemEvent = new EventEmitter<string>();

  AddNewItem(value:string){
           this.NewItemEvent.emit(value);
  }

}
