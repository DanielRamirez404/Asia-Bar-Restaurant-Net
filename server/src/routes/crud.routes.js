import { Router } from 'express';
import { getAllEndpointFunctions, getEndpointFunctions, postEndpointFunctions, deleteEndpointFucntions } from '../controllers/crud.controllers.js';
import { validateToken } from '../middlewares/validateToken.js';

const crudRouter = Router();

crudRouter.use(validateToken);

Object.entries(getAllEndpointFunctions).forEach( ( [table, endpointFunction] ) => {
    crudRouter.get(`/${ table }`, endpointFunction); 
});

Object.entries(getEndpointFunctions).forEach( ( [table, endpointFunction ] ) => {
    crudRouter.get(`/${ table }/:id`, endpointFunction);
});

Object.entries(postEndpointFunctions).forEach( ( [table, endpointFunction ] ) => {
    crudRouter.post(`/${ table }`, endpointFunction);
});

Object.entries(deleteEndpointFucntions).forEach( ( [table, endpointFunction ] ) => {
    crudRouter.delete(`/${ table }/:id`, endpointFunction);
});

export default crudRouter;
