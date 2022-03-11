import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

//import { RouterModule } from "@angular/router";
import { CursosRoutingModule } from "./cursos.routing.module";

import { CursosComponent } from "./cursos.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component"

import { CursosService } from "./cursos.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CursosRoutingModule
    //RouterModule
  ],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
  ],
  providers: [
    CursosService,
  ],
})
export class CursosModule {}
