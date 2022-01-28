import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColoridoDirective]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirectiveDirective {

  @HostBinding('style.backgroundColor') corDeFundo: string = 'transparent';
  @HostBinding('style.transition') transicao: string = ' ';

  @Input('appCampoColoridoDirective') cor = ' ';


  constructor(

  ) { }
  //  @HostListener('focus')
  colorir(){
    this.corDeFundo = this.cor;
    this.transicao = "0.5s";
  }

  // @HostListener('blur')
  descolorir(){
    this.corDeFundo = 'transparent';
    this.transicao = "0.5s";
  }
}
