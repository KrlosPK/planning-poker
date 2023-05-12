import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css'],
})
export class NavbarComponentComponent implements OnInit {
  gameName: string = '';
  isCreateGame: boolean = true;
  username: string = '';
  roomUrl: string = 'https://planning-poker-app.netlify.app/loading-page'
  isModalOpen: boolean = false;
  buttonText: string = 'Copiar link';

  constructor(private gameService: GameService, private userService: UserService) {}

  ngOnInit(): void {
    this.gameService
      .getGameName$()
      .subscribe(({ gameName }) => (this.gameName = gameName));

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
