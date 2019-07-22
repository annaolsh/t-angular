import { Action } from '@ngrx/store';

export enum ActionTypes {
  GET_LIVE_DATA = 'GET_LIVE_DATA',
  SAVE_LIVE_DATA = 'SAVE_LIVE_DATA',
}

export class GetLiveData implements Action {
  readonly type = 'GET_LIVE_DATA';
}

export class SaveLiveData implements Action {
  readonly type = 'SAVE_LIVE_DATA';
  constructor(public payload: { liveData: object }) {}
}

export type Actions = GetLiveData | SaveLiveData;
