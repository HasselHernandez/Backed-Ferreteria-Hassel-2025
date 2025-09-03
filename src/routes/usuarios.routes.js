import { Router } from 'express';
import {obtenerUsuarios} from '../controllers/usuarios.controllers.js';

const router = Router();

// Rutas
router.get('/usuarios', obtenerUsuarios); // Ruta para obtener todos los clientes 

export default router;