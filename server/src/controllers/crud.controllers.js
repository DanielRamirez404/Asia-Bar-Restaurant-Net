import handleQueryExecution from '../libs/handleQueryExecution.js';
import Table from '../libs/table.js'; 
import { sendAllRegistersFrom, sendFromId } from '../libs/crudOperations.js';

const tables = [
    new Table("Users", "Username"),
    new Table("Clients", "IdDocument"),
    new Table("Sales", "ID"),
    new Table("MainDish", "N/A", true),
    new Table("SideDish", "N/A", true),
    new Table("Product", "N/A", true)
];

export const getAllEndpointFunctions = {};
export const getEndpointFunctions = {};

tables.forEach(table => {
    getAllEndpointFunctions[table.getUrlName()] = function(req, res) {
        sendAllRegistersFrom(res, table.name, table.isFood); 
    };

    getEndpointFunctions[table.getUrlName()] = function(req, res) {
        sendFromId(req, res, table.name, table.idName, table.isFood); 
    }
});
