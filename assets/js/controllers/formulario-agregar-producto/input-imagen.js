const inputImagen = document.querySelector('[data-agregar-imagen-td-input]');
const zonaResultante = document.querySelector('[data-agregar-imagen-zona]');
const imgResultante = document.querySelector('[data-agregar-imagen-td-resultante]');

/**-------------------------------------------------------------------------------------- */
// TODO ESTO ES PARA QUE FUNCIONE EL DRAG AND DROP

// Esta funcion la tengo que mover al service-formulario-agregar-producto.js
const cargarImagen = (archivo) => {
    const leerArchivo = new FileReader();

    // devuelve la ruta donde esta el archivo que se esta cargando
    leerArchivo.readAsDataURL(archivo);

    leerArchivo.addEventListener('load', (event) =>{
        imgResultante.setAttribute('src', event.target.result);
    });
}

zonaResultante.addEventListener('click', () => inputImagen.click());

zonaResultante.addEventListener('dragover', (event) => {
    event.preventDefault();
    zonaResultante.classList.add('agregar__imagen-td--active');
});

zonaResultante.addEventListener('dragleave', (event) => {
    event.preventDefault();
    zonaResultante.classList.remove('agregar__imagen-td--active');
});

zonaResultante.addEventListener('drop', (event) => {
    event.preventDefault();
    zonaResultante.classList.add('agregar__imagen-td--active');

    inputImagen.files = event.dataTransfer.files

    const file = inputImagen.files[0];

    cargarImagen(file);
});

/**-------------------------------------------------------------------------------------- */

// ESTO HACE QUE CAMBIE LA IMAGEN MOSTRADA CAMBIE CUANDO SE AGREGA DESDE EL INPUT

inputImagen.addEventListener('change', (event) => {
    const archivo = event.target.files[0];

    cargarImagen(archivo);
})