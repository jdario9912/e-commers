const lupa = document.querySelector('[data-lupa]');
const divBuscar = document.querySelector('[data-buscar]')
const inputBuscar = document.querySelector('[data-input-buscar]');

lupa.addEventListener('click', () =>{
    // inputBuscar.hidden = true ? inputBuscar.hidden = false : null;
    lupa.classList.toggle('display__none');
    divBuscar.classList.toggle('buscar');
    inputBuscar.classList.toggle('display__none');
    inputBuscar.classList.toggle('buscar-input');
    inputBuscar.value = '';
    inputBuscar.focus();
});

inputBuscar.addEventListener('blur', () => {
    lupa.classList.toggle('display__none');
    divBuscar.classList.toggle('buscar');
    inputBuscar.classList.toggle('display__none');
    inputBuscar.classList.toggle('buscar-input');
});