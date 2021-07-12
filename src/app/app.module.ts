import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GamewindowComponent } from './components/gamewindow/gamewindow.component';
import { ContestantsbarComponent } from './components/contestantsbar/contestantsbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamewindowComponent,
    ContestantsbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
