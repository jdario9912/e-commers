// Este documento contiene todas los metodos para realizar un CRUD en el sitio

const registrarProducto = (imagen, nombre, precio, descripcion, categoria) => {
    return fetch(`http://localhost:3000/${categoria}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: uuid.v4(), imagen, nombre, precio, descripcion})
    });
}

const generaProductoIndex = (sectionProductos, id, imagen, nombre, precio) => {
    const divProducto = document.createElement('div');
    const informacionProducto = `
        <img class="producto__imagen" src="${imagen}" alt="" srcset="">
        <h3 class="producto__titulo">${nombre}</h3>
        <p class="producto__precio">$${precio}</p>
        <a href="#" class="producto__mas">ver producto</a>
    `;
    divProducto.classList.add('producto');
    divProducto.setAttribute('id', id)
    divProducto.innerHTML = informacionProducto;
    sectionProductos.appendChild(divProducto);
}

const generaProductoTodos = (sectionProductos, id, imagen, nombre, precio) => {
    const divProducto = document.createElement('div');
    const informacionProducto = `
        <div class="todos__grafica">
            <div class="todos__icono-eliminar" id="${id}" data-icono-eliminar></div>
            <div class="todos__icono-editar" id="${id}" data-icono-editar></div>
            <img src="${imagen}" alt="" class="todos__imagen">
        </div>
        <h3 class="todos__titulo">${nombre}</h3>
        <p class="todos__precio">$${precio}</p>
        <p class="todos__codigo">#${id}</p>
    `;
    divProducto.classList.add('todos__producto');
    divProducto.innerHTML = informacionProducto;
    sectionProductos.appendChild(divProducto);
}

const obtenerProductosConsolas = () => fetch('http://localhost:3000/consolas/').then((respuesta) => respuesta.json());
const obtenerProductosStarWars = () => fetch('http://localhost:3000/starWars/').then((respuesta) => respuesta.json());
const obtenerProductosDiversos = () => fetch('http://localhost:3000/diversos/').then((respuesta) => respuesta.json());
const obtenerTodosLosProductos = [ obtenerProductosDiversos(), obtenerProductosStarWars(), obtenerProductosConsolas() ];

export const accionesProductos = {
    registrarProducto,
    generaProductoIndex,
    generaProductoTodos,
    obtenerProductosConsolas,
    obtenerProductosStarWars,
    obtenerProductosDiversos,
    obtenerTodosLosProductos
};