//Pelo Id
var element = document.getElementById("box")
element.style.width = "100px";
element.style.height = "100px";
element.style.margin = "auto";
element.style.backgroundColor = "red";

//Pela classe

var element2 = document.getElementsByClassName("box");
for(let i = 0; i < element2.length; i++){
    element2[i].style.width ="100px" ;
    element2[i].style.height ="60px" ;
    element2[i].style.backgroundColor = "green" ;
    element2[i].style.border = "1px solid #f9f9f9" ;
    element2[i].style.margin ="auto" ;
}
