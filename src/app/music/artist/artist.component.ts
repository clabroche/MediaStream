import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist.component.scss"]
})
export class ArtistComponent implements OnInit {
  static url = [
    {
      path: "artist",
      component: ArtistComponent,
      data: { state: "profilePage" },
      outlet: "artist"
    }
  ];
  static outlet = ["/music", { outlets: { 'artist':'artist'} }];
  constructor() {}

  ngOnInit() {}
}
