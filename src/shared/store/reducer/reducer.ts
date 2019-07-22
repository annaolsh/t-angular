import { Actions, ActionTypes } from './../actions/actions';
import { initialState, State } from '../state/state';

export function featureReducer(state = initialState, action: Actions): State {
   switch (action.type) {
      case ActionTypes.GET_LIVE_DATA:
        return {
          ...state,
        };
      case ActionTypes.SAVE_LIVE_DATA:
        return {
          ...state,
          liveData: action.payload.liveData
        };
      default: {
         return state;
      }
    }
 }
