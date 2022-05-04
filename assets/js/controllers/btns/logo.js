import { propiedades } from "../service-btns.js";

const logoAluraHeader = document.querySelector('[data-logo-header]');
const logoAluraFooter = document.querySelector('[data-logo-footer]');

logoAluraHeader.addEventListener('click', () => {
    propiedades.irAlIndex();
});

logoAluraFooter.addEventListener('click', () => {
    propiedades.irAlIndex();
});