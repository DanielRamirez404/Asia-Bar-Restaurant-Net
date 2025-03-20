import handleQueryExecution from '../libs/handleQueryExecution.js';
import Table from '../libs/table.js'; 
import { sendAllRegistersFrom, sendFromId, createRegister, deleteById } from '../libs/crudOperations.js';

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
export const deleteEndpointFucntions = {};

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


    deleteEndpointFucntions[url] = function(req, res) {
        deleteById(req, res, table.name, table.idName, table.isFood); 
    }
});
