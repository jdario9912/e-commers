
// ESTO ES PARA FORMATO MOVILE
/**-------------------------------------------------------------------------------------- */
    // ME FALTA COMPLETAR EL DRAG AND DROP PARA MOVILE
/**-------------------------------------------------------------------------------------- */



// ESTO ES PARA FORMATO TABLET DESKTOP
const inputImagenTD = document.querySelector('[data-agregar-imagen-td-input]');
const zonaResultanteTD = document.querySelector('[data-agregar-imagen-td-zona]');
const imgResultanteTD = document.querySelector('[data-agregar-imagen-td-resultante]');
/**-------------------------------------------------------------------------------------- */
// TODO ESTO ES PARA QUE FUNCIONE EL DRAG AND DROP

// Le asigna la funcionalidad del input type file a la zona de drag and drop
zonaResultanteTD.addEventListener('click', () => inputImagenTD.click());

// Cambia el color del background al sostener la imagen sobre la zona drag
zonaResultanteTD.addEventListener('dragover', (event) => {
    event.preventDefault();
    zonaResultanteTD.classList.add('agregar__imagen-td--active');
});

// Vuelve al color original el background de la zona drag al sacar la imagen de la zona drag
zonaResultanteTD.addEventListener('dragleave', (event) => {
    event.preventDefault();
    zonaResultanteTD.classList.remove('agregar__imagen-td--active');
});

// Esta funcion la tengo que mover al service-formulario-agregar-producto.js
const cargarImagen = (archivo) => {
    const leerArchivo = new FileReader();

    // devuelve la ruta donde esta el archivo que se esta cargando
    leerArchivo.readAsDataURL(archivo);

    // la ruta obtenida es cargada en el atributo 'src' de la etiqueta 'img'
    leerArchivo.addEventListener('load', (event) =>{
        imgResultanteTD.setAttribute('src', event.target.result);
    });
}

// coloca la imagen arrastrada en la zona drag
zonaResultanteTD.addEventListener('drop', (event) => {
    event.preventDefault();
    zonaResultanteTD.classList.add('agregar__imagen-td--active');
    
    // Le asigna la imagen que se esta cargando en el input file a la zona drag
    inputImagenTD.files = event.dataTransfer.files

    const file = inputImagenTD.files[0];

    cargarImagen(file);
});

/**-------------------------------------------------------------------------------------- */

// ESTO HACE QUE CAMBIE LA IMAGEN MOSTRADA CAMBIE CUANDO SE AGREGA DESDE EL INPUT

inputImagenTD.addEventListener('change', (event) => {
    const archivo = event.target.files[0];

    cargarImagen(archivo);
})