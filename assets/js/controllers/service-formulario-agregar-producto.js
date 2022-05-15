const validaInputImagen = (inputImagen, alertImagen) => {
    if (inputImagen.validity.valueMissing) {
        alertImagen.removeAttribute('hidden');
        alertImagen.textContent = 'debes elegir una imagen que mostrar';
    }
}

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
        alertPrecio.textContent = 'el precio debe estar separado por una coma (,)';

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

const cargarImagenMovile = (archivo, imgResultanteMovile) => {
    const leerArchivo = new FileReader();

    // devuelve la ruta donde esta el archivo que se esta cargando
    leerArchivo.readAsDataURL(archivo);

    // la ruta obtenida es cargada en el atributo 'src' de la etiqueta 'img'
    leerArchivo.addEventListener('load', (event) => {
        imgResultanteMovile.setAttribute('src', event.target.result);
    });
}

const cargarImagenTD = (archivo, imgResultanteTD) => {
    const leerArchivo = new FileReader();

    // devuelve la ruta donde esta el archivo que se esta cargando
    leerArchivo.readAsDataURL(archivo);

    // la ruta obtenida es cargada en el atributo 'src' de la etiqueta 'img'
    leerArchivo.addEventListener('load', (event) => {
        imgResultanteTD.setAttribute('src', event.target.result);
    });
}

export const accionesAgregarProducto = {
    validaInputNombre,
    validaInputPrecio,
    validaAreaDescripcion,
    cargarImagenMovile,
    cargarImagenTD,
    validaInputImagen
}