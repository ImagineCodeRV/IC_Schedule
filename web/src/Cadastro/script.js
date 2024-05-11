const dados = document.getElementsByClassName('dados')
const campos = document.querySelectorAll('input.campo-required')
const spans = document.querySelectorAll('span.span-required')
const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
// código para validação de email

dados.addEventListener('submit', (event) => {
    event.preventDefault()
    nameValidate()
    surnameValidate()
    emailValidate()
    passwordValidate()
    comparePassword()
});

function setError(index){
    // em caso do if ser true, aplicar as configirações abaixo
    campos[index].style.border = '3px solid #c23924'
    spans[index].style.display = 'block'
}

function removeError(index){
    // sendo if false, aplicar essas configurações
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate() {
    if (campos[0].value.length < 4){
        setError(0)
    } else {
        removeError(0)
    }
}

function surnameValidate() {
    if (campos[1].value.length < 4) {
        setError(1)
    } else {
        removeError(1)
    }
}

function emailValidate() {
    if (!emailRegex.test(campos[2].value)) {
        setError(2)
    } else {
        removeError(2)
    }
}

function passwordValidate() {
    if (campos[3].value.length < 6 || campos[3].value.length > 12) {
        setError(3)
    } else {
        removeError(3)
        comparePassword()
    }
}

function comparePassword() {
    if (campos[3].value == campos[4].value) {
        removeError(4)
    } else {
        setError(4)
    }
}