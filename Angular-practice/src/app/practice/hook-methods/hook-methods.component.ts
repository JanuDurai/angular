import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  Input,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-hook-methods',
  templateUrl: './hook-methods.component.html',
  styleUrls: [`./hook-methods.component.css`],
})
export class HookMethodsComponent implements OnChanges, OnInit, OnDestroy {
  @Input() dataFromAppComp;
  @Input() onChangeCheckData;
  @Input() onInitData;
  initialisationCount = 0;
  flip:boolean=true;


  constructor() {
    this.onInitData = 'Value initialised in constructor';
  }

  dataChangeProperty() {
    this.dataFromAppComp = 'Value updated in Hook Component';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnchange Invoked `, changes);
  }
  ngOnInit(): void {
    console.log(
      'NgOnInit invoked and the count is ',
      ++this.initialisationCount);
  }
  ngOnDestroy(): void {
      console.log(`NgOnDestroy - Para is destroyed`);
  }

  toggleDestroy() {
    this.flip = !this.flip;
  }



}
