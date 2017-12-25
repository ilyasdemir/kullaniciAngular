//kullanılacak eklntiler burda tanımlanır....

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { WallComponent } from './component/wall/wall.component';
import { KullaniciService } from './services/kullanici.service';
import { LoginComponent } from './component/login/login.component';

import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'wall',
    component: WallComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WallComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, FormsModule, HttpClientModule, CommonModule
  ],
  providers: [KullaniciService],
  bootstrap: [AppComponent]
})
export class AppModule { }
