import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.scss"]
})
export class AlbumsComponent implements OnInit {
  static url = [
    {
      path: "albums",
      component: AlbumsComponent,
      outlet: "albums"
    }
  ];
  static outlet = ["/music", { outlets: { albums: "albums" } }];
  constructor() {}

  ngOnInit() {}
}
