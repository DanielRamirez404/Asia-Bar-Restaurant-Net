import Table from "../utils/table.js";

export const fieldTypes = ["number", "int", "combo", "pseudocombo", "bool", "phone"];

export const saleOptions = ["Comer Aquí", "Para llevar", "Delivery"];
export const addressOptions = ["Barcelona", "Lechería", "Puerto la Cruz", "Guanta"];
export const userRoles = ["Administrador", "Usuario"];

export const phonePrefixes = ["0414", "0424", "0416", "0426", "0412", "0422"];

const salesFields = [
    { int: "ID" }, 
    "Documento del Cliente", 
    { combo: "Tipo", options: saleOptions }, 
    { number: "Total" }
];

const clientsFields = [
    "Identificación", 
    "Nombre", 
    { pseudocombo: "Dirección", options: addressOptions }, 
    { phone: "Teléfono" }
];

const deliverymenFields = [
    "Nombre del Repartidor", 
    "Zona", 
    { bool: "Disponibilidad" }, 
    { phone: "Teléfono" }
];

const dishFields = [
    "Nombre", 
    { bool: "Disponibilidad" }, 
    { number: "Precio" }, 
    "Categoría", 
    "Descripción"
];

const usersFields = [ 
    "Usuario", 
    "Tipo", 
    "Contraseña"
];

const salesDbFields = ["id","clientdocument", "type", "total"]
const clientsDbFields = ["iddocument", "name", "address", "phone" ];
const deliverymenDbFields = ["name", "area", "availability", "phone"];
const dishDbFields = ["name", "availability", "price", "category", "description"];
const usersDbFields = [ "users", "type", "password" ];

export const tables = [
    new Table("Ventas", "sales", salesFields, salesDbFields),
    new Table("Clientes", "clients", clientsFields, clientsDbFields),
    new Table("Menú", "main-dish", dishFields, dishDbFields),
    new Table("Contornos", "side-dish", dishFields, dishDbFields),
    new Table("Productos","product", dishFields, dishDbFields),
    new Table("Repartidores","deliverymen", deliverymenFields, deliverymenDbFields),
    new Table("Usuarios","users", usersFields, usersDbFields),
];

