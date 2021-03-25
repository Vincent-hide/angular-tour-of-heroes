import {Directive, HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustominput]'
})
export class CustominputDirective {


  constructor(el: ElementRef) {
    el.nativeElement.style.background = 'lightGreen';
  }

  @HostListener('blur', ['$event.target'])
  onBlur(el: any): void {
    el.value = el.value.toUpperCase();
  }
}
