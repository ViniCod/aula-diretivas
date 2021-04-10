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

  alterarExibicao() {
    this.esconder = !this.esconder;
    this.textoBotao = this.esconder ? "Exibir" : "Esconder";
  }
}
