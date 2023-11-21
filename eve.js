const changeToEvent = () => {
    const containerEvent = document.querySelector('.container-eventos')
    containerEvent.classList.remove('inactive')
    const containerActivity = document.querySelector('.container-atividades')
    containerActivity.classList.add('inactive')
    const buttonEvent = document.querySelector('.button-eventos')
    buttonEvent.classList.remove('inactive')
    const buttonActivity = document.querySelector('.button-atividades')
    buttonActivity.classList.add('inactive')
    const elements = document.querySelectorAll('.section-eventos')
    for(let i=0; i<elements.length; i++){
        elements[i].style.display = "initial"
    } 
}
const changeToActivity = () => {
    const containerEvent = document.querySelector('.container-eventos')
    containerEvent.classList.add('inactive')
    const containerActivity = document.querySelector('.container-atividades')
    containerActivity.classList.remove('inactive')
    const buttonEvent = document.querySelector('.button-eventos')
    buttonEvent.classList.add('inactive')
    const buttonActivity = document.querySelector('.button-atividades')
    buttonActivity.classList.remove('inactive')
    const elements = document.querySelectorAll('.section-atividades')
    for(let i=0; i<elements.length; i++){
        elements[i].style.display = "initial"
    } 
}
