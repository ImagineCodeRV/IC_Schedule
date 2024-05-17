const campos = document.querySelectorAll('input.campo-required')
const spans = document.querySelectorAll('span.span-required')
const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
// código para validação de email

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

function emailValidate(){
    if(!emailRegex.test(campos[0].value)){
        setError(0)
    } else {
        removeError(0)
    }
}

function passwordValidate(){
    if(campos[1].value.length == 0){
        setError(1)
    } else {
        removeError(1)
    }
}

function entrar(){
    if(campos[0].value.length == 0){
        setError(0)
    } else {
        removeError(0)
    }

    if(campos[1].value.length == 0){
        setError(1)
    } else {
        removeError(1)
    }
}

