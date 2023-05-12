import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Role, User } from 'src/app/services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  players: User[] = [];
  hasChosenCardPlayers: number = 0;
  isRevealCards: boolean = false;
  users: User[] = [
    { id: 1, score: 1, username: 'Carlos', rol: Role.OWNER },
    { id: 2, score: 2, username: 'Karen', rol: Role.PLAYER },
    { id: 3, score: 3, username: 'Stiven', rol: Role.PLAYER },
    { id: 4, score: 4, username: 'Juan', rol: Role.PLAYER },
    { id: 5, score: 5, username: 'Andres', rol: Role.PLAYER },
    { id: 6, score: 6, username: 'Lau', rol: Role.SPECTATOR },
    { id: 7, score: 7, username: 'Luisa', rol: Role.PLAYER },
    { id: 8, score: 8, username: 'Kevin', rol: Role.PLAYER },
  ];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService
      .getRevealCards$()
      .subscribe(({ isRevealCard }) => (this.isRevealCards = isRevealCard));
  }

  revealCards() {
    this.gameService.revealCards(true);
  }
}
