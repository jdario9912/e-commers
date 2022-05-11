import { accionesAgregarProducto } from "../service-formulario-agregar-producto.js";

const inputNombre = document.querySelector('[data-agregar-nombre');
const alertNombre = document.querySelector('[data-agregar-alert-nombre]');

alertNombre.setAttribute('hidden', true);

inputNombre.addEventListener('focus', () => {
    inputNombre.classList.remove('alert__input');
});

inputNombre.addEventListener('blur', () => {
    accionesAgregarProducto.validaInputNombre(inputNombre, alertNombre);
});

const botonEnviar = document.querySelector('[data-agregar-btn');

botonEnviar.addEventListener('click', (evento) => {
    console.log(evento.target);
})