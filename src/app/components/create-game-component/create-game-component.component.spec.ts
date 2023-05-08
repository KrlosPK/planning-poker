import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGameComponentComponent } from './create-game-component.component';

describe('CreateGameComponentComponent', () => {
  let component: CreateGameComponentComponent;
  let fixture: ComponentFixture<CreateGameComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateGameComponentComponent]
    });
    fixture = TestBed.createComponent(CreateGameComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
