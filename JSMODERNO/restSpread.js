
/* Spread:
var nomesSpread = [{
    nome:'Gustavo'
},
{
    nome:'Italo'
}
]

const nomes = [...nomesSpread,//Ao fazer isso concateno as duas variaveis, colocando nomesSpread no começo
    {
        nome:'Matheus'
    }
]
*/

//Rest
function testes(...numero){
    //console.log(numero)
    //console.log(numero[6])
}
testes(1,2,3,4,5,6,{nome:'gustavo'});//parametros são passados e ficam como um array