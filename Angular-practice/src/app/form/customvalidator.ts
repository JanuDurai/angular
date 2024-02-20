import { FormControl } from '@angular/forms';

export function checkemail(control: FormControl) {
  const emailvalue = control.value;
  if (emailvalue.includes('@') && emailvalue.includes('.com')) return true;
  else return false;
}
