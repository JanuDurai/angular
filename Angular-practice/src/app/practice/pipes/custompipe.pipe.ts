import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe',
})
export class CustompipePipe implements PipeTransform {

  transform(feet: number, unit:string="inches"): string {
    return ((feet*12).toFixed(2) +" "  + unit);
  }

}
