import { Component } from "@angular/core";
import { SidePanelService } from "../providers/sidepanel.service";

/**
 * SidePanel Component
 */
@Component({
  selector: "sidePanel",
  templateUrl: "./side-panel.component.html",
  styleUrls: ["./side-panel.component.scss"]
})
export class SidePanelComponent {
  /**
   * Load dependencies
   * @param {SidePanelService} sidepanel SidePanelService to track change outside the component
   */
  constructor(public sidepanel: SidePanelService){}
}
 