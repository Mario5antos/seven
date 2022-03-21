// DOM - Document Object Model 

/* Abre e fecha o menu quando clicar no icon: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll("nav .toggle")

for (const element of toggle){
    element.addEventListener('click', function(){
       nav.classList.toggle('show')
    })
}

/* Quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    }) 
}

/** mudar o header da pagina quando der o scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
    if (window.scrollY >= navHeight) {
      // scroll maior que a altura do header
      header.classList.add('scroll')
    } else {
      // menor que a altura do header
      header.classList.remove('scroll')
    }
})

/** Testimonial carousel slider swiper */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }    
  });

  /** ScrollReveal: Mostrar elementos quando der scroll na pagina */
  const scrollReveal = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 700,
      reset: true
  })

  scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonial header, #testimonial .testimonial,
    #contact .text, #contact .links,
    
    `, 
    { interval: 100 })

 /**botao voltar para o topo */    
const backToTopButton = document.querySelector('.back-to-top')

window.addEventListener('scroll', function() {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}) 

/** Menu activo conforme a secao visivel na pagina **/
const sections = document.querySelectorAll('main section[id]')
const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

window.addEventListener('scroll', function() {    

    for ( const section of sections ) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')
               
        const checkpointStart =  checkpoint >= sectionTop
        const checkpointEnd =  checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            document
              .querySelector('nav ul li a[href*=' + sectionId + ']')
              .classList.add('active')
        } else {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}) 