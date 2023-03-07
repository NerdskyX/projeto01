import { Component } from '@angular/core';

@Component({
  selector: 'app-novo-componente',
  templateUrl: './novo-componente.component.html',
  styleUrls: ['./novo-componente.component.css']
})
export class NovoComponenteComponent {
  //atributos
  private nome:string;
  private anoNascimento:number;

  //contrutor
  constructor() {
    this.nome = "Vitor Belo Horizonte"
    this.anoNascimento = 2005
  }

  //ações

  idade(): number {
    return 2023 - this.anoNascimento;
  }

  ngOnInit(): void{
    console.log("Nome: " + this.nome)
    console.log("Idade: "+ this.idade())
  }

}
