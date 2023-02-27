//Promise é um objeto que representa o resultado de uma operação assíncrona, podendo este resultado ser bem sucedido (gerado pela chamada da função resolve e que desencadeia a chamada do método then) ou mal sucedido (gerado pela chamada da função reject e que desencadeia a chamada do método catch). Um exemplo simples para ilustrar o conceito:

var numero = Number(prompt("digite um número maior que 10"));
console.log(numero)
function teste(){
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        if(numero <= 10 ){
            reject("Número digitado foi menor ou igual a 10")
        }
        else{
            resolve("Número digitado corretamente, parabéns!")
        }
       }, 2000);
    })
}
//caso bem sucedido
/*
testes()
  .then(function (res) {
    alert(res);
  })
  .catch(function (err) {
    alert(err);
  });
*/

//funcao assincrona
async function retornaValor(){
   await teste().then(function(res){
        alert(res)
    })//await faz com que o bloco abaixo só apareça depois que a função terminar
    alert("resolvido com sucesso")
}
retornaValor();