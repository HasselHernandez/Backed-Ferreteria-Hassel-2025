import { Router } from 'express';
import {obtenerCategorias, obtenerCategoria, registrarCategoria, eliminarCategoria} from '../controllers/categorias.controllers.js';

const router = Router();

// Rutas
router.get('/categorias', obtenerCategorias); // Ruta para obtener todos los clientes 

// RUTA PARA OBTENER UNA CATEGORIA POR SU ID 
router.get('/categoria/:id_categoria', obtenerCategoria);

// RUTA PARA REGISTRAR UNA CATEGORIA 
router.post ('/registrarcategoria' , registrarCategoria);

// RUTA PARA ELIMINAR UNA CATEGORIA POR SU ID
router.delete('/eliminarcategoria/:id_categoria', eliminarCategoria);

export default router;