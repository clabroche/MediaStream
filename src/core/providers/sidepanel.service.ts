import { Injectable } from "@angular/core";

/**
 * Control the sidePanel outside the component
 */
@Injectable()
export class SidePanelService {
  /**
   * Component watch this variable to open/close the sidePanel
   */
  _open = false
  template
  context
  /**
   * Open sidePanel
   */
  open(template?, context?) {
    if (template) this.template = template
    if (context) this.context = context
    this._open = true
  }

  /**
   * Close sidePanel
   */
  close() {
    this._open = false
  }

  /**
   * Toggle sidePanel
   */
  toggle() {
    this._open = !this._open
  }
}