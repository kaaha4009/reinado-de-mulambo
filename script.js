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
