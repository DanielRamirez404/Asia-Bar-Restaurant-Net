import { Router } from 'express';
import { getAllUsers } from '../controllers/crud.controllers.js';
import { validateToken } from '../middlewares/validateToken.js';

const crudRouter = Router();

crudRouter.use(validateToken);

crudRouter.get('/get-users', getAllUsers);

export default crudRouter;
