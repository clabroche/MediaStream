import { Component, Input, SimpleChange } from "@angular/core";

/**
 * Make a popoper around items
 */
@Component({
  selector: "popover",
  templateUrl: "./popover.component.html",
  styleUrls: ["./popover.component.scss"]
})
export class PopoverComponent {
  /**
   * Open or close popover;
   * Default: close 
   */
  @Input('open') open = false
  /**
   * Define the placment of popover
   */
  @Input('placement') placement = 'right'
  /**
   * private boolean to watching open/close status
   */
  _open = false

  /**
   * Track changes on input open to reflect status on private keys
   * @param changes 
   */
  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    this._open = changes['open'].currentValue
  }
}
 