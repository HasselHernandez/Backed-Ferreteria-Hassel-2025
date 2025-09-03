import { Router } from 'express';
import {obtenerClientes} from '../controllers/clientes.controllers.js';

const router = Router();

// Rutas
router.get('/clientes', obtenerClientes); // Ruta para obtener todos los clientes 

export default router;