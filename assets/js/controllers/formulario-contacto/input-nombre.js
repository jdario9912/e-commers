import { accionesFormulario } from "../service-formulario-contacto.js";

const inputNombre = document.querySelector('[data-contacto-nombre]');
const alertInputNombre = document.querySelector('[data-alert-nombre]');

alertInputNombre.setAttribute('hidden' , true);

inputNombre.addEventListener('focus', () => {
    inputNombre.classList.remove('alert');
});

inputNombre.addEventListener('blur', () => {
    const nombre = inputNombre.value;
    
    accionesFormulario.validaInputNombre(nombre, inputNombre, alertInputNombre);
});

// ME FALTA VALIDAR EL CAMPO DE MENSAJE Y DARLE FUNCIONALIDAD AL BOTON DE ENVIAR FORMULARIO