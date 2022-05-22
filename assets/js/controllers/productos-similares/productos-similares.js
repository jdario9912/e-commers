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

accionesProductos.obtieneProductos(categoriaSeleccionada)
    .then((productos) => {
        for (let i = 0; i < 4; i++) {
            const producto = productos[i];
            if (producto) {
                const id = producto.id;
                const imagen = producto.imagen;
                const nombre = producto.nombre;
                const precio = producto.precio;
                accionesProductos.generaProductosSimilares(categoriaSeleccionada, seccionProductosSimilares, id, imagen, nombre, precio);
            }
        }
    })
    .catch((e) => {console.log(e);})
;