import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

const alunosRoutes: Routes = [
{path: 'alunos', component: AlunosComponent, children:[
  {path: 'novo', component: AlunoFormComponent},//alunos/novo
  {path: ':id', component: AlunoDetalheComponent},//alunos/:id
  {path: ':id/editar', component: AlunoFormComponent},//alunos/:id/editar
]},
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
