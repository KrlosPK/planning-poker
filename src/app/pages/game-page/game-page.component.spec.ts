import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePageComponent } from './game-page.component';
import { NavbarComponentComponent } from 'src/app/components/navbar-component/navbar-component.component';
import { PanelOptionsComponent } from 'src/app/components/panel-options/panel-options.component';
import { TableComponent } from 'src/app/components/table/table.component';
import { CardsComponentComponent } from 'src/app/components/cards-component/cards-component.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('GamePageComponent', () => {
  let component: GamePageComponent;
  let fixture: ComponentFixture<GamePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        GamePageComponent,
        NavbarComponentComponent,
        PanelOptionsComponent,
        TableComponent,
        CardsComponentComponent,
      ],
      imports: [ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(GamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
