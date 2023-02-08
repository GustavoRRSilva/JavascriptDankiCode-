var variavelGlobal = "Váriavel";
let variavelEscopo = "variavel de Escopo"
const constante = "Constante"

variavelEscopo = "Trocando valor";
console.log(variavelEscopo)
variavelGlobal = "Trocando Também"
console.log(variavelGlobal)
 /*constante = "Tentando trocar"  varConst.js:9 Uncaught TypeError: Assignment to constant variable at varConst.js:9:12*/
console.log(constante)
{
let varEscopoTeste = 'Olá'
}
console.log(varEscopoTeste)/*Erro pois nesse contexto ela não existe */

//Tipos mais usados

var string = "Hello";
var number = 10;
var boolean = true;