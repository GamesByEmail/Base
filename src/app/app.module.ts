import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { TestModule } from 'projects/base/src/public-api';

import { AppComponent } from './app.component';
import { PlayModule, StartGameModule, JoinGameModule, RulesModule } from './thegamename/public-api';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TestModule,
    PlayModule,
    StartGameModule,
    JoinGameModule,
    RulesModule,
    MatDialogModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
