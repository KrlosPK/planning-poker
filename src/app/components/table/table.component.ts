import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { User } from 'src/app/services/user.service';

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
    { score: 1, username: 'Carlos', isPlayer: true },
    { score: 2, username: 'Karen', isPlayer: true },
    { score: 3, username: 'Stiven', isPlayer: true },
    { score: 4, username: 'Juan', isPlayer: false },
    { score: 5, username: 'Andres', isPlayer: true },
    { score: 6, username: 'Lau', isPlayer: true },
    { score: 7, username: 'Luisa', isPlayer: false },
    { score: 8, username: 'Kevin', isPlayer: false },
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
