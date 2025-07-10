import { toPath } from "../utils/page.js";

export const names = [
    'Inicio',
    'Inicio de Sesion',
    'Pedido',
    'Informacion de Venta',
    'Confirmacion Venta',
    'Control',
    'Formulario de Control',
];

export const routes = Object.fromEntries(
    names.map(name => [name, toPath(name)])
);
