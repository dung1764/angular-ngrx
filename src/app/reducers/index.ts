import { ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as counterReducer from './counter.reducer';
import * as scoreboardReducer from './scoreboard.reducer';
import * as ScoreboardPageActions from '../actions/scoreboard-page.actions';
import * as dogReducer from './dog.reducer';
import * as dogActions from '../actions/dog.actions';

export function debug(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state, action) {
    return reducer(state, action);
  };
}

export interface State {
  counter: number;
  scoreboard: ScoreboardPageActions.State;
  dog: dogActions.State;
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer.counterReducer,
  scoreboard: scoreboardReducer.scoreboardReducer,
  dog: dogReducer.dogReducer
};

export const metaReducers: MetaReducer<State>[] = environment.production ? [] : [debug];
