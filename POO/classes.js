class Animal{
    constructor(raca){
        this.raca = raca;
    }
     printaraca(){
        return this.raca
    }
}

class Cachorro extends Animal{//Declara a classe e herda tudo da classe animal
  constructor(raca){
    super(raca)//invoca o construtor da classe pai
    this.nome = 'safadinho'
  }
  printNome(){
    return this.nome;
  }
}
//quando se tem parametro no construtor do pai, tem que ter no construtor do filho também

//animal = new Animal("gatinho");
//alert(animal.printaraca())
cachorro = new Cachorro("bulldog");
//alert(cachorro.printaraca());
//alert(cachorro.printNome())