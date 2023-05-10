import { CHANGE_GAME_NAME, actions } from '../actions/game.actions';

export function gameReducer(state: string = '', action: actions) {
  switch (action.type) {
    case CHANGE_GAME_NAME:
      return action.payload;
    default:
      return state;
  }
}
