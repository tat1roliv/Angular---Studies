import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "http://www.tatioliv.live/";
  cursoAngular: boolean = true;
  urlImagem: any = "https://i.picsum.photos/id/1052/400/200.jpg?hmac=f6mzeHv1XldEfKvQRGstGvtuPgGxuUhIWPyMpIBRR8k";


  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nome: string = 'ada';

  getValor(){
    return 1;
  };

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('hola');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
