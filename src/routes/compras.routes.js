import { Router } from 'express';
import {obtenerCompras, obtenerCompra, registrarCompra, eliminarCompra} from '../controllers/compras.controllers.js';

const router = Router();

// Rutas
router.get('/compras', obtenerCompras); // Ruta para obtener todos las compras

// RUTA PARA OBTENER UNA COMPRA POR SU ID 
router.get('/compra/:id_compra', obtenerCompra);

// RUTA PARA REGISTRAR UNA COMPRA  
router.post ('/registrarcompra' , registrarCompra);

// RUTA PARA ELIMINAR UNA COMPRA POR SU ID
router.delete('/eliminarcompra/:id_compra', eliminarCompra);

export default router;