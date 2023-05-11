import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelOptionsComponent } from './panel-options.component';

describe('PanelOptionsComponent', () => {
  let component: PanelOptionsComponent;
  let fixture: ComponentFixture<PanelOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelOptionsComponent]
    });
    fixture = TestBed.createComponent(PanelOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
