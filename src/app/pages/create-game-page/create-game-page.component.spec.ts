import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGamePageComponent } from './create-game-page.component';
import { NavbarHomeComponent } from 'src/app/components/navbar-home/navbar-home.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('CreateGamePageComponent', () => {
  let component: CreateGamePageComponent;
  let fixture: ComponentFixture<CreateGamePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateGamePageComponent, NavbarHomeComponent],
      imports: [ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(CreateGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
