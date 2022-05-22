import { accionesProductos } from "../service-productos.js";

const zonaDragMovile = document.querySelector('[data-editar-zonadrag-movile]');
const imgImagenResultante = document.querySelector('[data-editar-imagen-resultante]');
const inputImagen = document.querySelector('[data-editar-imagen]');
const inputNombre = document.querySelector('[data-editar-nombre]');
const inputPrecio = document.querySelector('[data-editar-precio]');
const inputDescripcion = document.querySelector('[data-editar-descripcion]');
const params = new URLSearchParams(location.search);
const idSeleccionado = params.get('id');
const todasLasCategorias = accionesProductos.obtenerTodosLosProductos;

zonaDragMovile.addEventListener('click', () => inputImagen.click());

todasLasCategorias.forEach(categorias => {
    categorias.then(((productos) => {
        productos.forEach(({id, imagen, nombre, precio, descripcion}) => {
            if (idSeleccionado == id) {
                imgImagenResultante.setAttribute('src', imagen);
                inputImagen.addEventListener('change', (event) => {
                    const archivo = event.target.files[0];
                    accionesProductos.cargarImagenMovile(archivo, imgImagenResultante);
                });
                inputNombre.value = nombre;
                inputPrecio.value = precio;
                inputDescripcion.textContent = descripcion;
            }
        });
    }))
});

// ME FALTA GUARDAR LOS CAMBIOS EN LA BASE DE DATOS Y VALIDAR EL INPUT CON JS