/*=========================================
REINADO DE MULAMBO
SCRIPT PREMIUM
==========================================*/

// LOADER

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},700);

});

// MENU

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

header.classList.add("scroll");

}else{

header.classList.remove("scroll");

}

});

// FAQ

const perguntas = document.querySelectorAll(".faq-question");

perguntas.forEach((pergunta)=>{

pergunta.addEventListener("click",()=>{

const resposta = pergunta.nextElementSibling;

const icone = pergunta.querySelector("i");

if(resposta.style.display==="block"){

resposta.style.display="none";

icone.classList.remove("fa-minus");

icone.classList.add("fa-plus");

}else{

document.querySelectorAll(".faq-answer").forEach(item=>{

item.style.display="none";

});

document.querySelectorAll(".faq-question i").forEach(icon=>{

icon.classList.remove("fa-minus");

icon.classList.add("fa-plus");

});

resposta.style.display="block";

icone.classList.remove("fa-plus");

icone.classList.add("fa-minus");

}

});

});

// ANIMAÇÃO AO ROLAR

const elementos = document.querySelectorAll(

".card,.item-publico,.depoimento,.oferta,.faq-item,.reinado-texto,.reinado-imagem"

);

const aparecer = ()=>{

const topo = window.innerHeight*0.85;

elementos.forEach(el=>{

const posicao = el.getBoundingClientRect().top;

if(posicao < topo){

el.classList.add("mostrar");

}

});

}

window.addEventListener("scroll",aparecer);

aparecer();

// BOTÃO WHATSAPP

const whatsapp = document.querySelector(".whatsapp-float");

let subir=true;

setInterval(()=>{

if(subir){

whatsapp.style.transform="translateY(-6px)";

}else{

whatsapp.style.transform="translateY(0px)";

}

subir=!subir;

},800);
