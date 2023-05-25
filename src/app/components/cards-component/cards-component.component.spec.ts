import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponentComponent } from './cards-component.component';
import { CardService } from 'src/app/services/card.service';
import { UserService } from 'src/app/services/user.service';

describe('CardsComponentComponent', () => {
  let component: CardsComponentComponent;
  let fixture: ComponentFixture<CardsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsComponentComponent],
    });
    fixture = TestBed.createComponent(CardsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate average score', () => {
    const test = component.calculateAverageScore([1, 2, 3, 4, 5]);
    expect(test).toEqual(3);
  });

  it('test_card_data_retrieval', () => {
    const cardService = new CardService();
    const cardData = { index: -1, showCard: 'true', averageScore: [1, 2, 3] };
    cardService.getCardData$().subscribe(() => cardData);

    const component = new CardsComponentComponent(
      new UserService(),
      cardService
    );

    expect(component.selectedCardIndex).toBe(cardData.index);
    expect(component.showCard).toBe(cardData.showCard);
    expect(component.calculateAverageScore(cardData.averageScore)).toBe(2);
  });

  it('should extract fibonacci scores and assign them to cards', () => {
    const target = {
      value: 'Fibonacci (0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ?, ☕)',
    };
    const fibonacci = [
      { score: 0 },
      { score: 1 },
      { score: 2 },
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

    const result = component.changeScoreMode({ target });

    expect(result).toEqual(fibonacci);
    expect(component.cards).toEqual(fibonacci);
  });

  it('should extract modified fibonacci scores and assign them to cards', () => {
    const target = { value: 'Modified Fibonacci (0, 1, 2, 3, 5, 8, 13, 20, 40, 100, ?, ☕)' };
    const powersOfTwo = [
      { score: 0 },
      { score: 1 },
      { score: 2 },
      { score: 3 },
      { score: 5 },
      { score: 8 },
      { score: 13 },
      { score: 20 },
      { score: 40 },
      { score: 100 },
      { score: '?' },
      { score: '☕' },
    ];

    const result = component.changeScoreMode({ target });

    expect(result).toEqual(powersOfTwo);
    expect(component.cards).toEqual(powersOfTwo);
  });
});
