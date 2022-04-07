import { AlunosModule } from './../alunos.module';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Aluno } from './../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  //aluno: Aluno;
  //aluno = new Aluno();
   //inscricao: Subscription;
  aluno: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: any) => this.aluno = this.alunosService.getAlunos()
    );

  }

}
