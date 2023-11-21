const search = (type) =>{
    const input = document.querySelector('#searchtext')
    const text = input.value
    let elements, h2s
    switch (type){
        case 'atividades':
            elements = document.querySelectorAll('.section-atividades')
            h2s = document.querySelectorAll('.h2-atividades')
            break;
        case 'eventos':
            elements = document.querySelectorAll('.section-eventos')
            h2s = document.querySelectorAll('.h2-eventos')
            break;
    }
    for(let i=0; i<elements.length; i++){
        elements[i].style.display = "initial"
        if(!h2s[i].innerHTML.match(text)){
            elements[i].style.display = "none"
            
        }
    }  
}