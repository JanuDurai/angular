import { CanDeactivateFn } from '@angular/router';

interface DeactivateInterface{
  canExit():boolean
}

export const canDeactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  // return false;
  return true;

};
