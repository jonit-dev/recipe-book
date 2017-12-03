import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';
import {LogService} from '../services/log.service';

@Directive({
  selector: '[appDropdown]',
  providers: [LogService] // this directive uses a LogService, so you must register it here (providers)
})
export class DropdownDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2, private logservice: LogService) {
  }

  @HostListener('click')
  dropdownClick(eventData: Event) {


    // first, lets check if the class is already added

    if (!this.elRef.nativeElement.classList.contains('open')) {

      // if its not added, lets add it

      // lets test our logService (just an example, ok?)
      this.logservice.logMessage('Opening dropdown!');

      this.renderer.addClass(this.elRef.nativeElement, 'open');
    } else {

      // if it already have a class, lets remove it

      this.logservice.logMessage('Closing dropdown!');

      this.renderer.removeClass(this.elRef.nativeElement, 'open');
    }


  }

}
