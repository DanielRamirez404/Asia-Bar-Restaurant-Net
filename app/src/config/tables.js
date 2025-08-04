import Table from "../utils/table.js";

export const fieldTypes = ["number", "int", "combo"];

export const saleOptions = ["Comer Aquí", "Para llevar", "Delivery"];

const salesFields = [{ int: "ID" }, "Documento del Cliente", { combo: "Tipo", options: saleOptions }, { number: "Total" }];
const clientsFields = ["Identificación", "Nombre", "Dirección", "Teléfono" ];
const deliverymenFields = ["Nombre del Repartidor", "Zona", "Disponibilidad", "Teléfono"];
const dishFields = ["Nombre", "Disponibilidad", { number: "Precio" }, "Categoría", "Descripción"];
const productsFields = [...dishFields];
productsFields.push("Proveedor");
productsFields.push("Cantidad");
const usersFields = [ "Usuario", "Tipo", "Contraseña" ];

const salesDbFields = ["id","clientdocument", "type", "total"]
const clientsDbFields = ["iddocument", "name", "address", "phone" ];
const deliverymenDbFields = ["name", "area", "availability", "phone"];
const dishDbFields = ["name", "availability", "price", "category", "description"];
const productsDbFields = [...dishDbFields];
productsDbFields.push("provider");
productsDbFields.push("quantity");
const usersDbFields = [ "users", "type", "password" ];

export const tables = [
    new Table("Ventas", "sales", salesFields, salesDbFields),
    new Table("Clientes", "clients", clientsFields, clientsDbFields),
    new Table("Menú", "main-dish", dishFields, dishDbFields),
    new Table("Contornos", "side-dish", dishFields, dishDbFields),
    new Table("Productos","product", productsFields, productsDbFields),
    new Table("Repartidores","deliverymen", deliverymenFields, deliverymenDbFields),
    new Table("Usuarios","users", usersFields, usersDbFields),
];

