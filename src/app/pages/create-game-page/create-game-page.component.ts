import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, Action } from '@ngrx/store';
import { Router } from '@angular/router';

interface AppState {
  counter: string;
}

@Component({
  selector: 'app-create-game-page',
  templateUrl: './create-game-page.component.html',
  styleUrls: ['./create-game-page.component.css'],
})
export class CreateGamePageComponent {
  form!: FormGroup;
  gameName: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.gameName = '';
    this.createForm();
    this.store.subscribe((state) => {
      console.log(this.gameName);
      this.gameName = state.counter;
      console.log(state.counter);
    });
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
    this.changeGameName()
    return this.router.navigate(['/game']);
  }

  changeGameName() {
    const action: Action = {
      type: 'INCREMENT'
    };
    this.store.dispatch(action);
  }
}
