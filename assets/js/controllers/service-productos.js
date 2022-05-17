// Este documento contiene todas los metodos para realizar un CRUD en el sitio

const registrarProductoDiversos = (imagen, nombre, precio, descripcion) => {
    return fetch('http://localhost:3000/diversos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: uuid.v4(), imagen, nombre, precio, descripcion, categoria})
    });
}

export const accionesProductos = {
    registrarProductoDiversos
}