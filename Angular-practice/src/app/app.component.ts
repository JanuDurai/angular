import {
  Component,
} from '@angular/core';
import { userData } from './practice/constants/table.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  

  data = userData; //TODO: pass this as input to table component
  //TODO: create a function that will console.log the data of the specific row that was clicked

  title = 'Angular-practice';
  dynamicMessage: string = 'Dynamically updated a value';

  contentUpdate = false;
  disabledPropertyValue = false;
  buttonDynamicValue = 'Click';
  condition = true; //false;
  listofItems = ['item1', 'item2', 'item3', 'item4', 'item5'];
  dataToHookComp = 'Onchanges-Value assigned in App Component';
  onChangeCheckData = 'OnChange Check Data';
  destroy: boolean = true;
  onInitdata = 'OnInit- value initialised in App Component';

  updateContent(Message: string) {
    this.dynamicMessage = Message;
  }
  isContentUpdated() {
    this.contentUpdate = true;
  }
  isbuttonClicked() {
    this.buttonDynamicValue = 'button Clicked';
  }
  constructor() {
    setTimeout(
      () =>
        (this.dataToHookComp =
          'Onchanges - Assigned value updated in App Component'),
      5000
    );
  }
  

  isDestroy() {
    this.destroy = !this.destroy;
  }

  collection: string[] = ['afghj', 'bdfghjk', 'cdfghjkl', 'd'];

  dataDisplay(event) {
    console.log(event);
  }
  flip=true;
  
  toggleDestroy() {
    this.flip = !this.flip;
  }
}
