import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Estruturas de dados e algoritmos com JavaScript',
    rating: 4.54546,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),//indice do mes comeca em 0, mes 6 = 5
    url: 'https://loiane.training/continuar-curso/angular'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
