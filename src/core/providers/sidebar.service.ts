import { Injectable } from "@angular/core";

/**
 * Control the sidebar outside the component
 */
@Injectable()
export class SideBarService {
  /**
   * Component watch this variable to open/close the sidebar
   */
  _open = false
  
  /**
   * Open sidebar
   */
  open() {
    this._open = true
  }

  /**
   * Close sidebar
   */
  close() {
    this._open = false
  }

  /**
   * Toggle sidebar
   */
  toggle() {
    this._open = !this._open
  }
}