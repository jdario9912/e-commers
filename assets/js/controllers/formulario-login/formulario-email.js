import { accionesCampoLogin } from "../service-formulario-login.js";

const inputEmail = document.querySelector('[data-formulario-email]');
const alertEmail = document.querySelector('[data-alert-email]');

alertEmail.setAttribute('hidden', true);

inputEmail.addEventListener('focus', () => {
    inputEmail.classList.remove('alert');
});

inputEmail.addEventListener('blur', () => {
    accionesCampoLogin.validaCampoEmail(inputEmail, alertEmail);
});