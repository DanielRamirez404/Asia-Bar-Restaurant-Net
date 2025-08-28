import Table from "../utils/table.js";

export const fieldTypes = ["number", "int", "combo", "pseudocombo", "bool", "phone", "id", "text"];

export const saleOptions = ["Comer Aquí", "Para llevar", "Delivery"];
export const cityOptions = ["Barcelona", "Lechería", "Puerto la Cruz", "Guanta"];
export const userRoles = ["Administrador", "Usuario"];

export const phonePrefixes = ["0414", "0424", "0416", "0426", "0412", "0422"];
export const idTypes = ["V-", "J-", "E-"];

const salesFields = [
    { int: "ID" }, 
    { id: "Documento del Cliente" }, 
    { combo: "Tipo", options: saleOptions }, 
    { number: "Total" }
];

const clientsFields = [
    { id: "Identificación" }, 
    { text: "Nombre" }, 
    { pseudocombo: "Dirección", options: cityOptions }, 
    { phone: "Teléfono" }
];

const deliverymenFields = [
    { text: "Nombre del Repartidor" }, 
    { text: "Zona" }, 
    { bool: "Disponibilidad" }, 
    { phone: "Teléfono" }
];

const dishFields = [
    { text: "Nombre" }, 
    { bool: "Disponibilidad" }, 
    { number: "Precio" }, 
    { text: "Categoría" }, 
    { text: "Descripción" }
];

const usersFields = [ 
    { text: "Usuario" }, 
    { text: "Tipo" }, 
    { text: "Contraseña" }
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

