const botonEnviar = document.querySelector('[data-contacto-btn]');

botonEnviar.addEventListener('click', (event) => {
    const inputNombre = document.querySelector('[data-contacto-nombre]');
    const areaMensaje = document.querySelector('[data-contacto-mensaje]');
    event.preventDefault();

    if (inputNombre.validity.valueMissing == true && areaMensaje.validity.valueMissing  == true && inputNombre.validity.patternMismatch == false) {
        const alertNombre = document.querySelector('[data-alert-nombre]');
        alertNombre.removeAttribute('hidden');
        alertNombre.textContent = 'Este campo es obligatorio';
        console.log('Si');
        console.log(inputNombre.validity.valueMissing, areaMensaje.validity.valueMissing, inputNombre.validity.patternMismatch);
    }else{
        console.log('No');
        console.log(inputNombre.validity.valueMissing, areaMensaje.validity.valueMissing, inputNombre.validity.patternMismatch);
    }
    // window.location.href = './pages/mensaje-enviado.html';
});

// ME FALTA COMPLETAR LA FUNCIONALIDAD DE ESTE BOTON