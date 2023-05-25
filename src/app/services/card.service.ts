import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class Card {
  index?: number = 0;
  score: number | string = 0;
  averageScore?: number[] = [];
  showCard?: string = 'true';
  vote?: number = 0;
  isLoading?: string = 'false';
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

  increaseAverageScore(newScore: number) {
    this.card.averageScore = [...(this.card.averageScore as []), newScore];
    this.card$.next(this.card);
  }
  resetAverageScore(newScore: number[]) {
    this.card.averageScore = newScore;
    this.card$.next(this.card);
  }
  resetIndex(newIndex: number) {
    this.card.index = newIndex;
    this.card$.next(this.card);
  }
  toggleShowCard(newShowCard: string) {
    this.card.showCard = newShowCard;
    this.card$.next(this.card);
  }
  toggleIsLoading(newIsLoading: string) {
    this.card.isLoading = newIsLoading;
    this.card$.next(this.card);
  }

  getCardData$(): Observable<Card> {
    return this.card$.asObservable();
  }
}
