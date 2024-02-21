import { CanDeactivateFn } from '@angular/router';

export interface CanDeactivateComponent{
  canExit():boolean
}

// export const canDeact1Guard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {



//   ca
//   return true;
// };


class CanDeact1 implements CanDeaactivate{

}