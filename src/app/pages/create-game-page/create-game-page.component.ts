import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-game-page',
  templateUrl: './create-game-page.component.html',
  styleUrls: ['./create-game-page.component.css'],
})
export class CreateGamePageComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
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

    return this.router.navigate(['/game']);
  }
}
