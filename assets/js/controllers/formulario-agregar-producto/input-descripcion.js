import { accionesAgregarProducto } from "../service-formulario-agregar-producto.js";

const areaDescripcion = document.querySelector('[data-agregar-descripcion');
const alertDescripcion = document.querySelector('[data-agregar-alert-descripcion]');

alertDescripcion.setAttribute('hidden', true);

areaDescripcion.addEventListener('focus', () => {
    areaDescripcion.classList.remove('alert__input');
});

areaDescripcion.addEventListener('blur', () => {
    accionesAgregarProducto.validaAreaDescripcion(areaDescripcion, alertDescripcion);
});