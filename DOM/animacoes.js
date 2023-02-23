//var box = document.querySelector(".box");
/*
function mexer(){
   setTimeout(() => {
    box.classList.add("animEscale")
   }, 1000);
}
box.addEventListener("click",()=>{
//mexer();
})//event;
*/
/*
let verMais = document.querySelector(".conteudo span");
verMais.addEventListener("click", () => {
  let paragrafo = document.querySelector(".conteudo p");
  if (paragrafo.classList.contains("mostrar")) {
    paragrafo.classList.remove("mostrar");
    verMais.innerHTML = "Ver mais";
  } else {
    paragrafo.classList.add("mostrar");
    verMais.innerHTML = "Ver menos";
  }
});
*/

var lastIndex = 0; //receber qual a ultima imagem

var imagens = document.querySelectorAll(".img"); //Recebe todas as imagens
imagens.forEach((item, index) => {
  document.querySelectorAll(".bulletSingle")[index].addEventListener("click", (atual) => {
      console.log("o bullet clicado foi o " + index); //Mostra qual foi o bullet clicado;
      let lastImg = document.querySelectorAll(".img")[lastIndex]; //Pega a antiga imagem em foco
      let ActualImg = document.querySelectorAll(".img")[index]; //Pega a atual imagem em foco
      console.log(
        "a imagem antiga foi :" + lastImg + " e a atual é:" + ActualImg
      );

      document
        .querySelectorAll(".bulletSingle")
        [lastIndex].classList.remove("active-bullet");//tira o status de ativo do antigo
      document
        .querySelectorAll(".bulletSingle")
        [index].classList.add("active-bullet");//coloca o status de ativo no novo
      lastIndex = index;
      lastImg.style.display = "none";
      ActualImg.style.display = "block";
    });
});
