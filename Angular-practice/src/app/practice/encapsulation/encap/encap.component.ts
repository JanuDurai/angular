import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-encap',
  templateUrl: './encap.component.html',
  styleUrls: ['./encap.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom,
})
export class EncapComponent {

}
