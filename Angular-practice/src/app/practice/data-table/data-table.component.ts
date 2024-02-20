import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],

})
export class DataTableComponent {

@Input() userData;
@Output() tableData = new EventEmitter();

dataSent(event){
     this.tableData.emit(event);
}




}
