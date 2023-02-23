//Promise é um objeto que representa o resultado de uma operação assíncrona, podendo este resultado ser bem sucedido (gerado pela chamada da função resolve e que desencadeia a chamada do método then) ou mal sucedido (gerado pela chamada da função reject e que desencadeia a chamada do método catch). Um exemplo simples para ilustrar o conceito:

function testes() {
  return new Promise(function (resolve, reject) {
    const erro = false;
    setTimeout(() => {
      if (erro) {
        reject("Erro...");
      } else {
        resolve("A promisse foi resolvida com sucesso");
      }
    }, 2000);


  });

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
async function teste2() {
  await testes().then(function(res){
    alert(res)//devolve o resultado da promisse
  }); //o código so vai ser compilado apos o testes for executado
  alert("olá");
}
teste2();
