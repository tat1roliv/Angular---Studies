import { Component, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunos: any[] = [];

  constructor(public alunoService: AlunosService) { }

  ngOnInit(): void {
    this.alunos = this.alunoService.getAlunos();
  }

}
