import { Directive, HostListener } from "@angular/core";

/**
 * Prevent bubbling of events
 */
@Directive({
  selector: "[click-stop-propagation]"
})
export class ClickStopPropagation {
  /**
   * Trigger click event to stop propagation
   * @param {Object} event 
   */
  @HostListener("click", ["$event"])
  public onClick(event: any): void {
    event.stopPropagation();
  }
}
