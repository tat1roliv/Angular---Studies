import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from '../shared/log.service';

@Injectable({ providedIn: "root" })

export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();//nao precisa da instancia da classe p acessar (static)

  private cursos: string[] = ['angular', 'java', '.net'];

  constructor(private logService: LogService){
    console.log('classe instanciada');
  }

  getCursos() {
    this.logService.consoleLog('obtendo lista de cursos');
    return this.cursos;
  }

  AddCurso(curso: string){
    this.logService.consoleLog(`criando novo curso ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

}
