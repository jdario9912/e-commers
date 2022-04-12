const lupa = document.querySelector('[data-lupa]');
const inputBuscar = document.getElementById('buscar');

lupa.addEventListener('click', () =>{
    // inputBuscar.hidden = true ? inputBuscar.hidden = false : null;
    lupa.classList.toggle('display__none');
    inputBuscar.classList.toggle('display__none');
    inputBuscar.classList.toggle('header__buscar-input');
    inputBuscar.value = '';
    inputBuscar.focus();
});

inputBuscar.addEventListener('blur', () => {
    lupa.classList.toggle('display__none');
    inputBuscar.classList.toggle('display__none');
    inputBuscar.classList.toggle('header__buscar-input');
});