const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".lista-menu");
let tamP = document.getElementById("tamanhoP");
let tamM = document.getElementById("tamanhoM");
let tamG = document.getElementById("tamanhoG");
let tamGG = document.getElementById("tamanhoGG");

// document - O JS entende como HTML. get = chamar. Então seria chamar no HTML

hamburguer.addEventListener("click", () => {  // Chama "hambueguer" e adiciona e quando houver um clique vai 
    hamburguer.classList.toggle('active'); //Chama hamburguer e adiciona a active
    navMenu.classList.toggle('active'); //Chama navMenu e adiciona a active
})

function tamanhoP () { //O que está dentro da function só é executado quando é chamado.
    tamP.style.border = "3px solid #3883f5";
}

tamP.addEventListener("click", tamanhoP) // Adiciona o evento click e executa a function tamanho

