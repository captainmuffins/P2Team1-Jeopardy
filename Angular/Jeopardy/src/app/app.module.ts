import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './components/index/index.component';
import { CategorySelectorComponent } from './components/category-selector/category-selector.component';
import { GameComponent } from './components/game/game.component';
import { AuthService } from './services/auth/auth.service';
import { PlayersService } from './services/players/players.service';
import { CookieModule } from 'ngx-cookie';
import { ConfirmationDialogComponent } from './services/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './services/confirmation-dialog/confirmation-dialog.service';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { SinglePlayerGameComponent } from './components/single-player-game/single-player-game.component';
import { JeopardyService } from './services/jeopardy/jeopardy.service';
import { CommonsComponent } from './components/commons/commons.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    IndexComponent,
    CategorySelectorComponent,
    GameComponent,
    ConfirmationDialogComponent,
    ScoreboardComponent,
    SinglePlayerGameComponent,
    CommonsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CookieModule.withOptions(),
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    PlayersService,
    ConfirmationDialogService,
    JeopardyService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
