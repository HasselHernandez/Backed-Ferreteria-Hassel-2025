import { Router } from 'express';
import {obtenerEmpleados} from '../controllers/empleados.controllers.js';

const router = Router();

// Rutas
router.get('/empleados', obtenerEmpleados); // Ruta para obtener todos los clientes 

export default router;