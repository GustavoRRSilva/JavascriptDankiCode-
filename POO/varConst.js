/*
/*

var variavelGlobal = "Váriavel";
let variavelEscopo = "variavel de Escopo"
const constante = "Constante"

variavelEscopo = "Trocando valor";
console.log(variavelEscopo)
variavelGlobal = "Trocando Também"
//console.log(variavelGlobal) /*constante = "Tentando trocar"  varConst.js:9 Uncaught TypeError: Assignment to constant variable at varConst.js:9:12*/

{
let varEscopoTeste = 'Olá'
}
//console.log(varEscopoTeste)/*Erro pois nesse contexto ela não existe */

//Tipos mais usados

var string = "Hello";
var number = 10;
var boolean = true;

//Arrays

let nomes = ["Gustavo","Italo","Vini"]
//console.log(nomes[1])
nomes.push("Ariel")
//console.log(nomes[3])

//Condições

//var numero = 10;
//var nome = 'Felipe';
/*
if(nome == 'Gustavo'){
    console.log("O nome dele é:"+ nome)
}
else if(nome == 'Felipe'){
    console.log("o nome é felipe")
}
else{
    console.log("o nome dele não é gustavo e nem felipe")
}


if(numero == 10){
    console.log("o numero é  igual a 10")
}
else if(numero > 10){
    console.log("O numero é maior do que 10")
}
else{
    console.log("o numero é menor que 10")
}
//Diferente : !=
 if(nome != 'Gustavo'){
    console.log("o nome não é gustavo")
 }
 else{
    console.log("o nome é gustavo")
 }
 */