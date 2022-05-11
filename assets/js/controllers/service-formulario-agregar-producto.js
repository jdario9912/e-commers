const validaInputNombre = (inputNombre, alertNombre) => {
    if(inputNombre.validity.valueMissing){
        alertNombre.removeAttribute('hidden');
        alertNombre.textContent = 'agregue un nombre al producto';

        inputNombre.parentElement.classList.add('alert__label');
        inputNombre.classList.add('alert__input');
    }else{
        inputNombre.parentElement.classList.remove('alert__label');
        alertNombre.setAttribute('hidden', true);
    }
}

const validaInputPrecio = (inputPrecio, alertPrecio) => {
    if(inputPrecio.validity.valueMissing){
        alertPrecio.removeAttribute('hidden');
        alertPrecio.textContent = 'agregue un precio al producto';

        inputPrecio.parentElement.classList.add('alert__label');
        inputPrecio.classList.add('alert__input');
    }else{
        inputPrecio.parentElement.classList.remove('alert__label');
        alertPrecio.setAttribute('hidden', true);

        if(inputPrecio.validity.patternMismatch){
            alertPrecio.removeAttribute('hidden');
        alertPrecio.textContent = 'patron correcto para el precio: 00,00';

        inputPrecio.parentElement.classList.add('alert__label');
        inputPrecio.classList.add('alert__input');   
        }else{
            inputPrecio.parentElement.classList.remove('alert__label');
            alertPrecio.setAttribute('hidden', true);
        }
    }
}

const validaAreaDescripcion = (areaDescripcion, alertDescripcion) => {
    if(areaDescripcion.validity.valueMissing){
        alertDescripcion.removeAttribute('hidden');
        alertDescripcion.textContent = 'agregue una descripcion al producto';

        areaDescripcion.parentElement.classList.add('alert__label');
        areaDescripcion.classList.add('alert__input');
    }else{
        areaDescripcion.parentElement.classList.remove('alert__label');
        alertDescripcion.setAttribute('hidden', true);
    }
}

export const accionesAgregarProducto = {
    validaInputNombre,
    validaInputPrecio,
    validaAreaDescripcion
}