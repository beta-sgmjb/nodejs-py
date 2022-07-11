import { Router } from "express";
import { signIn, signUp } from '../controllers/auth.controller.js';

const router = Router();

router.post('/api/signin', signIn);
router.post('/api/signup', signUp);

export default router;