import { Action, createReducer, on } from '@ngrx/store';
import * as ScoreboardPageActions from '../actions/scoreboard-page.actions';

export const initialState: ScoreboardPageActions.State = {
  home: 0,
  away: 0,
};

const __scoreboardReducer = createReducer(
  initialState,
  on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
  on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
  on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
  on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
);

export function scoreboardReducer(state: ScoreboardPageActions.State | undefined, action: Action) {
  return __scoreboardReducer(state, action);
}
