import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'black';
  @Input('appBetterHighlight') highLightColor = 'red';
  @HostBinding('style.color') color: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.color = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
  }

  @HostListener('mouseenter')
  mouseenter(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
    this.color = this.highLightColor;
  }

  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.color = this.defaultColor;
  }
}
