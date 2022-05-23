import { accionesProductos } from "../service-productos";

const params = new URLSearchParams(location.search);
const id = params.get('id');
const categoria = params.get('categoria');

