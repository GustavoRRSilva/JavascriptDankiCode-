//Aula 01
/*
var pessoas = [{
    "Nome": "Gustavo",
    "idade":18,
    "Profissao":"aprendiz"
},{
    "Nome": "Laryssa",
    "idade":18,
    "Profissao":"Estagiaria"
}

]

pessoas.forEach((pessoa)=>{
alert(pessoa.Nome)
})
*/

//Aula 02
/*
function Pessoa(nome) {
    this.nome = nome;//Diz que seu nome é esse 
}

var pessoa = new Pessoa("Gustavo");
var pessoa2 = new Pessoa("Italo");

alert(pessoa.nome);
alert(pessoa2.nome)
*/

//Aula 03
/*
function Pessoa() {
  this.nome = "Gustavo";
  this.idade = 18;
  this.printNome = function () {
    alert(this.nome);
  };
  this.returnAnimal = function (animal) {
    return animal;
  };
}
/*function Animal() {
  this.nome = "cachorro";
  this.raca = "Bulldog";
}*/
/*
var pessoa = new Pessoa();

let animal = new Animal();
*/
//alert(pessoa.returnAnimal(animal).nome);

//alert(pessoa.returnAnimal(animal).raca);
