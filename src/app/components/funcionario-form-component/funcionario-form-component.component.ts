import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form-component',
  templateUrl: './funcionario-form-component.component.html',
  styleUrls: ['./funcionario-form-component.component.css']
})
export class FuncionarioFormComponentComponent{

  ultimoId = 0;
  nome = '';
  numero = 0;
  disable ='';
  adicionado = false;
  erroAdicionar = false;
  @Output() funcionarioAdicionado = new EventEmitter();

  red ='gray';

  adicionar(value: any) {
    this.nome = value;

    if(value == 0){

      this.erroAdicionar = true;
      this.adicionado = false;

    }else{

      this.adicionado = true;
      this.erroAdicionar = false;

      const funcionario = {
        id: ++this.ultimoId,
        nome: this.nome,
        numero: this.numero = Math.round(Math.random() * 100)
      };

      this.funcionarioAdicionado.emit(funcionario);
    }

  }

}



