import {Directive, ElementRef, HostListener, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class scrollDirective {
  @Output() scrollChange = new EventEmitter<number>();

  constructor(private el: ElementRef) {
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrollChange.next(this.el.nativeElement);
  }

  @HostListener('scroll') onScroll() {
    this.scrollChange.next(this.el.nativeElement);
  }
}
