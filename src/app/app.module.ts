import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateGameComponentComponent } from './components/create-game-component/create-game-component.component';
import { GameComponentComponent } from './components/game-component/game-component.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { LoadingPageComponentComponent } from './components/loading-page-component/loading-page-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateGameComponentComponent,
    GameComponentComponent,
    PageNotFoundComponentComponent,
    LoadingPageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
