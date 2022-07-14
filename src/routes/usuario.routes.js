import { Router } from "express";
import { signIn, signUp, getUsuarios } from '../controllers/auth.controller.js';

const router = Router();
router.get('/api/usuarios', getUsuarios);
router.post('/api/signin', signIn);
router.post('/api/signup', signUp);

export default router;