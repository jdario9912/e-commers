import { accionesProductos } from "../service-productos.js";

const sectionProductos = document.querySelector('[data-section-productos]');
const todasLasCategorias = accionesProductos.obtenerTodosLosProductos;

todasLasCategorias.forEach(categoria => {
    categoria
        .then((productos) => productos.forEach(({id, imagen, nombre, precio}) => {accionesProductos.generaProductoTodos(sectionProductos, id, imagen, nombre, precio)}))
        .catch((error) => {console.log(error);})
});

// ME FALTA DARLE FUNCIONALIDAD AL BOTON DE ELIMINAR Y EDITAR