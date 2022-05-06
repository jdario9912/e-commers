import { accionesFormulario } from "../service-formulario-contacto.js";

const areaMensaje = document.querySelector('[data-contacto-mensaje');
const alertAreaMensaje = document.querySelector('[data-alert-mensaje]');

alertAreaMensaje.setAttribute('hidden', true);

areaMensaje.addEventListener('focus', () => {
    areaMensaje.classList.remove('alert');
})

areaMensaje.addEventListener('blur', () => {
    const mensaje = areaMensaje.value;

    accionesFormulario.validaAreaMensaje(mensaje, areaMensaje, alertAreaMensaje);
})