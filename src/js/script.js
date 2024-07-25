const threeSectionEl = document.querySelector('.three-section');

const myObserver = new IntersectionObserver( (evento) => {
    console.log(evento);
})

myObserver.observe(threeSectionEl);