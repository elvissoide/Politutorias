//Cambiar estilo del navbar cuando se haga scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// Ocultar o mostrar las respuestas en la sección de preguntas
const preguntas = document.querySelectorAll('.faq');

preguntas.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        //Cambiar el simbolo del ícono
        const icono = faq.querySelector('.faq__icon i');
        if(icono.className === 'uil uil-plus'){
            icono.className = 'uil uil-minus'
        } else {
            icono.className = 'uil uil-plus'
        }
    })
})

// Ocultar mostrar menu del navbar
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-icon");
const closeBtn = document.querySelector("#close-menu-icon");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

