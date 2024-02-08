import { Component, ViewEncapsulation } from '@angular/core';
import { NoneComponent } from '../none/none.component';
import { EmulatedComponent } from '../emulated/emulated.component';

@Component({
  selector: 'app-encap',
  templateUrl: './encap.component.html',
  styleUrls: ['./encap.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom,
  // imports:[NoneComponent,EmulatedComponent]
})
export class EncapComponent {

}
