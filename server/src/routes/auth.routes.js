import { Router } from 'express';
import { signup, login, logout } from '../controllers/auth.controllers.js';

const authRouter = Router();

authRouter.post('/sign-up', signup);
authRouter.post('/login', login);
authRouter.post('/logout', logout);

export default authRouter;
