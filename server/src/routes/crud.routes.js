import { Router } from 'express';
import { getAllEndpointFunctions, getEndpointFunctions, postEndpointFunctions, deleteEndpointFunctions, putEndpointFunctions, searchEndpointFunctions } from '../controllers/crud.controllers.js';
import { getLastSaleID } from '../libs/crudOperations.js';
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

Object.entries(deleteEndpointFunctions).forEach( ( [table, endpointFunction ] ) => {
    crudRouter.delete(`/${ table }/:id`, endpointFunction);
});

Object.entries(putEndpointFunctions).forEach( ( [table, endpointFunction ] ) => {
    crudRouter.put(`/${ table }/:id`, endpointFunction);
});

Object.entries(searchEndpointFunctions).forEach( ( [ table, endpointFunction ] ) => {
    crudRouter.get(`/${ table }/search/:query`, endpointFunction);
});;

crudRouter.get("/sales-id/last", getLastSaleID);


export default crudRouter;
