const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".lista-menu");

hamburguer.addEventListener("click", () => {  // Chama "hambueguer" e adiciona e quando houver um clique vai 
    hamburguer.classList.toggle('active'); //Chama hamburguer e adiciona a active
    navMenu.classList.toggle('active'); //Chama navMenu e adiciona a active
})