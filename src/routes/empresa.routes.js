import { Router } from "express";
import { getEmpresa, createEmpresa, updateEmpresa, deleteEmpresa, getEmpresas, findEmpresa } from '../controllers/empresa.controller.js';
import { auth } from '../middlewares/auth.js';
 
const router = Router();

router.get('/api/empresas', auth, getEmpresas);
router.post('/api/empresas', auth, createEmpresa);
router.put('/api/empresas/:id', auth, updateEmpresa);
router.delete('/api/empresas/:id', auth, deleteEmpresa);
router.get('/api/empresas/:id', auth, getEmpresa);

export default router;