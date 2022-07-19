import { Router } from "express";
import { getTipoEmpresa, createTipoEmpresa, updateTipoEmpresa, deleteTipoEmpresa, getTipoEmpresas, findTipoEmpresa } from '../controllers/tipoEmpresa.controller.js';
import { auth } from '../middlewares/auth.js';
 
const router = Router();

router.get('/api/tipoEmpresas', auth, getTipoEmpresas);
router.post('/api/tipoEmpresas', auth, createTipoEmpresa);
router.put('/api/tipoEmpresas/:id', auth, updateTipoEmpresa);
router.delete('/api/tipoEmpresas/:id', auth, deleteTipoEmpresa);
router.get('/api/tipoEmpresas/:id', auth, getTipoEmpresa);

export default router;