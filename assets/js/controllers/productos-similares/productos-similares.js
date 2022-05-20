import { accionesProductos } from "../service-productos.js";

const params = new URLSearchParams(location.search);
const idSeleccionado = params.get('id');
const categoriaSeleccionada = params.get('categoria');
const seccionProductosSimilares = document.querySelector('[data-productos-similares]');

accionesProductos.obtieneProductos(categoriaSeleccionada)
    .then((productos) => {
        productos.forEach(({imagen, nombre, precio, descripcion, id}) => {
            if(idSeleccionado == id){
                accionesProductos.generaProductoSeleccionado(imagen, nombre, precio, descripcion);
            }
        });
    })
;

const generaProductosSimilares = (seccionProductosSimilares, id, imagen, nombre, precio) => {
    const divProducto = document.createElement('div');
    const informacionProducto = `
        <a href="./pages/productos-similares.html?id=${id}&categoria=${categoria}" class="producto__mas">
            <img class="producto__imagen" src="${imagen}" alt="" srcset="">
            <h3 class="producto__titulo">${nombre}</h3>
            <p class="producto__precio">$${precio}</p>
            ver producto
        </a>
    `;

    divProducto.classList.add('similares-producto');
    divProducto.setAttribute('id', id);
    divProducto.innerHTML = informacionProducto;
    seccionProductosSimilares.appendChild(divProducto);
}

accionesProductos.obtieneProductos(categoriaSeleccionada)
    .then((productos) => {
        console.log(productos);
        for (let i = 0; i < 4; i++) {
            const producto = productos[i];
            if (producto) {
                const id = producto.id;
                const imagen = producto.imagen;
                const nombre = producto.nombre;
                const precio = producto.precio;
                console.log(id);
                // ACA TENGO UN ERROR
                // generaProductosSimilares(seccionProductosSimilares, id, imagen, nombre, precio);
            }
        }
    })
    .catch((e) => {console.log(e);})
;