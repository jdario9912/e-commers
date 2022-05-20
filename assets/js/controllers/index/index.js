import { accionesProductos } from "../service-productos.js";

const sectionStarWars      = document.querySelector('[data-section-starWars]');
const sectionConsolas      = document.querySelector('[data-section-consolas]');
const sectionDiversos      = document.querySelector('[data-section-diversos]');

accionesProductos.obtenerProductosStarWars()
    .then((productos) => productos.forEach(({id, imagen, nombre, precio}) => {accionesProductos.generaProductoIndex(sectionStarWars, id, imagen, nombre, precio)}))
    .catch((error) => {console.log(error);})
;

accionesProductos.obtenerProductosConsolas()
    .then((productos) => productos.forEach(({id, imagen, nombre, precio}) => {accionesProductos.generaProductoIndex(sectionConsolas, id, imagen, nombre, precio)}))
    .catch((error) => {console.log(error);})
;

accionesProductos.obtenerProductosDiversos()
    .then((productos) => productos.forEach(({id, imagen, nombre, precio}) => {accionesProductos.generaProductoIndex(sectionDiversos, id, imagen, nombre, precio)}))
    .catch((error) => {console.log(error);})
;