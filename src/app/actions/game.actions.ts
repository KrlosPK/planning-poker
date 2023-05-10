import { Action } from '@ngrx/store';

export const CHANGE_GAME_NAME = '[Create game] ChangeGameName';

export class changeGameNameAction implements Action {
  readonly type = CHANGE_GAME_NAME;

  constructor(public payload: string) {}
}

export type actions = changeGameNameAction;
