import { accionesCampoLogin } from "../service-formulario-login.js";

const inputPass = document.querySelector('[data-formulario-pass]');
const alertPass = document.querySelector('[data-alert-password]');

alertPass.setAttribute('hidden', true);

inputPass.addEventListener('focus', () => {
    inputPass.classList.remove('alert');
});

inputPass.addEventListener('blur', () => {
    accionesCampoLogin.validaCampoPassword(inputPass, alertPass);
});
