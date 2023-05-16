import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class Game {
  gameName: string = '';
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
    this.game$ = new Subject<Game>();
  }

  changeGameName(newGameName: string) {
    this.game.gameName = newGameName;
    this.game$.next(this.game);
  }
  revealCards(revealCard: boolean) {
    this.game.isRevealCard = revealCard;
    this.game$.next(this.game);
  }

  getGameData$(): Observable<Game> {
    return this.game$.asObservable();
  }
}
