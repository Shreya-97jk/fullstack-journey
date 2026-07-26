import { Router } from 'express';
import * as authController from '../controllers/authController';
import { authLimiter } from '../middleware/rateLimiter';

const router = Router();

router.post('/signup', authLimiter, authController.signupUser);
router.post('/login', authLimiter, authController.loginUser);

export default router;