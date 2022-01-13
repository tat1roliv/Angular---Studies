import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppComponent } from './app.component';
/*import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';*/

import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { TesteComponentComponent } from './teste-component/teste-component.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { NgClassComponent } from './ng-class/ng-class.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    TesteComponentComponent,
    NgSwitchComponent,
    DiretivaNgforComponent,
    NgClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   /* FontAwesomeModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
