// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        if(destino){
            destino.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animação ao rolar a página
const elementos = document.querySelectorAll('.card, .consulta, .sobre');

function revelarElementos(){

    const alturaTela = window.innerHeight;

    elementos.forEach(item=>{

        const topo = item.getBoundingClientRect().top;

        if(topo < alturaTela - 120){

            item.style.opacity = "1";
            item.style.transform = "translateY(0px)";

        }

    });

}

elementos.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(40px)";
    item.style.transition=".8s";

});

window.addEventListener("scroll", revelarElementos);

revelarElementos();
const formulario = document.getElementById("formConsulta");

if(formulario){

formulario.addEventListener("submit",function(e){

e.preventDefault();

const nome=document.getElementById("nome").value;

const telefone=document.getElementById("telefone").value;

const email=document.getElementById("email").value;

const consulta=document.getElementById("consultaTipo").value;

const mensagem=document.getElementById("mensagem").value;

const texto=

`Olá!

Acabei de solicitar uma consulta.

Nome: ${nome}

Telefone: ${telefone}

E-mail: ${email}

Consulta: ${consulta}

Dúvida:

${mensagem}`;

window.open(

`https://wa.me/55SEUNUMERO?text=${encodeURIComponent(texto)}`,

"_blank"

);

});

}
