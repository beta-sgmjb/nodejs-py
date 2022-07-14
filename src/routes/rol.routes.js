import { Router } from "express";
import { getRoles, createRol } from '../controllers/rol.controller.js';

const router = Router();

router.get('/api/roles', getRoles);
router.post('/api/roles', createRol);

export default router;