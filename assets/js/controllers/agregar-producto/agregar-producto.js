import { accionesProductos } from "../service-productos.js";

const formulario = document.querySelector('[data-formulario-agregar-producto]');

// formulario.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const imagen      = document.querySelector('[data-agregar-imagen]').value;
//         const nombre      = document.querySelector('[data-agregar-nombre]').value;
//         const precio      = document.querySelector('[data-agregar-precio]').value;
//         const descripcion = document.querySelector('[data-agregar-descripcion]').value;
//         const categoria   = document.querySelector('[data-agregar-select-categoria]').value;
    
//         accionesProductos.registrarProductoDiversos(imagen, nombre, precio, descripcion, categoria)
//                          .then(() => { window.location.href = "./producto-registrado.html" })
//                          .catch(error => alert(`Ocurrio el error ${error}`));
// });



/* ESTE BLOQUE ES SOLO DE PRUEBAS, TENGO QUE TRASLADARLO AL EVENTO SUBMIT DEL FORMULARIO */

const inputImagen = document.querySelector('[data-agregar-imagen]');

inputImagen.addEventListener('change', () => {
    const img = document.getElementById('imagenTest');
    const archivo = formulario[0].files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(archivo);
    fileReader.addEventListener('load', (e) => {
        img.setAttribute('src', e.target.result);
    });
});