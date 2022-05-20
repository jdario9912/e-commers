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

const eliminarProducto = (categoria, id) => {
    return fetch(`http://localhost:3000/${categoria}/${id}`, {
        method: 'DELETE',
    })
}

const generaProductoIndex = (sectionProductos, id, imagen, nombre, precio) => {
    const categoria = sectionProductos.parentElement.id;
    const divProducto = document.createElement('div');
    const informacionProducto = `
        <a href="./pages/productos-similares.html?id=${id}&categoria=${categoria}" class="producto__mas">
            <img class="producto__imagen" src="${imagen}" alt="" srcset="">
            <h3 class="producto__titulo">${nombre}</h3>
            <p class="producto__precio">$${precio}</p>
            ver producto
        </a>
    `;
    divProducto.classList.add('producto');
    divProducto.setAttribute('id', id);
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
    divProducto.setAttribute('id', id);
    divProducto.innerHTML = informacionProducto;
    sectionProductos.appendChild(divProducto);
}

const obtieneProductos = (categoriaSeleccionada) => {
    return fetch(`http://localhost:3000/${categoriaSeleccionada}`).then((respuesta) => respuesta.json());
}

const generaProductoSeleccionado = (imagen, nombre, precio, descripcion) => {
    const divProductoSeleccionado = document.querySelector('[data-producto-seleccionado]');
    const contenido = `
        <img src="${imagen}" alt="" class="producto-seleccionado__imagen">
        <div class="producto-seleccionado__textos">
            <h2 class="producto-seleccionado__titulo">${nombre}</h2>
            <p class="producto-seleccionado__precio">$${precio}</p>
            <p class="producto-seleccionado__descripcion">${descripcion}.</p>
        </div>
    `;

    divProductoSeleccionado.innerHTML = contenido;
}

const obtenerProductosConsolas = () => fetch('http://localhost:3000/consolas/').then((respuesta) => respuesta.json());
const obtenerProductosStarWars = () => fetch('http://localhost:3000/starWars/').then((respuesta) => respuesta.json());
const obtenerProductosDiversos = () => fetch('http://localhost:3000/diversos/').then((respuesta) => respuesta.json());
const obtenerTodosLosProductos = [ obtenerProductosDiversos(), obtenerProductosStarWars(), obtenerProductosConsolas() ];

export const accionesProductos = {
    registrarProducto,
    eliminarProducto,
    generaProductoIndex,
    generaProductoTodos,
    obtenerProductosConsolas,
    obtenerProductosStarWars,
    obtenerProductosDiversos,
    obtieneProductos,
    generaProductoSeleccionado,
    obtenerTodosLosProductos
};