import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  public alunos: any[] = [
    {id: 1, nome: 'Aluno 01', email: 'aluno01@example.com'},
    {id: 2, nome: 'Aluno 02', email: 'aluno02@example.com'},
    {id: 3, nome: 'Aluno 03', email: 'aluno03@example.com'},
  ];


  getAlunos(){
    return this.alunos;
  }

  /*
  getAluno(id: number){

    let alunoFinded;

    this.alunos.forEach(aluno => {
          aluno.id == id ? alunoFinded = aluno : null
    });

    return alunoFinded;




}  */

  constructor() { }
}
