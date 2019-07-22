import { GameState } from './../state/game-state';

import { GetLiveData } from './../actions/actions';
import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';
import * as fromFeature from '../reducers';


export const getLiveDataState = createSelector(
  fromFeature.getGameState,
  (state: GameState) => state.liveData
);

// export const getSelectedCompany = createSelector(
//   fromFeature.getGameState,
//   (state: GameState) => state.selectedCompany
// );


// const getLiveData = (state: State): any => state.liveData;
// const getSelectedCompany = (state: State): string => state.selectedCompany;


// export const selectTheState: MemoizedSelector<
//   object,
//   State
// > = createFeatureSelector<State>('State');

// export const selectLiveData: MemoizedSelector<object, any> = createSelector(
//   selectTheState,
//   getLiveData
// );

// export const selectSelectedCompany: MemoizedSelector<object, any> = createSelector(
//   selectTheState,
//   getSelectedCompany
// );
