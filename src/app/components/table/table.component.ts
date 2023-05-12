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
    { id: 1, score: 1, username: 'Carlos', rol: Role.OWNER, hasSelected: false},
    { id: 2, score: 5, username: 'Karen', rol: Role.PLAYER, hasSelected: true},
    { id: 3, score: 13, username: 'Stiven', rol: Role.PLAYER, hasSelected: true},
    { id: 4, score: 21, username: 'Juan', rol: Role.PLAYER, hasSelected: true},
    { id: 5, score: 21, username: 'Andres', rol: Role.PLAYER, hasSelected: true},
    { id: 6, score: 3, username: 'Lau', rol: Role.SPECTATOR, hasSelected: true},
    { id: 7, score: 13, username: 'Luisa', rol: Role.PLAYER, hasSelected: true},
    { id: 8, score: 8, username: 'Kevin', rol: Role.PLAYER, hasSelected: true},
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
