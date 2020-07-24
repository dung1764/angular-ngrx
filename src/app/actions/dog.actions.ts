import { createAction, props } from '@ngrx/store';

export const LOADRANDOMDOG = '[Dog Page] Load Random Dog';
export const DOGLOADED = '[user] GETUSER_FAIL';

export interface State {
  message: string,
  status: string
}

export const loadRandomDog = createAction(LOADRANDOMDOG);
export const dogLoaded = createAction(DOGLOADED, props<State>());
