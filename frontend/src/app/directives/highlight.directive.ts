import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight: any;

  constructor(private el:ElementRef, public renderer: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.highlight(this.appHighlight);
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.highlight('');
  }

  private highlight(color: string){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

}
