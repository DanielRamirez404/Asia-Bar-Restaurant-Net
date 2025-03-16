import { Router } from 'express';
import { getAllEndpointFunctions, getEndpointFunctions } from '../controllers/crud.controllers.js';
import { validateToken } from '../middlewares/validateToken.js';

const crudRouter = Router();

crudRouter.use(validateToken);

Object.entries(getAllEndpointFunctions).forEach( ( [table, endpointFunction] ) => {
    crudRouter.get(`/${ table.toLowerCase() }/get-all`, endpointFunction); 
});

Object.entries(getEndpointFunctions).forEach( ( [table, endpointFunction ] ) => {
    crudRouter.get(`/${ table.toLowerCase() }/get/:id`, endpointFunction);
});

export default crudRouter;
