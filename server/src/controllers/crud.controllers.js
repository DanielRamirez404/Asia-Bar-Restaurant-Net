import handleQueryExecution from '../libs/handleQueryExecution.js';
import Table from '../libs/table.js'; 
import { sendAllRegistersFrom, sendFromId, createRegister } from '../libs/crudOperations.js';

const tables = [
    new Table("Users", "Username", ["Username", "Type", "Password"]),
    new Table("Clients", "IdDocument", ["IdDocument", "Address", "Name", "Phone"]),
    new Table("Sales", "ID", ["ClientIdDocument", "Type", "Total" ]),
    new Table("MainDish", "N/A", [], true),
    new Table("SideDish", "N/A", [], true),
    new Table("Product", "N/A", [], true),
];

export const getAllEndpointFunctions = {};
export const getEndpointFunctions = {};
export const postEndpointFunctions = {};

tables.forEach(table => {
    const url = table.getUrlName();

    getAllEndpointFunctions[url] = function(req, res) {
        sendAllRegistersFrom(res, table.name, table.isFood); 
    };

    getEndpointFunctions[url] = function(req, res) {
        sendFromId(req, res, table.name, table.idName, table.isFood); 
    }

    postEndpointFunctions[url] = function(req, res) {
        createRegister(req, res, table); 
    };
});
