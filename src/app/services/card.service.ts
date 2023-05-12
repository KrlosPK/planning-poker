import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class Card {
  score: number | string = 0;
  averageScore?: number[] = [];
}

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private card: Card;
  private card$: Subject<Card>;

  constructor() {
    this.card = new Card();
    this.card$ = new Subject<Card>();
  }

  increaseScore(score: number) {
    if (this.card.averageScore) {
      this.card.averageScore = [...this.card.averageScore, score];
    }
    this.card$.next(this.card);
  }

  getScoreAverage$(): Observable<Card> {
    // const totalScore = this.card.score.reduce((a, b) => a + b, 0);
    // return totalScore / this.card.score.length;
    return this.card$.asObservable();
  }
}
