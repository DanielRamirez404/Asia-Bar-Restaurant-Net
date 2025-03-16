import handleQueryExecution from '../libs/handleQueryExecution.js';
import { sendAllRegistersFrom, sendAllFoodRegistersFrom } from '../libs/crudOperations.js';

const independentTables = [
    "Users",
    "Clients",
    "Sales"
];

const foodTables = [
    "MainDish",
    "SideDish",
    "Product"
];

export const getEndpoints = {};

independentTables.forEach(table => {
    getEndpoints[table] = function (req, res) {
        sendAllRegistersFrom(res, table); 
    };
});

foodTables.forEach(table => {
    getEndpoints[table] = function (req, res) {
        sendAllFoodRegistersFrom(res, table); 
    };
});
