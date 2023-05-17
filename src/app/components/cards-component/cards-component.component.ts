import { Component, OnInit } from '@angular/core';
import { Card, CardService } from 'src/app/services/card.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cards-component',
  templateUrl: './cards-component.component.html',
  styleUrls: ['./cards-component.component.css'],
})
export class CardsComponentComponent implements OnInit {
  hasSelected: boolean = false;
  showCard: string = 'true';
  averageScore!: number[] | string;
  username: string = '';
  rol: string = '';
  selectedCardIndex: number = -1;
  cards: Card[] = [
    { score: 0 },
    { score: 1 },
    { score: 3 },
    { score: 5 },
    { score: 8 },
    { score: 13 },
    { score: 21 },
    { score: 34 },
    { score: 55 },
    { score: 89 },
    { score: '?' },
    { score: '☕' },
  ];

  constructor(
    private userService: UserService,
    private cardService: CardService
  ) {}

  ngOnInit(): void {
    this.cardService
      .getCardData$()
      .subscribe(({ index, showCard, averageScore }) => {
        if (index) this.selectedCardIndex = index;
        if (showCard) this.showCard = showCard;
        if (averageScore?.length) {
          const sum = averageScore.reduce((acc, score) => acc + score);
          const average = (sum / averageScore.length).toFixed(2);
          const formattedAverage = average.toString().replace('.', ',');

          this.averageScore = formattedAverage;
        }
      });

    this.userService.getUserData$().subscribe(({ rol }) => (this.rol = rol));
  }

  changeScore(event: any, index: number) {
    const { innerText } = event.target;

    this.selectedCardIndex = index;

    this.userService.changeScore(innerText);
    this.userService.changeHasSelected(true);
  }
}
