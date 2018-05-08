import { Component, OnInit } from '@angular/core';
import { DBService } from '../providers/db.service';
import { Router } from '@angular/router';
import { CommonService } from '../../../core/providers/common.service';
import { MusicComponent } from '../music.component';

@Component({
  selector: "app-artists",
  templateUrl: "./artists.component.html",
  styleUrls: ["./artists.component.scss"]
})
export class ArtistsComponent implements OnInit {
  artists =[]
  constructor(private db: DBService, public router: Router, private common: CommonService) {}

  ngOnInit() {
    this.artists = this.db.musics().artists()
  }
}
