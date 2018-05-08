import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DBService } from '../providers/db.service';

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist.component.scss"]
})
export class ArtistComponent implements OnInit {
  sub
  artist: any
  constructor(private route: ActivatedRoute, private db: DBService) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const name = params['name'];
      this.artist = this.db.musics().artist(name)
      console.log(this.artist)
    });
  }
}
