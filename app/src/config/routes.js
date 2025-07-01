import { toPath } from "../utils/page.js";

export const names = [
    'Inicio',
    'Inicio de Sesion',
    'Pedido',
    'Control',
    'Informacion de Venta',
    'Confirmacion Venta',
    'users-form',
    'side-dish-form',
    'main-dish-form',
    'product-form',
    'deliverymen-form',
    'clients-form',
    'sales-form',
];

export const routes = Object.fromEntries(
    names.map(name => [name, toPath(name)])
);
