// Este codigo es un ejemplo de como obtener datos de una API
// Despues de implementarlo en Alura Geek debe ser borrado

const creaParrafo = (email) => {
    const parrafo = document.createElement('p');
    const contenido = email;
    parrafo.innerHTML = contenido;
    return parrafo;
}

const cuentasUsuarios = () => {
    return fetch('http://localhost:3000/usuarios/').then((respuesta) => {
        return respuesta.json();
    })
}

cuentasUsuarios().then((informacion) => {
    const sectionResultados = document.querySelector('[data-resultados-crud]');

    informacion.forEach(cuenta => {
        const emailUsuario = cuenta.email;
        const parrafo = creaParrafo(emailUsuario);        
        sectionResultados.appendChild(parrafo);
    });
}).catch((error) => {
    console.log(error);
});