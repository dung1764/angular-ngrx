import { createReducer, on, Action } from '@ngrx/store';
import { loadRandomDog, dogLoaded, State } from '../actions/dog.actions';

export const initialState = {
    message: '',
    status: ''
};

const _dogReducer = createReducer(initialState,
  on(loadRandomDog, state => (state) ),
  on(dogLoaded, (state, dog) => ({...state, message: dog.message, status: dog.status }) )
);

export function dogReducer(state: State | undefined, action: Action) {
  return _dogReducer(state, action);
}
