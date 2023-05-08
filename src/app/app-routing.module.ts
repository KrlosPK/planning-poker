import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGameComponentComponent } from './components/create-game-component/create-game-component.component';
import { GameComponentComponent } from './components/game-component/game-component.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { LoadingPageComponentComponent } from './components/loading-page-component/loading-page-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'loading-page', pathMatch: 'full' },
  { path: 'loading-page', component: LoadingPageComponentComponent },
  { path: 'create-game', component: CreateGameComponentComponent },
  { path: '404', component: PageNotFoundComponentComponent },
  { path: 'game', component: GameComponentComponent },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
