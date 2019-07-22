import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { State } from '../state/state';

const getLiveData = (state: State): any => state.liveData;
const getSelectedCompany = (state: State): string => state.selectedCompany;


export const selectTheState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('State');

export const selectLiveData: MemoizedSelector<object, any> = createSelector(
  selectTheState,
  getLiveData
);

export const selectSelectedCompany: MemoizedSelector<object, any> = createSelector(
  selectTheState,
  getSelectedCompany
);
