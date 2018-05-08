import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../core/providers/common.service';
import { DBService } from '../providers/db.service';

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.scss"]
})
export class AlbumsComponent implements OnInit {
  albums
  constructor(private common: CommonService, private db: DBService) {
    
  }

  ngOnInit() {
    setInterval(_=>{
      console.log(this.common.routeData)
    },1000)
    if (this.common.routeData && this.common.routeData.name)
      this.albums = this.db.musics().albums(this.common.routeData.name)
  }
}
