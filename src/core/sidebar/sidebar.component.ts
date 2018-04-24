import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { SideBarService } from "../providers/sidebar.service";

/**
 * Display Sidebar on the app component
 */
@Component({
  selector: "sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {
  /**
   * control css class that open/close sidebar: openHint/closeHint
   */
  hintClass:string = '';

  /**
   * import dependencies 
   * @param {Router} router allow to navigate between routes
   * @param {SideBarService} sidebar control sidebar from her service
   */
  constructor(
    public router: Router,
    public sidebar: SideBarService
  ) {}
  /**
   * Go to Home route
   */
  goToHome() { this.router.navigate(["/home"]); }
  /**
   * Go to Settings route
   */
  goToSettings() {this.router.navigate(["/settings"]);}

  /**
   * Toggle sidebar
   */
  toggleSidebar(){this.sidebar.toggle()}

  /**
   * Toggle hint beside links icons on hover 
   * @param  {Object} event event from dom element
   */
  toggleHint($event){this.hintClass = $event.type == 'mouseover' && !this.sidebar._open? 'openHint' : 'closeHint';}
}
 