import { Router } from "express";
import { getUsuarioRoles, createUsuarioRol, getRoles } from '../controllers/usuarioRol.controller.js';

const router = Router();

router.get('/api/ur', getUsuarioRoles);
router.get('/api/ur/:id', getRoles);
router.post('/api/ur', createUsuarioRol);

export default router;