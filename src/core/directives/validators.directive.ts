import { Directive, OnDestroy, Input, AfterViewChecked, ElementRef, Renderer2} from '@angular/core';

/**
 * Load differents directive with an array of key value
 */
@Directive({
  selector: '[validators]',
  host: {
    "(input)": 'onInputChange($event)'
  }
})
export class ValidatorsDirective implements AfterViewChecked{
  /**
   * Array of key value that describe all directive to put on the element
   */
  @Input() validators;

  /**
   * Load some dependencies
   * @param renderer 
   * @param hostElement 
   */
  constructor(private renderer: Renderer2, private hostElement: ElementRef){}
  
  /**
   * Launch validator check for the first time init
   */
  ngAfterViewChecked(){
    this.onInputChange()
  }

  /**
   * Change appearance of input with goodInput/badInout class
   */
  onInputChange() {
    if (this.validators.valid) {
      this.renderer.addClass(this.hostElement.nativeElement, 'goodInput');
      this.renderer.removeClass(this.hostElement.nativeElement, 'badInput');
    } else {
      this.renderer.addClass(this.hostElement.nativeElement, 'badInput');
      this.renderer.removeClass(this.hostElement.nativeElement, 'goodInput');
    }  
  }
}
