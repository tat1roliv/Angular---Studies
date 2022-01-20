import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { TesteComponentComponent } from './teste-component/teste-component.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { NgContentComponent } from './ng-content/ng-content.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    TesteComponentComponent,
    NgSwitchComponent,
    DiretivaNgforComponent,
    NgClassComponent,
    DiretivaNgstyleComponent,
    OperadorElvisComponent,
    NgContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
