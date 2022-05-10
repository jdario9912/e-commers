const validaCampoEmail = (campoEmail, campoAlert) => {
    if (campoEmail.validity.valueMissing) {
        campoAlert.removeAttribute('hidden');
        campoAlert.textContent = 'este campo es requerido';
        campoAlert.classList.add('formulario__alert');
        campoEmail.classList.add('alert');
        campoEmail.parentElement.classList.add('formulario__alert-label');
    }else{
        campoAlert.classList.remove('formulario__alert');
        campoAlert.textContent = '';
        campoEmail.parentElement.classList.remove('formulario__alert-label');
        
        if (campoEmail.validity.typeMismatch) {
            campoAlert.removeAttribute('hidden');
            campoAlert.textContent = 'el e-mail ingresado no es valido';
            campoEmail.classList.add('alert');
            campoAlert.classList.add('formulario__alert');
            campoEmail.parentElement.classList.add('formulario__alert-label');
        }else{
            campoAlert.classList.remove('formulario__alert');
            campoAlert.textContent = '';
            campoEmail.parentElement.classList.remove('formulario__alert-label');
        }
    }
}

const validaCampoPassword = (campoPassword, campoAlert) => {
    if (campoPassword.validity.valueMissing) {
        campoAlert.removeAttribute('hidden');
        campoAlert.textContent = 'este campo es requerido';
        campoAlert.classList.add('formulario__alert');
        campoPassword.classList.add('alert');
        campoPassword.parentElement.classList.add('formulario__alert-label');
    }else{
        campoAlert.classList.remove('formulario__alert');
        campoAlert.textContent = '';
        campoPassword.parentElement.classList.remove('formulario__alert-label');
    }
}

export const accionesCampoLogin = {
    validaCampoEmail,
    validaCampoPassword
}