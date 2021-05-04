import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  esconder: boolean = false;
  textoBotao = "Esconder";

  pessoas = [
    { nome: "José", idade: "18" },
    { nome: "Maria", idade: "22" },
    { nome: "Joaquim", idade: "35" }
  ];

  onAdicionarPessoa(pessoa) {
    this.pessoas = [...this.pessoas, pessoa]
  }

  alterarExibicao() {
    this.esconder = !this.esconder;
    this.textoBotao = this.esconder ? "Exibir" : "Esconder";
  }

  adicionar(nome, idade) {
    this.pessoas = [...this.pessoas, { nome: nome, idade: idade }];
  }

}
