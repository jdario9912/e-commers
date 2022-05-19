import { accionesAgregarProducto } from "../service-formulario-agregar-producto.js";

const selectCategoria = document.querySelector('[data-agregar-select-categoria');
const alertCategoria  = document.querySelector('[data-agregar-alert-categoria]');
const botonEnviar     = document.querySelector('[data-agregar-btn]');

alertCategoria.setAttribute('hidden', true);

selectCategoria.addEventListener('focus', () => {
    selectCategoria.classList.remove('alert__input');
});

botonEnviar.addEventListener('click', () => {
    accionesAgregarProducto.validaSelectCategoria(selectCategoria, alertCategoria);
});