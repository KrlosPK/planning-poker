import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-create-game-page',
  templateUrl: './create-game-page.component.html',
  styleUrls: ['./create-game-page.component.css'],
})
export class CreateGamePageComponent {
  form!: FormGroup;
  gameName: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private gameService: GameService
  ) {
    this.createForm();
  }

  createGame() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    this.gameService.changeGameName(this.form.get('gameName')?.value);
    this.gameService.changeCreateGame(false);

    return this.router.navigate(['/game']);
  }

  get invalidGameName(): AbstractControl {
    return this.form.get('gameName')!;
  }

  getGameNameErrorMessage(): string {
    if (
      this.form.get('gameName')?.invalid &&
      this.form.get('gameName')?.touched
    ) {
      if (this.form.get('gameName')?.hasError('required')) {
        return 'El nombre es obligatorio';
      }

      if (
        this.form.get('gameName')?.hasError('minlength') ||
        this.form.get('gameName')?.hasError('maxlength')
      ) {
        return 'Debe tener entre 5 y 20 caracteres';
      }

      if (this.form.get('gameName')?.hasError('pattern')) {
        return 'No puede tener caracteres especiales ni más de 3 números';
      }
    }

    return '';
  }

  createForm() {
    this.form = this.fb.group({
      gameName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
          Validators.pattern(
            /^(?=.*[a-zA-Z])(?!.*[_.*#\/-])[a-zA-Z\s]*[0-9]{0,3}[a-zA-Z\s]*$/
          ),
        ],
      ],
    });
  }
}
