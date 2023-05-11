import { Component } from '@angular/core';
import { AppState } from 'src/app/interfaces/game.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css'],
})
export class NavbarComponentComponent {
  gameName: string = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .select('gameName')
      .subscribe((gameName) => (this.gameName = gameName));
  }
}
