import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[appScrollDirective]'
})
export class ScrollDirective {
	scrollPosition: number;

	constructor(public elementRef: ElementRef) {
		this.scrollPosition = 0;
		this.restore()
	}

	restore() {
    this.elementRef.nativeElement.scrollTop = this.scrollPosition;
	}

	store() {
    this.scrollPosition = this.elementRef.nativeElement.scrollTop;
  }
}
