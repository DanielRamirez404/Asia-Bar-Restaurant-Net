import { Router } from 'express';
import { getEndpoints } from '../controllers/crud.controllers.js';
import { validateToken } from '../middlewares/validateToken.js';

const crudRouter = Router();

crudRouter.use(validateToken);

Object.entries(getEndpoints).forEach( ( [table, endpointFunction] ) => {
    crudRouter.get(`/${ table.toLowerCase() }/get-all`, endpointFunction); 
});

export default crudRouter;
