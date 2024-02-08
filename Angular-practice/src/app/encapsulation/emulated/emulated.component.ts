import { Component, ViewEncapsulation } from '@angular/core';
import { NoneComponent } from '../none/none.component';
import { EncapComponent } from '../encap/encap.component';

@Component({
  selector: 'app-emulated',
  templateUrl: './emulated.component.html',
  styleUrls: ['./emulated.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  // imports:[NoneComponent,EncapComponent]
})
export class EmulatedComponent {

}
