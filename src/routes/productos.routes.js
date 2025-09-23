import { Router } from 'express';
import {obtenerProductos, obtenerProducto, registrarProducto, eliminarProducto} from '../controllers/productos.controllers.js';

const router = Router();

// Rutas
router.get('/productos', obtenerProductos); // Ruta para obtener todos los productos 

// RUTA PARA OBTENER UN PRODUCTO POR SU ID 
router.get('/producto/:id_producto', obtenerProducto);

// RUTA PARA REGISTRAR UN PRODUCTO
router.post ('/registrarproducto' , registrarProducto);

// RUTA PARA ELIMINAR UN EMPLEADO POR SU ID
router.delete('/eliminarproducto/:id_producto', eliminarProducto);
export default router;