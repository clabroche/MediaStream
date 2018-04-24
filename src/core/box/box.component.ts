import { Component, Input } from "@angular/core";

/**
 * Display Box Container
 */
@Component({
  selector: "box",
  templateUrl: "./box.component.html",
  styleUrls: ["./box.component.scss"]
})
export class BoxComponent {

  @Input() title:String



}
 