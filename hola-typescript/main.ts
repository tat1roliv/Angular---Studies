import { main } from "@popperjs/core";

var minhaVar = 'minhavar';

function minhaFuncao(x,y){
    return  x + y;
}

//ES6 (2015)
//transpiler => js puro, ES5
//ej. let/var

let num = 2;
const PI = 3.14;

var numeros = [1,2,3];

numeros.map(function(valor){
    return valor*2;
});

numeros.map(valor => valor*2 );//ES 2015

//tsc main.ts