import handleQueryExecution from '../libs/handleQueryExecution.js';
import { sendAllRegistersFrom } from '../libs/crudOperations.js';

const independentTables= [
    "Users",
    "Clients",
    "Sales"
];

export const getEndpoints = {};

independentTables.forEach(table => {
    getEndpoints[table] = function (req, res) {
        sendAllRegistersFrom(res, table); 
    };
});

