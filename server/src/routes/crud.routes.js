import { Router } from 'express';
import { getAllEndpointFunctions, getEndpointFunctions, postEndpointFunctions } from '../controllers/crud.controllers.js';
import { validateToken } from '../middlewares/validateToken.js';

const crudRouter = Router();

crudRouter.use(validateToken);

Object.entries(getAllEndpointFunctions).forEach( ( [table, endpointFunction] ) => {
    crudRouter.get(`/${ table }/get-all`, endpointFunction); 
});

Object.entries(getEndpointFunctions).forEach( ( [table, endpointFunction ] ) => {
    crudRouter.get(`/${ table }/get/:id`, endpointFunction);
});

Object.entries(postEndpointFunctions).forEach( ( [table, endpointFunction ] ) => {
    crudRouter.post(`/${ table }/new`, endpointFunction);
});

export default crudRouter;
