import { toPath } from "../utils/page.js";

export const names = [
    'Inicio',
    'Inicio de Sesion',
    'Pedido',
    'Control de Ventas',
    'Informacion de Venta',
    'Confirmacion Venta',
    'users-form',
    'side-dish-form',
    'main-dish-form',
    'product-form',
    'deliverymen-form',
    'clients-form',
    'sales-form',
    'Control de Usuarios',
    'Control de Clientes',
    'Control de Menu',
    'Control de Contornos',
    'Control de Productos',
    'Control de Repartidores'
];

export const routes = Object.fromEntries(
    names.map(name => [name, toPath(name)])
);
