const threeSectionEl = document.querySelector('.three-section');

const myObserver = new IntersectionObserver( (evento) => {
    console.log(evento);
})

myObserver.observe(threeSectionEl);

// essa constante pegará todos os elementos que estiverem com a teg data-anime
const target = document.querySelectorAll('[data-anime]');

// vamos criar uma constante que add a classe animate

const classAnimate = 'animate';

function animateScroll(){
    // Para saber qual a distância da barra lateral do top usaremos 
    const windowTop = window.scrollY;
    
    // Para fazer a comparação entre o top da pagina e o target que eu quero vamos usar esssa função
}

window.addEventListener('scroll', () => {
    animateScroll()
})