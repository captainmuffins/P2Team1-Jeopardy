import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorySelectorComponent } from './components/category-selector/category-selector.component';
import { GameComponent } from './components/game/game.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component:  SignUpComponent
  },

  {path:'SableyeTest',
  component: CategorySelectorComponent},
  {path:'GemlinTest',
  component:GameComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CategorySelectorComponent]
})
export class AppRoutingModule {}
