import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-artists",
  templateUrl: "./artists.component.html",
  styleUrls: ["./artists.component.scss"]
})
export class ArtistsComponent implements OnInit {
  static url = [
    {
      path: "artists",
      component: ArtistsComponent,
      outlet: "artists"
    }
  ];
  static outlet = ["/music", { outlets: { 'artists': "artists" } }];
  constructor() {}

  ngOnInit() {
  }
}
