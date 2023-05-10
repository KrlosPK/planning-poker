import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, Action, createAction } from '@ngrx/store';
import { Router } from '@angular/router';
import { changeGameNameAction } from 'src/app/actions/game.actions';
import { AppState } from 'src/app/interfaces/game.interface';

@Component({
  selector: 'app-create-game-page',
  templateUrl: './create-game-page.component.html',
  styleUrls: ['./create-game-page.component.css'],
})
export class CreateGamePageComponent {
  form!: FormGroup;
  gameName!: string;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.createForm();

    this.store
      .select('gameName')
      .subscribe((gameName) => (this.gameName = gameName));
  }

  get invalidGameName() {
    return (
      this.form.get('gameName')?.invalid && this.form.get('gameName')?.touched
    );
  }

  createForm() {
    this.form = this.fb.group({
      gameName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  createGame() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
    this.dispatch()

    return this.router.navigate(['/game']);
  }

  dispatch() {
    const action = new changeGameNameAction(this.gameName);
    this.store.dispatch(action);
  }
}
