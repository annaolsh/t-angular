import { Action } from '@ngrx/store';

export enum ActionTypes {
  GET_LIVE_DATA = 'GET_LIVE_DATA',
  SET_LIVE_DATA = 'SET_LIVE_DATA',
  SET_SELECTED_COMPANY = 'SET_SELECTED_COMPANY'
}

export class GetLiveData implements Action {
  readonly type = ActionTypes.GET_LIVE_DATA;
}

export class SetLiveData implements Action {
  readonly type = ActionTypes.SET_LIVE_DATA;
  constructor(public payload: any) {}
}

// export class SetSelectedCompany implements Action {
//   readonly type = 'SET_SELECTED_COMPANY';
//   constructor(public payload: any) {}
// }

export type Actions = GetLiveData | SetLiveData;
