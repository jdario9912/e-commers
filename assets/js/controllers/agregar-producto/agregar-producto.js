import { accionesProductos } from "../service-productos.js";

const formulario = document.querySelector('[data-formulario-agregar-producto]');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const imagenFiles = document.querySelector('[data-agregar-imagen]').files[0];
    const nombre      = document.querySelector('[data-agregar-nombre]').value;
    const precio      = document.querySelector('[data-agregar-precio]').value;
    const descripcion = document.querySelector('[data-agregar-descripcion]').value;
    const categoria   = document.querySelector('[data-agregar-select-categoria]').value;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(imagenFiles);
    fileReader.addEventListener('load', (e) => {
        const imagen = e.target.result;
        accionesProductos.registrarProducto(imagen, nombre, precio, descripcion, categoria)
                         .then(() => { window.location.href = "./producto-registrado.html" })
                         .catch(error => alert(`Ocurrio el error ${error}`));
    });
});



/* ESTE BLOQUE LO USE PARA PROBAR COMO GUARDAR IMAGENES EN LA BASE DE DATOS */

// const inputImagen = document.querySelector('[data-agregar-imagen]');

// inputImagen.addEventListener('change', () => {
//     const archivo = inputImagen.files[0];

//     console.log(archivo);

//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(archivo);
//     fileReader.addEventListener('load', (e) => {
//         setAttribute('src', e.target.result);
//     });
// });