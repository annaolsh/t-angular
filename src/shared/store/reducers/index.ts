import { GameState } from './../state/game-state';
import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromLiveData from './live-data.reducer';
// import * as fromSelectedCompany from './selected-company.reducer';

export const getGameState = createFeatureSelector<GameState>('gameState');

export const reducers: ActionReducerMap<GameState> = {
  liveData: fromLiveData.LiveDataReducer,
  // selectedCompany: fromSelectedCompany.SelectedCompanyReducer
};
