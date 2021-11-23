import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;//tipando a variavel (ts)
  //nomePortal: any;//tipagem generica (ts)

  cursos: string[] = [ 'Java', 'Angular', 'Typescript']

  constructor() {
    this.nomePortal = "http://www.tatioliv.live/";

    /*ngFor*/
    /*
    for (let i = 0; i < this.cursos.length; i++){
      let curso = this.cursos[i];
    }
    */

  }

  ngOnInit(): void {
  }

}
