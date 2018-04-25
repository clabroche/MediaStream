import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { Routes, RouterModule } from '@angular/router'

import { WalkerService } from "./providers/walker.service";
import { ArtistComponent } from './artist/artist.component';
import { ArtistsComponent } from "./artists/artists.component";
import { AlbumsComponent } from './albums/albums.component';
import { TitleComponent } from './title/title.component';
import { TitlesComponent } from './titles/titles.component';
const routes: Routes = [
  ArtistComponent.url[0],
  ArtistsComponent.url[0],
  AlbumsComponent.url[0],
  TitleComponent.url[0],
  TitlesComponent.url[0]
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MusicComponent, ArtistComponent, ArtistsComponent, AlbumsComponent, TitleComponent, TitlesComponent],
  providers:[
    WalkerService
  ]
})
export class MusicModule { }
