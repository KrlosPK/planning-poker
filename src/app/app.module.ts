import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateGamePageComponent } from './pages/create-game-page/create-game-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateGamePageComponent,
    GamePageComponent,
    LoadingPageComponent,
    NotFoundPageComponent,
    NavbarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
