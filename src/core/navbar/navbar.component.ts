import { Component } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { Router } from "@angular/router";
import { ProfilePageComponent } from "../../app/profilePage/profilePage.component";

/**
 * Navbar Component
 */
@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {

  /**
   * Load dependencies instances
   * @param auth  AuthService to track authenticated user
   */
  constructor(public auth: AuthService, private router: Router){}

  goToProfile() {
    this.router.navigate(ProfilePageComponent.url.infos);
  }
}
 