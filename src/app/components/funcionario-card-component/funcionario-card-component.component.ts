import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-card-component',
  templateUrl: './funcionario-card-component.component.html',
  styleUrls: ['./funcionario-card-component.component.css']
})
export class FuncionarioCardComponentComponent  {


  @Input() funcionario: any;

  getEstiloCartao(){
    return{
      backgroundColor: this.funcionario.id % 2 === 0 ? 'lightblue' : 'lightgreen'
    }
  }


  //getClassesCss() {
  //  return ['badge', 'badge-default'];
  //}

  isAdmin() {
    return this.funcionario.numero % 2 == 0;
  }

}
