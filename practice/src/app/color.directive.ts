import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private element:ElementRef) {
    this.element.nativeElement.style.color="red";
   }
   @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.color="yellow"
   }
   @HostListener('mouseleave') onMouseLeave(){
    this.nani("green");
  }
   nani(shiva){
    this.element.nativeElement.style.color=shiva;
   }

  

}
