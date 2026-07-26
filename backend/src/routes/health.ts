import { Router } from 'express';
import { checkHealth } from '../controllers/healthController'; // adjust path to your controller

const router = Router();

// Publicly accessible route — no authentication middleware attached
router.get('/', checkHealth);

export default router;