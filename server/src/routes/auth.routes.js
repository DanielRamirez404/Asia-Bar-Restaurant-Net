import { Router } from 'express';
import { signup, login } from '../controllers/auth.controllers.js';

const router = Router();

router.post('/sign-up', signup);
router.post('/login', login);

export default router;
