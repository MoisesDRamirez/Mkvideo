const navegacion = document.getElementById('nav')
const boton = document.querySelector('#boton')

boton.addEventListener('click', hideShow)

function hideShow() {
    if(nav.classList.contains('is-active')){
        nav.classList.remove('is-active')

    }

    else{
        nav.classList.add('is-active')

    }

    
}