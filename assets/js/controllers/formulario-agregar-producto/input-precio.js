import { accionesAgregarProducto } from "../service-formulario-agregar-producto.js";

const inputPrecio = document.querySelector('[data-agregar-precio');
const alertPrecio = document.querySelector('[data-agregar-alert-precio]');

alertPrecio.setAttribute('hidden', true);

inputPrecio.addEventListener('focus', () => {
    inputPrecio.classList.remove('alert__input');
});

inputPrecio.addEventListener('blur', () => {
    accionesAgregarProducto.validaInputPrecio(inputPrecio, alertPrecio);
});