import { Router } from "express";
import { getPersona, createPersona, updatePersona, deletePersona, getPersonas, findPersona } from '../controllers/persona.controller.js';
import { auth } from '../middlewares/auth.js';
 
const router = Router();

router.get('/api/personas', auth, getPersonas);
router.post('/api/personas', auth, createPersona);
router.put('/api/personas/:id', auth, updatePersona);
router.delete('/api/personas/:id', auth, deletePersona);
router.get('/api/personas/:id', auth, getPersona);

export default router;