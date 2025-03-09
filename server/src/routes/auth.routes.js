import { Router } from 'express';
import { signup, login, logout, test } from '../controllers/auth.controllers.js';
import { validateToken } from '../middlewares/validateToken.js';

const router = Router();

router.post('/sign-up', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/test', validateToken, test);

export default router;
