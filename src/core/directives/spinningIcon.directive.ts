import { Directive, HostListener, Renderer2, ElementRef } from "@angular/core";

/**
 * spin an icon
 */
@Directive({
  selector: "[spinning-icon]",
  exportAs:'spinning'
})
export class SpinningIconDirective {

  /**
  * Load some dependencies
  * @param renderer 
  * @param hostElement 
  */
  constructor(private renderer: Renderer2, private hostElement: ElementRef) { }

  start(event: any): void {
    this.renderer.addClass(this.hostElement.nativeElement, 'spin-animation');
    this.renderer.addClass(this.hostElement.nativeElement, 'fa-spinner');
  }

  stop(){
    this.renderer.removeClass(this.hostElement.nativeElement, 'spin-animation');
    this.renderer.removeClass(this.hostElement.nativeElement, 'fa-spinner');
  }
}
