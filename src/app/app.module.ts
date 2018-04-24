import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module'
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'
import { MusicModule } from "./music/music.module";
import { AppRoutingModule } from '../routing/app-routing.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    MusicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
