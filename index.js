const toggle = document.querySelector('body > div')
const on = document.querySelector('div > div')
const body = document.querySelector('body')

function turn(){
    on.classList.toggle('on')
    body.classList.toggle('night')
}

toggle.addEventListener('click', turn)