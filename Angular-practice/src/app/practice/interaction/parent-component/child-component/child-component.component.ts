import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

  @Input() childvalue: string;
  @Input() name1: string = "";
  @Output() NewItemEvent = new EventEmitter<string>();


  message = "value interface from child to parent component";



  AddNewItem(value: string) {
    this.NewItemEvent.emit(value);
  }

}
