import { Injectable } from '@angular/core';

@Injectable({ providedIn: "root" })
export class CursosService {

  private cursos: string[] = ['angular', 'java', '.net'];

  constructor(){
    console.log('classe instanciada');
  }

  getCursos() {
    return this.cursos;
  }

  onAddCurso(curso: string){
    this.cursos.push(curso);
  }

}
