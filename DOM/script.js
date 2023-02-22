var p = document.getElementsByTagName("p");
//alert(p.length)//Diz quanto paragrafos existe no documento
//alert(p[0].innerHTML)//Devolve o conteudo dentro do primeiro paragráfo

for (let i = 0; i < p.length; i++) {
  p[i].innerHTML +=  + i;
} //Troca o conteudo via JS
