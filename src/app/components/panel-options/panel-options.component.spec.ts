import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelOptionsComponent } from './panel-options.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

describe('PanelOptionsComponent', () => {
  let component: PanelOptionsComponent;
  let fixture: ComponentFixture<PanelOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelOptionsComponent],
      imports: [ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(PanelOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validate username special characters', () => {
    const possibleUsernames = [
      'John',
      'Doe',
      'Smith',
      'Carlos12',
      'Alice12',
      'Mike',
      'Laura89',
      'Peter123',
      'Emily',
      'Alex567',
      'Maxi',
      'Sarah',
      'Robert202',
      'Lily123',
    ];
    const regex =
      /^(?=.*[a-zA-Z])(?!.*[_.*#\/-])[a-zA-Z\s]*[0-9]{0,3}[a-zA-Z\s]*$/;

    possibleUsernames.forEach((username) => {
      expect(regex.test(username)).toBeTrue();
    });
  });

  it('test_form_creation', () => {
    const panelOptions = new PanelOptionsComponent(
      new FormBuilder(),
      new UserService()
    );
    panelOptions.createForm();
    expect(panelOptions.form).toBeDefined();
  });

  it('test_create_user_with_invalid_form', () => {
    const panelOptions = new PanelOptionsComponent(
      new FormBuilder(),
      new UserService()
    );
    panelOptions.createForm();
    panelOptions.createUser();
    expect(panelOptions.invalidUsername.errors?.['required']).toBeTruthy();
    panelOptions.form.setValue({ username: 'a', gamemode: '' });
    panelOptions.createUser();
    expect(panelOptions.invalidUsername.errors?.['minlength']).toBeTruthy();
    expect(panelOptions.invalidGamemode.errors?.['required']).toBeTruthy();
  });
});
