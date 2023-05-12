import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css'],
})
export class NavbarComponentComponent implements OnInit {
  gameName: string | null = '';
  isCreateGame: boolean | null = true;
  username: string | null = '';
  roomUrl: string = 'https://planning-poker-app.netlify.app/loading-page';
  isModalOpen: boolean = false;
  buttonText: string = 'Copiar link';

  constructor(
    private gameService: GameService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (!this.gameName) {
      this.gameName = sessionStorage.getItem('gameName');
    }
    if (!this.username) {
      this.username = sessionStorage.getItem('username');
    }
    if (this.isCreateGame) {
      this.isCreateGame = !!sessionStorage.getItem('isCreateGame');
    }

    this.gameService.getGameName$().subscribe(({ gameName }) => {
      return (this.gameName = gameName);
    });

    this.gameService
      .getCreateGame$()
      .subscribe(({ isCreateGame }) => (this.isCreateGame = isCreateGame));

    this.userService
      .getUsername$()
      .subscribe(({ username }) => (this.username = username));
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  copyToClipboard() {
    const textField = document.createElement('textarea');
    textField.innerText = this.roomUrl;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    this.buttonText = 'Copiado';
  }
}
