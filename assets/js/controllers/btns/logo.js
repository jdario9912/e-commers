import { propiedades } from "../service-btns.js";

const logoAlura = document.querySelector('[data-logo-header]');

logoAlura.addEventListener('click', () => {
    propiedades.irAlIndex();
});