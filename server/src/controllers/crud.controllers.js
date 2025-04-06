import handleQueryExecution from '../libs/handleQueryExecution.js';
import Table from '../libs/table.js'; 
import { sendAllRegistersFrom, sendFromId, createRegister, deleteById, updateById, search } from '../libs/crudOperations.js';

const tables = [
    new Table("Users", "Username", ["Username", "Type", "Password"]),
    new Table("Clients", "IdDocument", ["IdDocument", "Address", "Name", "Phone"]),
    new Table("Sales", "ID", ["ClientIdDocument", "Type", "Total" ]),
    new Table("MainDish", "Name", ["Name", "Availability", "Price", "Category", "Description"]),
    new Table("SideDish", "Name", ["Name", "Availability", "Price", "Category", "Description"]),
    new Table("Product", "Name", ["Name", "Availability", "Price", "Category", "Description", "Provider", "Quantity"]),
    new Table("Deliverymen", "Name", ["Name", "Area", "Availability", "Phone"])
];

export const getAllEndpointFunctions = {};
export const getEndpointFunctions = {};
export const postEndpointFunctions = {};
export const deleteEndpointFunctions = {};
export const putEndpointFunctions = {};
export const searchEndpointFunctions = {};

tables.forEach(table => {
    const url = table.getUrlName();

    postEndpointFunctions[url] = function(req, res) {
        createRegister(req, res, table); 
    };
    
    getAllEndpointFunctions[url] = function(req, res) {
        sendAllRegistersFrom(res, table.name, table.isFood); 
    };

    getEndpointFunctions[url] = function(req, res) {
        sendFromId(req, res, table.name, table.idName, table.isFood); 
    }

    putEndpointFunctions[url] = function(req, res) {
        updateById(req, res, table); 
    }

    deleteEndpointFunctions[url] = function(req, res) {
        deleteById(req, res, table.name, table.idName, table.isFood); 
    }

    searchEndpointFunctions[url] = function(req, res) {
        search(req, res, table);
    } 
});
