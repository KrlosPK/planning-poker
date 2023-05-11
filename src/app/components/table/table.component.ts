import { Component } from '@angular/core';
import { User } from 'src/app/services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  players: User[] = [];
  hasChosenCardPlayers: number = 0;
}
