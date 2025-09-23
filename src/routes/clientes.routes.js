import { Router } from 'express';
import {obtenerClientes, obtenerCliente, registrarCliente, eliminarCliente} from '../controllers/clientes.controllers.js';

const router = Router();

// Rutas
router.get('/clientes', obtenerClientes); // Ruta para obtener todos los clientes 

// RUTA PARA OBTENER UNA CLIENTE POR SU ID 
router.get('/cliente/:id_cliente', obtenerCliente);

// RUTA PARA REGISTRAR UN CLIENTE  
router.post ('/registrarcliente' , registrarCliente);

// RUTA PARA ELIMINAR UN CLIENTE POR SU ID
router.delete('/eliminarcliente/:id_cliente', eliminarCliente);

export default router;