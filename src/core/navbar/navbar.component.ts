import { Component } from "@angular/core";
import { Router } from "@angular/router";

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
  constructor(private router: Router){}
}
 