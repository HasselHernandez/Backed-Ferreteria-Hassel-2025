import { Router } from 'express';
import {obtenerDetallesVentas} from '../controllers/detalles_ventas.controlles.js';

const router = Router();

// Rutas
router.get('/detalles_ventas', obtenerDetallesVentas); // Ruta para obtener todos los clientes 

export default router;