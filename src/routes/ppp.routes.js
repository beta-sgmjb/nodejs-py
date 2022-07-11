import { Router } from "express";
import { getPpps, createPpp, updatePpp, deletePpp, getPpp } from '../controllers/ppp.controller.js';
import { auth } from '../middlewares/auth.js';

const router = Router();

router.get('/ppps', auth, getPpps);
router.post('/ppps', auth, createPpp);
router.put('/ppps/:id', auth, updatePpp);
router.delete('/ppps/:id', auth, deletePpp);
router.get('/ppps/:id', auth, getPpp);

export default router;