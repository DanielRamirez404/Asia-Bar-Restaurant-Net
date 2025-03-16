import handleQueryExecution from '../libs/handleQueryExecution.js';
import { sendAllRegistersFrom, sendAllFoodRegistersFrom, sendFromId, sendFoodFromId } from '../libs/crudOperations.js';

const independentTables = [
    {
        "name": "Users",
        "idName": "Username"
    },
    {
        "name": "Clients",
        "idName": "IdDocument"
    },
    {
        "name": "Sales",
        "idName": "ID"
    }
];

const foodTables = [
    "MainDish",
    "SideDish",
    "Product"
];

export const getAllEndpointFunctions = {};
export const getEndpointFunctions = {};

independentTables.forEach(table => {
    getAllEndpointFunctions[table["name"]] = function(req, res) {
        sendAllRegistersFrom(res, table["name"]); 
    };

    getEndpointFunctions[table["name"]] = function(req, res) {
        sendFromId(req, res, table["name"], table["idName"]); 
    }
});

foodTables.forEach(table => {
    getAllEndpointFunctions[table] = function(req, res) {
        sendAllFoodRegistersFrom(res, table); 
    };
    
    getEndpointFunctions[table] = function(req, res) {
        sendFoodFromId(req, res, table);
    };
});
