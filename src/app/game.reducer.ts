import { Action } from '@ngrx/store';

export function gameReducer(state: number, action: Action) {
  switch (action.type) {
    case 'INCREMENT':
      return state++;
    // case 'CHANGE_GAME_NAME':
    //   return this.gameName = state.gameName;
    default:
      return state;
  }
}
