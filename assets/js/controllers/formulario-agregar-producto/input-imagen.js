import { accionesAgregarProducto } from "../service-formulario-agregar-producto.js";

// ESTO ES PARA FORMATO MOVILE
/**-------------------------------------------------------------------------------------- */

const zonaDragMovile = document.querySelector('[data-agregar-zonadrag-movile]');
const inputImagenMovile = document.querySelector('[data-agregar-input-movile]');
const imgResultanteMovile = document.querySelector('[data-agregar-imagen-resultante]');

// Le asigna la funcionalidad del input type file a la zona drag and drop
zonaDragMovile.addEventListener('click', () => inputImagenMovile.click());

// Muestra la imagen cargada en el input type file en la zona drag
inputImagenMovile.addEventListener('change', (event) => {
    const archivo = event.target.files[0];
    
    accionesAgregarProducto.cargarImagenMovile(archivo, imgResultanteMovile);
});

/**-------------------------------------------------------------------------------------- */



// ESTO ES PARA FORMATO TABLET DESKTOP
/**-------------------------------------------------------------------------------------- */
// TODO ESTO ES PARA QUE FUNCIONE EL DRAG AND DROP

const inputImagenTD = document.querySelector('[data-agregar-imagen-td-input]');
const zonaResultanteTD = document.querySelector('[data-agregar-imagen-td-zona]');
const imgResultanteTD = document.querySelector('[data-agregar-imagen-td-resultante]');

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

// coloca la imagen arrastrada en la zona drag
zonaResultanteTD.addEventListener('drop', (event) => {
    event.preventDefault();
    zonaResultanteTD.classList.add('agregar__imagen-td--active');
    
    // Le asigna la imagen que se esta cargando en el input file a la zona drag
    inputImagenTD.files = event.dataTransfer.files

    const file = inputImagenTD.files[0];
    accionesAgregarProducto.cargarImagenTD(file, imgResultanteTD);
});

/**-------------------------------------------------------------------------------------- */

// Muestra la imagen cargada en el input type file en la zona drag
inputImagenTD.addEventListener('change', (event) => {
    const archivo = event.target.files[0];
    accionesAgregarProducto.cargarImagenTD(archivo, imgResultanteTD);
});