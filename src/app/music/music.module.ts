import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { Routes, RouterModule } from '@angular/router'

import { WalkerService } from "./providers/walker.service";
import { DBService } from "./providers/db.service";
import { ArtistComponent } from './artist/artist.component';
import { ArtistsComponent } from "./artists/artists.component";
import { AlbumsComponent } from './albums/albums.component';
import { TitleComponent } from './title/title.component';
import { TitlesComponent } from './titles/titles.component';
import { AlbumComponent } from './album/album.component';
import { ToArrayPipe } from '../pipe/to-array,pipe';
import { PlayerComponent } from './player/player.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: MusicComponent, children: [
          { path: 'artists', component: ArtistsComponent },
          { path: 'albums', component: AlbumsComponent },
          { path: 'titles', component: TitlesComponent },
          { path: 'album/:name', component: AlbumComponent },
          { path: 'artist/:name', component: ArtistComponent },
        ]
      },
    ])
  ],
  declarations: [
    MusicComponent, 
    ArtistComponent, 
    ArtistsComponent, 
    AlbumsComponent, 
    TitleComponent, 
    TitlesComponent,
    AlbumComponent,
    ToArrayPipe,
    PlayerComponent
  ],
  providers: [
    WalkerService,
    DBService
  ]
})
export class MusicModule { }
