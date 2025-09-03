import { Router } from 'express';
import {obtenerProductos} from '../controllers/productos.controllers.js';

const router = Router();

// Rutas
router.get('/productos', obtenerProductos); // Ruta para obtener todos los clientes 

export default router;