import { ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as counter from './counter.reducer';
import * as scoreboard from './scoreboard.reducer';
import * as ScoreboardPageActions from '../actions/scoreboard-page.actions';

export function debug(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export interface State {
  counter: number;
  scoreboard: ScoreboardPageActions.State;
}

export const reducers: ActionReducerMap<State> = {
  counter: counter.counterReducer,
  scoreboard: scoreboard.scoreboardReducer,
};

export const metaReducers: MetaReducer<State>[] = environment.production ? [] : [debug];
