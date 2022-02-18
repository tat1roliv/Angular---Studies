import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';

import {MatButtonModule} from '@angular/material/button';
import { BotaoTesteComponent } from './botao-teste/botao-teste.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';

import { routing } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    BotaoTesteComponent,
    HomeComponent,
    LoginComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

