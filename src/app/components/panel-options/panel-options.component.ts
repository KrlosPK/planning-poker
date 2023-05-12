import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-panel-options',
  templateUrl: './panel-options.component.html',
  styleUrls: ['./panel-options.component.css'],
})
export class PanelOptionsComponent implements OnInit {
  form!: FormGroup;
  username: string | null = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.createForm();
  }

  ngOnInit() {
    if (!this.username) {
      this.username = sessionStorage.getItem('username');
    }
    this.userService
      .getUserData$()
      .subscribe(({ username }) => (this.username = username));
  }

  createUser() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    sessionStorage.setItem('username', this.form.get('username')?.value);
    sessionStorage.setItem('gamemode', this.form.get('gamemode')?.value);
    this.userService.changeUsername(this.form.get('username')?.value);
    this.userService.changeRol(this.form.get('gamemode')?.value);

    return this.router.navigate(['/game']);
  }

  get invalidUsername(): AbstractControl {
    return this.form.get('username')!;
  }
  get invalidGamemode(): AbstractControl {
    return this.form.get('gamemode')!;
  }

  getUsernameErrorMessage(): string {
    const usernameControl = this.form.get('username');

    if (usernameControl?.invalid && usernameControl?.touched) {
      if (usernameControl?.hasError('required')) {
        return 'El nombre es obligatorio';
      }

      if (
        usernameControl?.hasError('minlength') ||
        usernameControl?.hasError('maxlength')
      ) {
        return 'Debe tener entre 5 y 20 caracteres';
      }

      if (usernameControl?.hasError('pattern')) {
        return 'No puede tener caracteres especiales ni más de 3 números';
      }
    }

    return '';
  }

  getGamemodeErrorMessage(): string {
    const gamemodeControl = this.form.get('gamemode');

    if (gamemodeControl?.invalid && gamemodeControl?.touched) {
      if (gamemodeControl?.hasError('required')) {
        return 'El modo de juego es obligatorio';
      }
    }

    return '';
  }

  createForm() {
    this.form = this.fb.group({
      username: [
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
      gamemode: ['owner', [Validators.required]],
    });
  }
}
