import { CHANGE_GAME_NAME } from '../state/game.actions';
import { GameActions } from '../state';

export function gameReducer(state: string = '', action: GameActions.changeGameNameAction) {
  switch (action.type) {
    case CHANGE_GAME_NAME:
      return action.payload;
    default:
      return state;
  }
}
