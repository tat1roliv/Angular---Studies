import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: "root" })

export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();//nao precisa da instancia da classe p acessar (static)

  private cursos: string[] = ['angular', 'java', '.net'];

  constructor(){
    console.log('classe instanciada');
  }

  getCursos() {
    return this.cursos;
  }

  AddCurso(curso: string){
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

}
