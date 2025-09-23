import { Router } from 'express';
import {obtenerUsuarios, obtenerUsuario, registrarUsuario, eliminarUsuario} from '../controllers/usuarios.controllers.js';

const router = Router();

// Rutas
router.get('/usuarios', obtenerUsuarios); // Ruta para obtener todos los usuarios

// RUTA PARA OBTENER UN USUARIO POR SU ID 
router.get('/usuario/:id_usuario', obtenerUsuario);

// RUTA PARA REGISTRAR UNA EMPLEADO
router.post ('/registrarusuario' , registrarUsuario);

// RUTA PARA ELIMINAR UNA VENTA POR SU ID
router.delete('/eliminarusuario/:id_usuario', eliminarUsuario);
export default router;