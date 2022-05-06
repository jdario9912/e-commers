const validaInputNombre = (nombre, inputNombre, alertInputNombre) => {
    if (nombre == '') {
        inputNombre.classList.add('alert');
        alertInputNombre.removeAttribute('hidden');
        alertInputNombre.textContent = 'campo requerido';
    } else {
        const regExp = /[A-Z][a-z]+(\s?[A-Z][a-z])?/.test(nombre);
        
        if(!regExp){
            inputNombre.classList.add('alert');
            alertInputNombre.removeAttribute('hidden');
            alertInputNombre.textContent = '';
            alertInputNombre.textContent = 'Tu nombre debe tener mayúscula al principio y al menos dos caracteres';
        }else{
            alertInputNombre.setAttribute('hidden', true);
        }
    }
}

const validaAreaMensaje = (mensaje, areaMensaje, alertAreaMensaje) => {
    alertAreaMensaje.removeAttribute('hidden');

    if (mensaje == '') {
        areaMensaje.classList.add('alert');
        alertAreaMensaje.textContent = 'Este campo debe tener algun mensaje';
    }else{
        alertAreaMensaje.setAttribute('hidden', true);
    }
}

export const accionesFormulario = {
    validaInputNombre,
    validaAreaMensaje
}