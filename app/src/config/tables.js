import Table from "../utils/table.js";

const clientsFields = ["Identificación", "Nombre", "Dirección", "Teléfono" ];
const deliverymenFields = ["Nombre del Repartidor", "Zona", "Disponibilidad", "Teléfono"];
const dishFields = ["Nombre", "Disponibilidad", "Precio", "Categoría", "Descripción"];
const productsFields = ["Nombre", "Disponibilidad", "Precio", "Categoría", "Descripción", "Proveedor", "Cantidad"];
const usersFields = [ "Usuario", "Tipo", "Contraseña" ];

export const tables = [
    new Table("Ventas", "clients", clientsFields),
    new Table("Clientes", "clients", clientsFields),
    new Table("Menú", "main-dish", dishFields),
    new Table("Contornos", "side-dish", dishFields),
    new Table("Productos","product", productsFields),
    new Table("Repartidores","deliverymen", deliverymenFields),
    new Table("Usuarios","users", usersFields),
];

