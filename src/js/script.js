
const myObserver = new IntersectionObserver( (evento) => {
    console.log(evento)
    evento.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    })
});
const elementos = document.querySelectorAll('.hidden');

elementos.forEach( (element) => {
    myObserver.observe(element)
});
