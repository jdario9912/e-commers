import { accionesProductos } from "../service-productos.js";

const params = new URLSearchParams(location.search);
const id = params.get('id');
const categoria = params.get('categoria');

const btnEliminar = document.querySelector('[data-btn-eliminar]');

accionesProductos.obtieneProducto(categoria, id)
    .then(({imagen, nombre}) => {
        const containerProducto = document.querySelector('[data-container-producto-a-eliminar]');
        const contenido = `
            <img src="${imagen}" alt="" class="confirma-eliminar__imagen">
            <h2 class="confirma-eliminar__nombre">${nombre}</h2>
        `;
        containerProducto.innerHTML = contenido;
    })
;

btnEliminar.addEventListener('click', () => {
    accionesProductos.eliminarProducto(categoria, id)
        .then(window.location.href = 'producto-eliminado.html')
        .catch((e) => {console.log(e)})
    })
;