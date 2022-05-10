const validaInputNombre = (inputNombre, alertNombre) => {
    if(inputNombre.validity.valueMissing){
        alertNombre.removeAttribute('hidden');
        alertNombre.textContent = 'agregue un nombre al producto';

        inputNombre.parentElement.classList.add('alert__label');
        inputNombre.classList.add('alert__input');
    }else{
        inputNombre.parentElement.classList.remove('alert__label');
        alertNombre.setAttribute('hidden', true);

        if(inputNombre.validity.patternMismatch){
            console.log('patro equivocado');
        }
    }
}

export const accionesAgregarProducto = {
    validaInputNombre
}