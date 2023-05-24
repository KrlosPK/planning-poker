import { Component, OnInit } from '@angular/core';
import { Card, CardService } from 'src/app/services/card.service';
import { UserService } from 'src/app/services/user.service';
import * as confetti from 'canvas-confetti';

@Component({
  selector: 'app-cards-component',
  templateUrl: './cards-component.component.html',
  styleUrls: ['./cards-component.component.css'],
})
export class CardsComponentComponent implements OnInit {
  // ? User Data
  hasSelected: boolean = false;
  username: string = '';
  rol: string = '';

  // ? Card Data
  showCard: string = 'true';
  averageScore!: number[] | string;
  selectedCardIndex: number = -1;
  selectedCards!: Card[];
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
        if (showCard === 'false') {
          setTimeout(() => {
            this.startConfetti();
          }, 0);
        }
        if (averageScore?.length) {
          this.calculateAverageScore(averageScore);
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

  calculateAverageScore(averageScore: number[]): number {
    const countMap: Record<number, number> = averageScore.reduce(
      (map: Record<number, number>, score) => {
        map[score] = (map[score] || 0) + 1;
        return map;
      },
      {}
    );

    const uniquePoints = new Set(averageScore);
    this.selectedCards = Array.from(uniquePoints).map((point) => ({
      score: point,
      vote: countMap[point] || 0,
    }));

    const sum = averageScore.reduce((acc, score) => acc + score);
    const average = sum / averageScore.length;
    if (isNaN(average)) {
      this.averageScore = 'Coffee time!';
    } else {
      const formattedAverage = average.toFixed(2).replace('.', ',');
      this.averageScore = formattedAverage;
    }
    return average;
  }

  isScoreNaN(score: any): boolean {
    return isNaN(score);
  }

  startConfetti(): void {
    const myCanvas = document.querySelector('canvas');
    if (myCanvas instanceof HTMLElement) {
      const defaults = {};
      const colors = ['#757AE9', '#28224B', '#EBF4FF'];
      const myConfetti = confetti.create(myCanvas, {});

      function fire(particleRatio: any, opts: any) {
        myConfetti(
          Object.assign({}, defaults, opts, {
            particleCount: Math.floor(100 * particleRatio),
          })
        );
      }

      fire(0.25, {
        spread: 26,
        startVelocity: 10,
        origin,
        colors,
      });
      fire(0.2, {
        spread: 60,
        startVelocity: 20,
        origin,
        colors,
      });
      fire(0.35, {
        spread: 100,
        startVelocity: 15,
        decay: 0.91,
        origin,
        colors,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 10,
        decay: 0.92,
        origin,
        colors,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 20,
        origin,
        colors,
      });
    }
  }
}
