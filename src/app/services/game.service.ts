import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class Game {
  gameName: string = '';
  isCreateGame: boolean = true;
  averageScore: number = 0;
  gameUrl: string = '';
  isRevealCard: boolean = false;
}

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private game: Game;
  private game$: Subject<Game>;

  constructor() {
    this.game = new Game();
    this.game.gameName = '';
    this.game$ = new Subject<Game>();
  }

  changeGameName(newGameName: string) {
    this.game.gameName = newGameName;
    this.game$.next(this.game);
  }
  getGameName$(): Observable<Game> {
    return this.game$.asObservable();
  }

  changeCreateGame(isCreateGame: boolean) {
    this.game.isCreateGame = isCreateGame;
    this.game$.next(this.game);
  }
  getCreateGame$(): Observable<Game> {
    return this.game$.asObservable();
  }

  revealCards(revealCard: boolean) {
    this.game.isRevealCard = revealCard;
    this.game$.next(this.game);
  }
  getRevealCards$(): Observable<Game> {
    return this.game$.asObservable();
  }
}
