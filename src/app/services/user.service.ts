import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export enum Role {
  OWNER = 'owner',
  PLAYER = 'player',
  SPECTATOR = 'spectator',
}

export class User {
  id: number = 0;
  username: string = '';
  score: number = 0;
  rol: string = '';
  hasSelected: boolean = false;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: User;
  private user$: Subject<User>;

  constructor() {
    this.user = new User();
    this.user$ = new Subject<User>();
  }

  changeRol(newRol: string) {
    this.user.rol = newRol;
    this.user$.next(this.user);
  }
  changeUsername(newUsername: string) {
    this.user.username = newUsername;
    this.user$.next(this.user);
  }
  changeScore(newScore: number) {
    this.user.score = newScore;
    this.user$.next(this.user);
  }
  changeHasSelected(newSelected: boolean) {
    this.user.hasSelected = newSelected;
    this.user$.next(this.user);
  }
  getUserData$(): Observable<User> {
    return this.user$.asObservable();
  }
}
