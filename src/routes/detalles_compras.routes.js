import { Router } from 'express';
import {obtenerDetallesCompras} from '../controllers/detalles_compras.controllers.js';

const router = Router();

// Rutas
router.get('/detalles_compras', obtenerDetallesCompras); // Ruta para obtener todos los clientes 

export default router;