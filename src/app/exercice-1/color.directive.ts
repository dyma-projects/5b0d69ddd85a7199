import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[color]'
})
export class ColorDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:keydown', ['$event']) keyup(event) {
    switch(event.key) {
      case 'ArrowDown':
        this.changeColor('blue');
        break;
      case 'ArrowUp':
        this.changeColor('red');
        break;
      case 'ArrowRight':
        this.changeColor('orange');
        break;
      case 'ArrowLeft':
        this.changeColor('yellow');
        break;
      default:
        this.changeColor('black');
        break;
    }
  }

  // Function change color
  private changeColor(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
