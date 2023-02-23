function testes() {
  var nome = "Gustavo";
}
//console.log(nome) Nome não existe nesse contexto

//escopo utilizado para fins de organização de código
{
  //Vai ficar definido apenas nesse Escopo
  let nome = "Gustavo"; //variavel local
  function teste(nome) {
    console.log(`olá ${nome}`);
  }//funcão global

  let escopo = function (nome) {
    console.log(`olá ${nome}`);
  }//funcão local
  teste("teste escopo");
  escopo("teste escopo 2")
}
teste("teste global");
//console.log(nome)// vai dar erro pois não existe 
//console.log(escopo)//vai dar erro pois não existe 

var arrow = (nome)=>{
    alert(`olá mundo ${nome}`)
}
arrow("Gustavo");