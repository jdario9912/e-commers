import { accionesProductos } from "../service-productos.js";

const formulario = document.querySelector('[data-formulario-editar-producto]');
const zonaDragMovile = document.querySelector('[data-editar-zonadrag-movile]');
const imgImagenResultante = document.querySelector('[data-editar-imagen-resultante]');
const inputImagen = document.querySelector('[data-editar-imagen]');
const inputNombre = document.querySelector('[data-editar-nombre]');
const inputPrecio = document.querySelector('[data-editar-precio]');
const inputDescripcion = document.querySelector('[data-editar-descripcion]');
const inputCategoria = document.querySelector('[data-editar-select-categoria]');
const params = new URLSearchParams(location.search);
const id = params.get('id');
const categoria = params.get('categoria');


if (!id || !categoria) {
    console.log('Id o Categoria son null');
    window.location.href = 'error.html';
}

zonaDragMovile.addEventListener('click', () => inputImagen.click());

accionesProductos.obtieneProducto(categoria, id)
    .then((producto) => {
        imgImagenResultante.setAttribute('src', producto.imagen);
        inputImagen.addEventListener('change', (event) => {
            const archivo = event.target.files[0];
            accionesProductos.cargarImagenMovile(archivo, imgImagenResultante);
        });
        inputNombre.value = producto.nombre;
        inputPrecio.value = producto.precio;
        inputDescripcion.textContent = producto.descripcion;
        inputCategoria.value = producto.categoria;
    })
;

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const params = new URL(window.location);
    const id = params.searchParams.get('id');

    const imagen = imgImagenResultante.src;
    const nombre = document.querySelector('[data-editar-nombre]').value;
    const precio = document.querySelector('[data-editar-precio]').value;
    const descripcion = document.querySelector('[data-editar-descripcion]').textContent;
    const categoria = document.querySelector('[data-editar-select-categoria]').value;
    
    accionesProductos.editaProducto(categoria, id, imagen, nombre, precio, descripcion)
        .catch((e) => console.log(e))
});

// window.location.href = 'producto-actualizado.html'