let nav = document.querySelector('.nav');
let section = document.querySelectorAll("section");
let li = document.querySelectorAll(".nav li");

window.addEventListener('scroll', (e) => {
    for( let i = 0; i < section.length; i++ ) {
        if( window.scrollY > section[i].offsetTop - (section[i].offsetHeight / 3)) {
            let page = '#'+section[i].getAttribute('id')
            let a = document.querySelector('[href="'+page+'"]')
            for( let i = 0; i < li.length; i++ ) {
                li[i].classList.remove('active')
            }
               a.parentElement.classList.add('active')
        }  
    }
    if ( window.scrollY > 50 ) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
})

