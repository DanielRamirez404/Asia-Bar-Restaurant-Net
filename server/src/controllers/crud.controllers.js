import handleQueryExecution from '../libs/handleQueryExecution.js';
import { sendAllRegistersFrom } from '../libs/crudOperations.js';

export const getAllUsers = (req, res) => {
    sendAllRegistersFrom(res, "Users"); 
}
