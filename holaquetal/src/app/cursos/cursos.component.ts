import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;//tipando a variavel (ts)
  //nomePortal: any;//tipagem generica (ts)

  cursos: string[];

  constructor(private cursosService: CursosService) {
    this.nomePortal = "http://www.tatioliv.live/";
    this.cursos = this.cursosService.getCursos();

    /*ngFor*/
    /*
    for (let i = 0; i < this.cursos.length; i++){
      let curso = this.cursos[i];
    }
    */

    var servico = new CursosService();

  }

  ngOnInit(): void {
  }

}
