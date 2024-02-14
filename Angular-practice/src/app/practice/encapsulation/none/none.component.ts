import { Component, ViewEncapsulation } from '@angular/core';
import { EmulatedComponent } from '../emulated/emulated.component';

@Component({
  selector: 'app-none',
  templateUrl: './none.component.html',
  styleUrls: ['./none.component.css'],
  encapsulation: ViewEncapsulation.None,
  // imports: [EmulatedComponent]
})
export class NoneComponent {

}
