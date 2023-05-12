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

  changeUsername(newUsername: string) {
    this.user.username = newUsername;
    this.user$.next(this.user);
  }
  getUsername$(): Observable<User> {
    return this.user$.asObservable();
  }
}
