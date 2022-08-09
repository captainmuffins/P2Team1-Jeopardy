import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './components/index/index.component';
import { CategorySelectorComponent } from './components/category-selector/category-selector.component';
import { GameComponent } from './components/game/game.component';
import { AuthService } from './services/auth/auth.service';
import { PlayersService } from './services/players/players.service';
import { CookieModule } from 'ngx-cookie';
import { ConfirmationDialogComponent } from './services/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './services/confirmation-dialog/confirmation-dialog.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    IndexComponent,
    CategorySelectorComponent,
    GameComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CookieModule.withOptions()
  ],
  providers: [
    AuthService,
    PlayersService,
    ConfirmationDialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
