import { Actions, ActionTypes } from '../actions/actions';
import { initialState, GameState } from '../state/game-state';

export function LiveDataReducer(state = initialState, action: Actions): GameState {
   switch (action.type) {
      // case ActionTypes.GET_LIVE_DATA:
      //   return {
      //     ...state,
      //   };
      case ActionTypes.SET_LIVE_DATA:
        return action.payload.liveData;
      default: {
         return state;
      }
    }
 }
