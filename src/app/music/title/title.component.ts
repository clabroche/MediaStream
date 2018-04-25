import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-title",
  templateUrl: "./title.component.html",
  styleUrls: ["./title.component.scss"]
})
export class TitleComponent implements OnInit {
  static url = [
    {
      path: "title",
      component: TitleComponent,
      outlet: "title"
    }
  ];
  static outlet = ["/music", { outlets: { title: "title" } }];
  constructor() {}

  ngOnInit() {}
}
