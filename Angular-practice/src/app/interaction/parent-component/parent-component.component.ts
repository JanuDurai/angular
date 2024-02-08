import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements AfterViewInit {

  @ViewChild(ChildComponentComponent) child !: ChildComponentComponent;
  constructor() {
  }

  message: string | undefined;
  parentValue: string = "Value in Parent class";

  ngAfterViewInit(): void {
    this.message = this.child.message;
  }
  names = ["    janu    ", "  shree  ", "  durai   "]

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }


}
