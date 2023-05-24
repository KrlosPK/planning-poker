import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponentComponent } from './cards-component.component';
import { CardService } from 'src/app/services/card.service';
import { UserService } from 'src/app/services/user.service';

describe('CardsComponentComponent', () => {
  let component: CardsComponentComponent;
  let fixture: ComponentFixture<CardsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsComponentComponent]
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
  })

  it("test_card_data_retrieval", () => {
    const cardService = new CardService();
    const cardData = { index: -1, showCard: 'true', averageScore: [1, 2, 3] };
    cardService.getCardData$().subscribe(() => cardData);

    const component = new CardsComponentComponent(new UserService(), cardService);

    expect(component.selectedCardIndex).toBe(cardData.index);
    expect(component.showCard).toBe(cardData.showCard);
    expect(component.calculateAverageScore(cardData.averageScore)).toBe(2);
  });
});
