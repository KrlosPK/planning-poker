import { Component } from '@angular/core';
import { Card } from 'src/app/services/card.service';

@Component({
  selector: 'app-cards-component',
  templateUrl: './cards-component.component.html',
  styleUrls: ['./cards-component.component.css'],
})
export class CardsComponentComponent {
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
}
