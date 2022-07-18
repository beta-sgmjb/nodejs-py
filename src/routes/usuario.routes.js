import { Router } from "express";
import { signIn, signUp, getUsuarios } from '../controllers/auth.controller.js';
import { auth } from "../middlewares/auth.js";

const router = Router();
router.get('/api/usuarios', getUsuarios);
router.post('/api/login', signIn);
router.post('/api/register', signUp);

export default router;