import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGameComponentComponent } from './components/create-game-component/create-game-component.component';
import { GameComponentComponent } from './components/game-component/game-component.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  { path: 'create-game', component: CreateGameComponentComponent },
  { path: 'game', component: GameComponentComponent },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
