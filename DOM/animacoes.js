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

var lastIndex = 0;

let imgs = document.querySelectorAll(".img");

imgs.forEach((item,index)=>{
  document.querySelectorAll(".bulletSingle")[index].addEventListener("click",()=>{
    let actualImage = document.querySelectorAll(".img")[index];//Pega a imagem Atual
    let lastImg = document.querySelectorAll(".img")[lastIndex];//Pega a ultima imagem
    actualImage.classList.add("active-img");//coloca a imagem atual ativa
    lastImg.classList.remove("active-img");//coloca a imagem antiga como inativa
    document.querySelectorAll(".bulletSingle")[index].classList.add("active-bullet")//coloca o bullet atual ativo
    document.querySelectorAll(".bulletSingle")[lastIndex].classList.remove("active-bullet")//coloca o bullet antigo como inativao
    lastIndex = index;//torna o ultimo index como o que está agora
 
  })
})