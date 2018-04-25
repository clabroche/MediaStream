import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WalkerService } from "./providers/walker.service";
import { ArtistComponent } from "./artist/artist.component";
import { ArtistsComponent } from "./artists/artists.component";
import { AlbumsComponent } from "./albums/albums.component";
import { TitlesComponent } from "./titles/titles.component";
import { NotificationsService, Notification} from '../../core/providers/notifications.service';
@Component({
  selector: "app-music",
  templateUrl: "./music.component.html",
  styleUrls: ["./music.component.scss"]
})
export class MusicComponent implements OnInit {
  currentFileNotif: Notification;
  constructor(
    public walker: WalkerService,
    private notifsService: NotificationsService,
    private router: Router
  ) {}

  
  ngOnInit() {}
  
  urls = {
    artist: ArtistComponent.outlet,
    artists: ArtistsComponent.outlet,
    albums: AlbumsComponent.outlet,
    titles: TitlesComponent.outlet
  };
  goTo(url) {
    const nullOutlets = {}
    Object.keys(this.urls).map(url=>{
      const outlets = this.urls[url][1].outlets
      Object.keys(outlets).map(key=>nullOutlets[key] = null)
    })
    const outlet = JSON.parse(JSON.stringify(this.urls[url]))
    outlet[1].outlets = nullOutlets

    Object.keys(this.urls[url][1].outlets).map(key => (outlet[1].outlets[key] = this.urls[url][1].outlets[key]));

    this.router.navigate(outlet);
  }
  walk() {
    const sub = this.walker.currentFile.subscribe((data: string) => {
      if (!this.currentFileNotif)
        this.currentFileNotif = this.notifsService.add("Explore", "data");
      else
        this.notifsService.updateNotif(this.currentFileNotif.id, {
          msg: data
        });
    });
    this.walker.readdir().then(data => {
      sub.unsubscribe();
    });
  }
}
