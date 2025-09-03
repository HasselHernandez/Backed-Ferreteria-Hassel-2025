import { Router } from 'express';
import {obtenerCompras} from '../controllers/compras.controllers.js';

const router = Router();

// Rutas
router.get('/compras', obtenerCompras); // Ruta para obtener todos los clientes 

export default router;