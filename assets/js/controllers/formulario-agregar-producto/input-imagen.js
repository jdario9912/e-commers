import { accionesAgregarProducto } from "../service-formulario-agregar-producto.js";

const botonEnviar = document.querySelector('[data-agregar-btn]');
const alertImagen = document.querySelector('[data-agregar-alert-imagen]');
const inputImagen = document.querySelector('[data-agregar-imagen]');

alertImagen.setAttribute('hidden', true);


// ESTO ES PARA FORMATO MOVILE
/**-------------------------------------------------------------------------------------- */

const zonaDragMovile = document.querySelector('[data-agregar-zonadrag-movile]');
const imgResultanteMovile = document.querySelector('[data-agregar-imagen-resultante]');

// Le asigna la funcionalidad del input type file a la zona drag and drop
zonaDragMovile.addEventListener('click', () => inputImagen.click());

// Muestra la imagen cargada en el input type file en la zona drag
inputImagen.addEventListener('change', (event) => {
    const archivo = event.target.files[0];
    
    accionesAgregarProducto.cargarImagenMovile(archivo, imgResultanteMovile);
});

botonEnviar.addEventListener('click', () => {
    accionesAgregarProducto.validaInputImagen(inputImagen, alertImagen);
});

/**-------------------------------------------------------------------------------------- */



// ESTO ES PARA FORMATO TABLET DESKTOP
/**-------------------------------------------------------------------------------------- */
// TODO ESTO ES PARA QUE FUNCIONE EL DRAG AND DROP

const zonaResultanteTD = document.querySelector('[data-agregar-imagen-td-zona]');
const imgResultanteTD = document.querySelector('[data-agregar-imagen-td-resultante]');

// Le asigna la funcionalidad del input type file a la zona de drag and drop
zonaResultanteTD.addEventListener('click', () => inputImagen.click());

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

// coloca la imagen arrastrada en la zona drag
zonaResultanteTD.addEventListener('drop', (event) => {
    event.preventDefault();
    zonaResultanteTD.classList.add('agregar__imagen-td--active');
    
    // Le asigna la imagen que se esta cargando en el input file a la zona drag
    inputImagen.files = event.dataTransfer.files

    const file = inputImagen.files[0];
    accionesAgregarProducto.cargarImagenTD(file, imgResultanteTD);
});

/**-------------------------------------------------------------------------------------- */

// Muestra la imagen cargada en el input type file en la zona drag
inputImagen.addEventListener('change', (event) => {
    const archivo = event.target.files[0];
    accionesAgregarProducto.cargarImagenTD(archivo, imgResultanteTD);
});