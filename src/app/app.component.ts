import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  funcionarios: Funcionario[] = [];

  aoAdicionar(funcionario: Funcionario) {
    //console.log(funcionario);

    this.funcionarios.push(funcionario)
    console.log(funcionario.numero);
  }

}

interface Funcionario {
  id: number
  nome: string
  numero: number
}


/*

  adicionar(){
    console.log(`Adicionando ${this.nome}`);

    const numero = Math.round(Math.random() * 100);

    this.nome = `Davi ${numero}`;
  }

  alterarNome(event: any) {
    // console.log(event);
    this.nome = event.target.value;

  }

    desabilitarBotao(event: any){
    this.disable = event.target.value;
  }


*/
