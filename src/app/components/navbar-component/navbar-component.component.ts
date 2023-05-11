import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css'],
})
export class NavbarComponentComponent implements OnInit {
  gameName: string = '';
  isCreateGame: boolean = true;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService
      .getGameName$()
      .subscribe(({ gameName }) => (this.gameName = gameName));

    this.gameService
      .getCreateGame$()
      .subscribe(({ isCreateGame }) => (this.isCreateGame = isCreateGame));
  }
}
