import express, { json } from 'express';
import cors from 'cors';
import { register } from './controllers/auth.controller.js';
import morgan from 'morgan';
import cookieParser from "cookie-parser";


import authRoutes from './routes/auth.routes.js';
import paymentRoutes from './routes/payment.routes.js';

const app = express();
app.use(morgan('dev'));
app.use(json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000', // Permite solicitudes solo desde tu frontend
    credentials: true, // Permite el envío de cookies si es necesario
  }));
 
  
// Rutas
app.use('/api', authRoutes);
app.use('/api', paymentRoutes);
app.post('/api/register', register);




export default app;