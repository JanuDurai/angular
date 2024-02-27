import { CanActivateFn } from '@angular/router';

export const CanActiveGuard: CanActivateFn = (route, state) => {
  // return false;
  return true;

};
