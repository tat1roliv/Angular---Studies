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

  getValor(){
    return 1;
  };

  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
