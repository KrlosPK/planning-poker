import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { CreateGamePageComponent } from './pages/create-game-page/create-game-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'loading-page', pathMatch: 'full' },
  { path: 'loading-page', component: LoadingPageComponent },
  { path: 'create-game', component: CreateGamePageComponent },
  { path: 'game', component: GamePageComponent },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
