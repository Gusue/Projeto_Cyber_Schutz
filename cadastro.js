const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('password-two')
const rg = document.getElementById('rg')
const age = document.getElementById('age')
const tel = document.getElementById('tel')
const cep = document.getElementById('cep')
const city = document.getElementById('city')
const quadra = document.getElementById('quadra')
const conjunto = document.getElementById('conjunto')
const complemento = document.getElementById('complemento')
const name_responsavel = document.getElementById('name_responsavel')
const cpf_responsavel = document.getElementById('cpf_responsavel')
const rg_responsavel = document.getElementById('rg_responsavel')
const vinculo_responsavel = document.getElementById('vinculo_responsavel')
const tel_responsavel = document.getElementById('tel_responsavel')
const email_responsavel = document.getElementById('email_responsavel')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()
    const rgValue = rg.value.trim()
    const ageValue = age.value.trim()
    const telValue = tel.value.trim()
    const cepValue = cep.value.trim()
    const cityValue = city.value.trim()
    const quadraValue = quadra.value.trim()
    const conjuntoValue = conjunto.value.trim()
    const complementoValue = complemento.value.trim()
    const name_responsavelValue = name_responsavel.value.trim()
    const cpf_responsavelValue = cpf_responsavel.value.trim()
    const rg_responsavelValue = rg_responsavel.value.trim()
    const vinculo_responsavelValue = vinculo_responsavel.value.trim()
    const tel_responsavelValue = tel_responsavel.value.trim()
    const email_responsavelValue = email_responsavel.value.trim()

    if(usernameValue === '' ) {
        // mostrar erro
        // add classe
        setErrorFor(username, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(username)
    }

    if(emailValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(email, 'Preencha esse campo')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(email)
    }
   
    if(passwordValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(password, 'Preencha esse campo')

    } else if(passwordValue.length < 8) { 
        setErrorFor(password, 'Senha deve ter mais que 8 caracteres')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(password)
    }

    if(passwordtwoValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(passwordtwo, 'Preencha esse campo')

    } else if(passwordValue !== passwordtwoValue) { 
        setErrorFor(passwordtwo, 'Senhas não tão iguais')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(passwordtwo)
    }

    if(rgValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(rg, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(rg)
    }

    if(ageValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(age, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(age)
    }

    if(telValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(tel, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(tel)
    }

    if(cepValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(cep, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(cep)
    }

    if(cityValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(city, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(city)
    }

    if(quadraValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(quadra, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(quadra)
    }

    if(conjuntoValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(conjunto, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(conjunto)
    }

    if(complementoValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(complemento, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(complemento)
    }

    if(name_responsavelValue === '' && ageValue<18) {
        // mostrar erro
        // add classe
        setErrorFor(name_responsavel, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(name_responsavel)
    }

    if(cpf_responsavelValue === '' && ageValue<18) {
        // mostrar erro
        // add classe
        setErrorFor(cpf_responsavel, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(cpf_responsavel)
    }

    if(rg_responsavelValue === '' && ageValue<18) {
        // mostrar erro
        // add classe
        setErrorFor(rg_responsavel, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(rg_responsavel)
    }

    if(vinculo_responsavelValue === '' && ageValue<18) {
        // mostrar erro
        // add classe
        setErrorFor(vinculo_responsavel, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(vinculo_responsavel)
    }

    if(tel_responsavelValue === '' && ageValue<18) {
        // mostrar erro
        // add classe
        setErrorFor(tel_responsavel, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(tel_responsavel)
    }

    if(email_responsavelValue === '' && ageValue<18) {
        // mostrar erro
        // add classe
        setErrorFor(email_responsavel, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(email_responsavel)
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}