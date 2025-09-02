import { Router } from 'express';
import {obtenerCategorias} from '../controllers/categorias.controllers.js';

const router = Router();

// Rutas
router.get('/categorias', obtenerCategorias); // Ruta para obtener todos los clientes 

export default router;
