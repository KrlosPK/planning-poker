import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateGamePageComponent } from './pages/create-game-page/create-game-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { CardsComponentComponent } from './components/cards-component/cards-component.component';
import { PanelOptionsComponent } from './components/panel-options/panel-options.component';
import { TableComponent } from './components/table/table.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateGamePageComponent,
    GamePageComponent,
    LoadingPageComponent,
    NotFoundPageComponent,
    NavbarComponentComponent,
    CardsComponentComponent,
    PanelOptionsComponent,
    TableComponent,
    NavbarHomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
