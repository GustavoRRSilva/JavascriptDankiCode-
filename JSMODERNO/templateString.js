/* erro
var conteudo = 'Meu texto alguma coisa
'
*/

var conteudo = `aqui
se pode
quebrar linha 
sem problemas 
com o uso da crase 
ao inves das aspas
` 
//alert(conteudo)

//Tradicionalmente se quissese colocar uma variavel
var texto = `o conteudo é: `+ conteudo;
//alert(texto)

//com template string
var textoComTemplateString = `
o conteudo é: ${conteudo}

`//usar ${nomeDaVariavel}
//alert(textoComTemplateString)