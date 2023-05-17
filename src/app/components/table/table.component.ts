import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { GameService } from 'src/app/services/game.service';
import { Role, User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  // ? User data
  username: string = '';
  score: number = 0;
  rol: string = '';
  hasSelected: boolean = false;
  player: User[] | null = [];

  hasChosenCardPlayers: number = 0;
  isGameOver: boolean = false;
  isLoading: boolean = false;
  isRevealCards: boolean = false;
  users: User[] = [
    { id: 2, score: 5, username: 'Karen', rol: Role.PLAYER, hasSelected: true},
    { id: 3, score: 13, username: 'Stiven', rol: Role.PLAYER, hasSelected: true},
    { id: 4, score: 21, username: 'Juan', rol: Role.PLAYER, hasSelected: true},
    { id: 5, score: 21, username: 'Andres', rol: Role.PLAYER, hasSelected: true},
    { id: 6, score: 3, username: 'Lau', rol: Role.SPECTATOR, hasSelected: true},
    { id: 7, score: 13, username: 'Luisa', rol: Role.PLAYER, hasSelected: true},
    { id: 8, score: 8, username: 'Kevin', rol: Role.PLAYER, hasSelected: true},
  ];

  constructor(
    private gameService: GameService,
    private userService: UserService,
    private cardService: CardService
  ) {}

  ngOnInit() {
    const savedPlayer = sessionStorage.getItem('player');
    if (savedPlayer) {
      this.player = JSON.parse(savedPlayer);
    }

    this.gameService
      .getGameData$()
      .subscribe(({ isRevealCard }) => (this.isRevealCards = isRevealCard));

    this.userService
      .getUserData$()
      .subscribe(({ username, rol, score, hasSelected }) => {
        this.username = username;
        this.rol = rol;
        this.score = score;
        this.hasSelected = hasSelected;
        this.player = [
          {
            id: 1,
            rol: this.rol,
            username: this.username,
            score: this.score,
            hasSelected: this.hasSelected,
          },
        ];
        sessionStorage.setItem('player', JSON.stringify(this.player));
      });
  }

  revealCards() {
    this.isLoading = true;
    setTimeout(() => {
      this.gameService.revealCards(true);
      this.cardService.toggleShowCard('false');

      this.isLoading = false;
      this.isGameOver = true;
    }, 600)

    const filteredUsers = this.users.filter(
      (user) => user.rol !== Role.SPECTATOR
    );
    filteredUsers.forEach((user) => this.cardService.increaseAverageScore(user.score));
    this.cardService.increaseAverageScore(Number(this.score))
  }
  restartGame() {
    this.gameService.revealCards(false);

    this.cardService.toggleShowCard('true');
    this.cardService.resetAverageScore([]);
    this.cardService.resetIndex(-1);

    this.userService.changeHasSelected(false);
    this.userService.changeScore(0);

    this.isGameOver = false;
  }
}
