import { CanActivateFn } from '@angular/router';

export const canDeactGuard: CanActivateFn = (route, state) => {
  return true;
};
