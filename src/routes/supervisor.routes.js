import { Router } from "express";
import { getSupervisores, getSupervisor, createSupervisor, updateSupervisor, deleteSupervisor, findSupervisor } from '../controllers/supervisor.controller.js';
import { auth } from '../middlewares/auth.js';
 
const router = Router();

router.get('/api/supervisores', auth, getSupervisores);
router.post('/api/supervisores', auth, createSupervisor);
router.put('/api/supervisores/:id', auth, updateSupervisor);
router.delete('/api/supervisores/:id', auth, deleteSupervisor);
router.get('/api/supervisores/:id', auth, getSupervisor);

export default router;