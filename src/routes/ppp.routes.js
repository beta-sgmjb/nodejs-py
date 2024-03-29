import { Router } from "express";
import { getPpps, createPpp, updatePpp, deletePpp, getPpp, find } from '../controllers/ppp.controller.js';
import { auth } from '../middlewares/auth.js';
import { showPppRule } from '../rules/ppp.rule.js';

const router = Router();

router.get('/api/ppps', auth, getPpps);
router.post('/api/ppps', auth, createPpp);
router.put('/api/ppps/:id', auth, find, updatePpp);
router.delete('/api/ppps/:id', auth, find, deletePpp);
router.get('/api/ppps/:id', auth, find, showPppRule, getPpp);

export default router;