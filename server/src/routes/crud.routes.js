import { Router } from 'express';
import { test } from '../controllers/crud.controllers.js';
import { validateToken } from '../middlewares/validateToken.js';

const crudRouter = Router();

crudRouter.use(validateToken);

crudRouter.get('/test', test);

export default crudRouter;
