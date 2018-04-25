import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-titles",
  templateUrl: "./titles.component.html",
  styleUrls: ["./titles.component.scss"]
})
export class TitlesComponent implements OnInit {
  static url = [
    {
      path: "titles",
      component: TitlesComponent,
      outlet: "titles"
    }
  ];
  static outlet = ["/music", { outlets: { titles: "titles" } }];
  constructor() {}

  ngOnInit() {}
}
