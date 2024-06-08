import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import {getStays, getStay, createStay, updateStay, deleteStay } from '../controllers/stay.controller.js';

const router = Router();

router.get('/tays', authRequired, getStays);
router.get('/stays/:id', authRequired, getStay);
router.post('/stays', authRequired, createStay);
router.delete('/stays:id', authRequired, deleteStay);
router.put('/stays:id', authRequired, updateStay);

export default router;