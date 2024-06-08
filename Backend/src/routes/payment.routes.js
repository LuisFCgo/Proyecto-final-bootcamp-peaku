import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { getPayments, createPayment, deletePayment, getPayment } from '../controllers/payment.controller.js';

const router = Router();

router.get("/payments", authRequired, getPayments);
router.get("/payments/:id", authRequired, getPayment);
router.post("/payments", authRequired, createPayment);
router.delete("/payments/:id", authRequired, deletePayment);

export default router;
