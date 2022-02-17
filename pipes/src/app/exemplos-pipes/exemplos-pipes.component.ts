import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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


  livros: string[] = ['java', 'angular'];

  filtro: string = '';

  addCurso(valor: string){
    this.livros.push(valor);
    console.log(this.livros);
  }

  obterCursos(){
    if ( this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter(
      (v: any) => {
        if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
          return true;
        }
        return false;
      });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
