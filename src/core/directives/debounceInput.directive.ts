import { Directive, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { debounceTime } from 'rxjs/operators';

/**
 * Directive that debounce an element that supports keyListener
 */
@Directive({
  selector: '[debounce-input]'
})
export class DebounceInputDirective implements OnInit, OnDestroy {
  /**
   * Describe the debounce time; Default: 500ms
   */
  @Input() debounceTime = 500;
  /**
   * Emit and call function after the debounce time
   */
  @Output() debounceClick = new EventEmitter();
  /**
   * Observable that register the flow
   */
  private subject = new Subject();
  /**
   * Instance of the observable to close when component die
   */
  private subscription: Subscription;

  

  /**
   * Register observable pipe that describe the flow of the debounce directive
   */
  ngOnInit() {
    this.subscription = this.subject.pipe(
      debounceTime(this.debounceTime)
    ).subscribe(e => this.debounceClick.emit(e));
  }

  /**
   * Unregister observable on the component destruct
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Trigger keyup event and inject it to the pipe of the debounce 
   * @param {Object} event  
   */
  @HostListener('keyup', ['$event'])
  keyupEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    this.subject.next(event);
  }
}
