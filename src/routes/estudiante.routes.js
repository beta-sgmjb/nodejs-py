import { Router } from "express";
import { getEstudiantes, createEstudiante, updateEstudiante, deleteEstudiante, getEstudiante } from '../controllers/estudiante.controller.js';
import { auth } from '../middlewares/auth.js';
 
const router = Router();

router.get('/api/estudiantes', auth, getEstudiantes);
router.post('/api/estudiantes', auth, createEstudiante);
router.put('/api/estudiantes/:id', auth, updateEstudiante);
router.delete('/api/estudiantes/:id', auth, deleteEstudiante);
router.get('/api/estudiantes/:id', auth, getEstudiante);

export default router;